import { addWrapper, capitalizePrint } from './functions'
import Print from './print'

export default {
  print: (params, printFrame) => {
    // Check if we received proper data
    if (typeof params.printable !== 'object') {
      throw new Error('Invalid javascript data object (JSON).')
    }

    // Check if properties were provided
    if (!params.properties || typeof params.properties !== 'object') {
      throw new Error('Invalid properties array for your JSON data.')
    }

    // Variable to hold html string
    let htmlData = ''

    // Check print has header
    if (params.header) {
      htmlData += '<h1 style="font-weight:300;">' + params.header + '</h1>'
    }

    // Function to build html templates for json data
    htmlData += jsonToHTML(params)

    // Store html data
    params.htmlData = addWrapper(htmlData, params)

    // Print json data
    Print.send(params, printFrame)
  }
}

function jsonToHTML (params) {
  let data = params.printable
  let properties = params.properties

  let htmlData = '<div style="display:flex; flex-direction: column;">'

  // Header
  htmlData += '<div style="flex:1; display:flex;">'

  for (let a = 0; a < properties.length; a++) {
    htmlData += '<div style="flex:1; padding:5px;">' + capitalizePrint(properties[a]['displayName'] || properties[a]) + '</div>'
  }

  htmlData += '</div>'

  // Create html data
  for (let i = 0; i < data.length; i++) {
    htmlData += '<div style="flex:1; display:flex;'
    htmlData += params.border ? 'border:1px solid lightgray;' : ''
    htmlData += '">'

    for (let n = 0; n < properties.length; n++) {
      htmlData += '<div style="flex:1; padding:5px;">' + data[i][properties[n]['field'] || properties[n]] + '</div>'
    }

    htmlData += '</div>'
  }

  htmlData += '</div>'

  return htmlData
}

'use strict'

import Browser from './browser'
import Modal from './modal'
import Pdf from './pdf'
import Html from './html'
import Image from './image'
import Json from './json'

let printTypes = ['pdf', 'html', 'image', 'json']

export default {
  init () {
    let params = {
      printable: null,
      type: 'pdf',
      header: null,
      maxWidth: 800,
      font: 'TimesNewRoman',
      font_size: '12pt',
      honorMarginPadding: true,
      honorColor: false,
      properties: null,
      showModal: false,
      modalMessage: 'Retrieving Document...',
      frameId: 'printJS',
      border: true,
      htmlData: ''
    }

    // Check if a printable document or object was supplied
    let args = arguments[0]
    if (args === undefined) {
      throw new Error('printJS expects at least 1 attribute.')
    }

    switch (typeof args) {
      case 'string':
        params.printable = encodeURI(args)
        params.type = arguments[1] || params.type
        break

      case 'object':
        params.printable = args.printable
        params.type = typeof args.type !== 'undefined' ? args.type : params.type
        params.frameId = typeof args.frameId !== 'undefined' ? args.frameId : params.frameId
        params.header = typeof args.header !== 'undefined' ? args.header : params.header
        params.maxWidth = typeof args.maxWidth !== 'undefined' ? args.maxWidth : params.maxWidth
        params.font = typeof args.font !== 'undefined' ? args.font : params.font
        params.font_size = typeof args.font_size !== 'undefined' ? args.font_size : params.font_size
        params.honorMarginPadding = typeof args.honorMarginPadding !== 'undefined' ? args.honorMarginPadding : params.honorMarginPadding
        params.properties = typeof args.properties !== 'undefined' ? args.properties : params.properties
        params.showModal = typeof args.showModal !== 'undefined' ? args.showModal : params.showModal
        params.modalMessage = typeof args.modalMessage !== 'undefined' ? args.modalMessage : params.modalMessage
        break
      default:
        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + typeof args)
    }

    if (!params.printable) {
      throw new Error('Missing printable information.')
    }

    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid print type. Available types are: pdf, html, image and json.')
    }

    // Check if we are showing a feedback message to the user (useful for large files)
    if (params.showModal) {
      Modal.show(params)
    }

    // To prevent duplication and issues, remove printFrame from the DOM, if it exists
    let usedFrame = document.getElementById(params.frameId)

    if (usedFrame) {
      usedFrame.parentNode.removeChild(usedFrame)
    }

    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)
    let printFrame

    if (Browser.isIE() && params.type === 'pdf') {
      // Create embed element
      printFrame = document.createElement('embed')
      printFrame.setAttribute('type', 'application/pdf')

      // Hide embed
      printFrame.setAttribute('style', 'width:0px;height:0px;')
    } else {
      // Create iframe element
      printFrame = document.createElement('iframe')

      // Hide iframe
      printFrame.setAttribute('style', 'display:none;')
    }

    // Set element id
    printFrame.setAttribute('id', params.frameId)

    // For non pdf printing in Chrome and Safari, pass an empty html document to srcdoc (force onload callback)
    if (params.type !== 'pdf' && (Browser.isChrome() || Browser.isSafari())) {
      printFrame.srcdoc = '<html><head></head><body></body></html>'
    }

    // Check printable type
    switch (params.type) {
      case 'pdf':
        // Check browser support for pdf and if not supported we will just open the pdf file instead
        if (Browser.isFirefox() || Browser.isIE() || Browser.isEdge()) {
          console.log('PrintJS currently doesn\'t support PDF printing in Firefox, Internet Explorer and Edge.')
          let win = window.open(params.printable, '_blank')
          win.focus()
          // Make sure there is no loading modal opened
          if (params.showModal) Modal.close()
        } else {
          Pdf.print(params, printFrame)
        }
        break
      case 'image':
        Image.print(params, printFrame)
        break
      case 'html':
        Html.print(params, printFrame)
        break
      case 'json':
        Json.print(params, printFrame)
        break
      default:
        throw new Error('Invalid print type. Available types are: pdf, html, image and json.')
    }
  }
}


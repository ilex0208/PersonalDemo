import { addWrapper } from './functions';
import Print from './print';

export default {
  print: (params, printFrame) => {
    // Get HTML printable element
    let printElement = params.printable;

    // Check if element exists
    if (!printElement) {
      console.error('Invalid HTML element id: ' + params.printable);
      return false;
    }

    // Store html data
    params.htmlData = addWrapper(printElement, params);

    // Print html element contents
    Print.send(params, printFrame);
  }
};

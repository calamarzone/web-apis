// Create a class for the element
class ConsoleComponent extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      const template = document.getElementById('console-component');
      //const template = document.getElementsByTagName('console-component');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true));
      
    }
  }
  
    const slottedSpan = document.querySelector('console-component span');
    console.log(slottedSpan.slot);
  // Define the new element
  customElements.define('console-component', ConsoleComponent);
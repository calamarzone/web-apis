customElements.define('cz-console-1',
  class extends HTMLElement {
    constructor() {
      super();
      console.log('Hi, Im the console API component 1');

      const template = document.getElementById('console-template');
      const templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'});

      const style = document.createElement('style');
      style.textContent = `
        h2 { margin: 0 0 10px; }
        ul { margin: 0; }
        p { margin: 10px 0; }
      `;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
);

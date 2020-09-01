import css from './style.css';
import template from './template.html';

class CalamarzoneWebStorage extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.shadowNode = this.attachShadow({mode: 'open'});
    this.appendStyle(this.shadowNode);
    this.appendTemplate(this.shadowNode);
  }

  /**
   * Lifecycle method
   */
  connectedCallback() {
    this.form = this.shadowRoot.getElementById('storage-form');
    this.getElements();
    this.addListeners();
  }

  /**
   * Get elements method
   */
  getElements() {
    this.data = this.shadowRoot.getElementById('data');
  }
  /**
   * Add event listeners to input, button, and textarea in the URL form
   */
  addListeners() {
    this.form.elements.save.addEventListener('click', () => {
      localStorage.name = this.form.elements.name.value;
      localStorage.password = this.form.elements.password.value;
    });

    this.form.elements.display.addEventListener('click', () => {
      if ((localStorage.name != undefined) &&
       (localStorage.password != undefined)) {
        this.data.textContent = 'Nombre: ' +
        localStorage.name + ' Password: ' + localStorage.password;
      } else {
        this.data.textContent =
        'No has introducido tu nombre y tu password';
      }
    });
  }
  /**
   * Append style to the shadow root
   *
   * @param {Object} shadowNode
   */
  appendStyle(shadowNode) {
    const style = document.createElement('style');
    style.innerText = css;
    shadowNode.appendChild(style);
  }

  /**
   * Append html template to the shadow root
   *
   * @param {Object} shadowNode
   */
  appendTemplate(shadowNode) {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = template;
    shadowNode.appendChild(templateElement.content.cloneNode(true));
  }
}

customElements.define('cz-web-storage', CalamarzoneWebStorage);
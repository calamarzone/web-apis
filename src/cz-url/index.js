import css from './style.css';
import template from './template.html';

const urlProperties = [
  'hash',
  'host',
  'hostname',
  'origin',
  'password',
  'pathname',
  'port',
  'protocol',
  'search',
  'username'
];

class CalamarzoneURL extends HTMLElement {
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
    this.url = this.originalURL;
    this.form = this.shadowRoot.getElementById('url-form');
    this.form.elements.url.value = this.url.href;
    this.populateData(this.form, this.url);
    this.addListeners();
  }

  /**
   * Add event listeners to input, button, and textarea in the URL form
   */
  addListeners() {
    this.form.elements.url.addEventListener('input', () => {
      this.url = new URL(this.form.elements.url.value);
      this.populateData(this.form, this.url);
    }, false);

    urlProperties.forEach((property) => {
      this.form.elements[property]
        .addEventListener('input', this.fieldEventHandler(property), false);
    });

    this.form.elements.reset.addEventListener('click', () => {
      this.url = this.originalURL;
      this.form.elements.url.value = this.url.href;
      this.populateData(this.form, this.url);
    });
  }

  /**
   * Event handler creator for each field
   *
   * @param {string} fieldName
   * @return {Function}
   */
  fieldEventHandler(fieldName) {
    const handler = () => {
      this.url[fieldName] = this.form.elements[fieldName].value;
      this.form.elements.url.value = this.url.href;
      this.populateData(this.form, this.url, fieldName);
    };
    return handler;
  }

  /**
   * Populate data into the URL form fields
   *
   * @param {Object} form
   * @param {Object} url
   * @param {string} skipProperty
   */
  populateData(form, url, skipProperty) {
    urlProperties.forEach((property) => {
      if (property !== skipProperty) {
        form.elements[property].value = url[property];
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

  /**
   * Retrieve the URL from the web component attribute url or takes location
   *
   * @return {string}
   */
  get originalURL() {
    const urlString = this.getAttribute('url') || window.location.href;
    return new URL(urlString);
  }
}

customElements.define('cz-url', CalamarzoneURL);
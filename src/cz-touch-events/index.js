import template from './template.html';
import css from './style.css';

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
    this.getElements();
    this.addListeners();
  }

  /**
   * Get elements method
   */
  getElements() {
    this.statusElement = this.shadowRoot.getElementById('touch-event-status');
    this.mainElement = this.shadowRoot.getElementById('touch-event-area');
  }

  /**
   * Add event listener to main element
   */
  addListeners() {
    // touchstart event
    this.mainElement.addEventListener('touchstart', () => {
      this.statusElement.textContent = 'Touch start event';
    }, false);

    // touchmove event
    this.mainElement.addEventListener('touchmove', () => {
      this.statusElement.textContent = 'Touch move event';
    }, false);

    // touchend event
    this.mainElement.addEventListener('touchend', () => {
      this.statusElement.textContent = 'Touch end event';

      // reset status text
      setTimeout(() => {
        this.statusElement.textContent = `nothing yet, use under 
      mobile 📱 and touch the area below to see the effects 👇`;
      }, 1000);
    }, false);
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

customElements.define('cz-touch-events', CalamarzoneURL);

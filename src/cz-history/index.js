import css from './style.css';
import template from './template.html';

class CalamarzoneHistory extends HTMLElement {
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
   * Lifecycle method
   */
  connectedCallback() {
    this.form = this.shadowNode.getElementById('history-form');
    this.addListeners();
  }

  /**
   * Add event listeners to buttons
   */
  addListeners() {
    this.form.elements.back.onclick = this.historyBack;
    this.form.elements.forward.onclick = this.historyForward;
    this.form.elements.go.onclick = this.historyGo;
    this.form.elements.reload.onclick = this.historyReload;
  }
  /**
   * History Back example
   */
  historyBack() {
    window.history.back();
  }

  /**
   * History Forward example
   */
  historyForward() {
    window.history.forward();
  }

  /**
   * History Go example
   */
  historyGo() {
    window.history.go(2);
  }

  /**
   * History Reload example
   */
  historyReload() {
    window.history.go();
  }
}

customElements.define('cz-history', CalamarzoneHistory);
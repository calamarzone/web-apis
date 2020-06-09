/**
 * CalamarzoneConsole class
 */
class CalamarzoneConsole extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    this.createAssert(shadow);
    this.createClear(shadow);
    this.createCount(shadow);
  }

  /**
   * Create Assert example
   * @param {ShadowRoot} shadow
   */
  createAssert(shadow) {
    const button = document.createElement('button');
    button.textContent = 'assert';

    button.onclick = () => {
      const random = Math.random() * 10;
      const limit = 5;
      console.assert(random > limit, {
        errorMsg: `Number ${random} is not greater than ${limit}`
      });
    };

    shadow.appendChild(button);
  }

  /**
   * Create Clear example
   * @param {ShadowRoot} shadow
   */
  createClear(shadow) {
    const button = document.createElement('button');
    button.textContent = 'clear';

    button.onclick = () => {
      console.clear();
    };

    shadow.appendChild(button);
  }

  /**
   * Create Count example
   * @param {ShadowRoot} shadow
   */
  createCount(shadow) {
    const button = document.createElement('button');
    button.textContent = 'count';

    button.onclick = () => {
      console.count();
    };

    shadow.appendChild(button);
  }
}

customElements.define('cz-console', CalamarzoneConsole);
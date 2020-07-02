import css from './style.css';

/**
 * CalamarzoneConsole class
 */
class CalamarzoneConsole extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    const style = document.createElement('style');
    style.innerText = css;
    shadowRoot.appendChild(style);
    // console.log(style);
    this.createAssert(shadowRoot);
    this.createClear(shadowRoot);
    this.createCount(shadowRoot);
    this.createCountreset(shadowRoot);
    this.createDebug(shadowRoot);
    this.createDir(shadowRoot);
    this.createDirXML(shadowRoot);
    this.createError(shadowRoot);
    this.createGroup(shadowRoot);
    this.createGroupCollapsed(shadowRoot);
    this.createInfo(shadowRoot);
    this.createLog(shadowRoot);
    this.createProfile(shadowRoot);
    this.createTable(shadowRoot);
    this.createTime(shadowRoot);
    this.createTimeLog(shadowRoot);
    this.createTimeStamp(shadowRoot);
    this.createTrace(shadowRoot);
    this.createWarn(shadowRoot);
    // this.createClear(shadow);
    // this.createCount(shadow);
  }

  /**
   * Create Assert example
   * @param {ShadowRoot} shadow
   */
  createAssert(shadow) {
    const button = document.createElement('button');
    button.textContent = 'assert';
    button.setAttribute('class', 'my-class');
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
    button.setAttribute('class', 'my-class');
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
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.count();
    };

    shadow.appendChild(button);
  }

  /**
   *  Create Countreset example
   * @param {shadowroot} shadow
   */
  createCountreset(shadow) {
    const button = document.createElement('button');
    button.textContent = 'countReset';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.countReset();
    };
    shadow.appendChild(button);
  }

  /**
   * Create Debug example
   * @param {shadowroot} shadow
   */
  createDebug(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Debug';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.debug('Debugging');
    };
    shadow.appendChild(button);
  }
  /**
   * Create Dir example
   * @param {shadowroot} shadow
   */
  createDir(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Dir';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.dir(button);
      console.log(typeof button);
      console.log(button);
    };
    shadow.appendChild(button);
  }
  /**
   * create DirXML example
   * @param {shadowroot} shadow
   */
  createDirXML(shadow) {
    const button = document.createElement('button');
    button.textContent = 'DirXML';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      const fancyThings = {
        car: '🏎️ Ferrari',
        watch: '⌚ Cartier',
        clothing: {
          shoes: '👠 Christian Louboutin',
          dress: '👗 Versace'
        },
        boat: '🛥️ Sunseeker'
      };
      console.dirxml(fancyThings);
      console.dirxml(button);
      console.log(typeof button);
      console.log(button);
    };
    shadow.appendChild(button);
  }
  /**
   *  Create Error example
   * @param {shadowroot} shadow
   */
  createError(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Error';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.error('This is an error message!');
    };
    shadow.appendChild(button);
  }
  /**
   * create Group example
   * @param {shadowroot} shadow
   */
  createGroup(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Group';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.group('Level 2');
      console.log('Level 2');
      console.group('Level 3');
      console.log('Level 3');
      console.log('More of level 3');
      console.groupEnd();
      console.log('Back to level 2');
      console.groupEnd();
    };
    shadow.appendChild(button);
  }
  /**
   *create GroupCollapsed example
   * @param {shadowroot} shadow
   */
  createGroupCollapsed(shadow) {
    const button = document.createElement('button');
    button.textContent = 'GroupCollapsed';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.groupCollapsed('Level 2');
      console.log('Level 2');
      console.log('You had to displayed it right?');
      console.group('Level 3');
      console.log('Level 3');
      console.log('More of level 3');
      console.log('You had to displayed it right?');
      console.groupEnd();
      console.log('Back to level 2');
      console.groupEnd();
    };
    shadow.appendChild(button);
  }
  /**
   *  create Info example
   * @param {shadowroot} shadow
   */
  createInfo(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Info';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.info('This is an info message');
    };
    shadow.appendChild(button);
  }
  /**
   *  create Log example
   * @param {shadowroot} shadow
   */
  createLog(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Log';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.log(document.body);
    };
    shadow.appendChild(button);
  }
  /**
   *  create Profile example
   * @param {shadowroot} shadow
   */
  createProfile(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Profile';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.profile('myProfile');
      let time = 1;
      const interval = setInterval(function() {
        if (time <= 3) {
          alert(time);
          time++;
        } else {
          clearInterval(interval);
          console.profileEnd();
          alert('Go to the JavaScript Profiler to see the results');
        }
      }, 4000);
    };
    shadow.appendChild(button);
  }

  /**
   *  create Table example
   * @param {shadowroot} shadow
   */
  createTable(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Table';
    button.setAttribute('class', 'my-class');
    /**
     *Person
     * @param {*} firstName
     * @param {*} lastName
     */
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    button.onclick = () => {
      const devs = {};
      devs.dev1 = new Person('Irving', 'Medina');
      devs.dev2 = new Person('Rodrigo', 'Benavides');
      console.table(devs);
    };
    shadow.appendChild(button);
  }
  /**
   *  create Time example
   * @param {shadowroot} shadow
   */
  createTime(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Time';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.time('mytime');
      let time = 1;
      const interval = setInterval(function() {
        if (time <= 5) {
          console.log(time);
          time++;
        } else {
          clearInterval(interval);
          console.timeEnd('mytime');
          console.log('Time is 5');
        }
      }, 4000);
    };
    shadow.appendChild(button);
  }
  /**
   *  create TimeLog example
   * @param {shadowroot} shadow
   */
  createTimeLog(shadow) {
    const button = document.createElement('button');
    button.textContent = 'TimeLog';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.timeLog('mytime');
    };
    shadow.appendChild(button);
  }
  /**
   *  create TimeStamp example
   * @param {shadowroot} shadow
   */
  createTimeStamp(shadow) {
    const button = document.createElement('button');
    button.textContent = 'TimeStamp';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.timeStamp('Jimmy');
    };
    shadow.appendChild(button);
  }
  /**
   *  create Trace example
   * @param {shadowroot} shadow
   */
  createTrace(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Trace';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      /**
       *function1
       */
      function function1() {
        /**
         *function2
         */
        function function2() {
          console.trace();
        }
        function2();
      }
      function1();
    };
    shadow.appendChild(button);
  }
  /**
   *  create Warn example
   * @param {shadowroot} shadow
   */
  createWarn(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Warn';
    button.setAttribute('class', 'my-class');
    button.onclick = () => {
      console.warn('This is an warning message');
    };
    shadow.appendChild(button);
  }
}

customElements.define('cz-console', CalamarzoneConsole);
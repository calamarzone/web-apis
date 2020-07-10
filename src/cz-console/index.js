import css from './style.css';
import template from './template.html';


class CalamarzoneConsole extends HTMLElement {
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
    this.form = this.shadowNode.getElementById('console-form');
    this.addListeners();
  }

  /**
   * Add event listeners to buttons
   */
  addListeners() {
    this.form.elements.assert.onclick = this.consoleAssert;
    this.form.elements.count.onclick = this.consoleCount;
    this.form.elements.countReset.onclick = this.consoleCountreset;
    this.form.elements.debug.onclick = this.consoleDebug;
    this.form.elements.dir.onclick = this.consoleDir;
    this.form.elements.dirxml.onclick = this.consoleDirXML;
    this.form.elements.errorLog.onclick = this.consoleError;
    this.form.elements.group.onclick = this.consoleGroup;
    this.form.elements.groupCollapsed.onclick = this.consoleGroupCollapsed;
    this.form.elements.info.onclick = this.consoleInfo;
    this.form.elements.log.onclick = this.consoleLog;
    this.form.elements.profile.onclick = this.consoleProfile;
    this.form.elements.table.onclick = this.consoleTable;
    this.form.elements.time.onclick = this.consoleTime;
    this.form.elements.timelog.onclick = this.consoleTimeLog;
    this.form.elements.timeStamp.onclick = this.consoleTimeStamp;
    this.form.elements.trace.onclick = this.consoleTrace;
    this.form.elements.warn.onclick = this.consoleWarn;
    this.form.elements.clear.onclick = this.consoleClear;
  }

  /**
   * Assert example
   * @param {ShadowRoot} shadow
   */
  consoleAssert() {
    const random = Math.random() * 10,
          limit = 5;
    console.assert(random > limit, {
      errorMsg: `Number ${random} is not greater than ${limit}`
    });
  }

  /**
   * Console Clear example
   */
  consoleClear() {
    console.clear();
  }

  /**
   * Console Count example
   */
  consoleCount() {
    console.count();
  }

  /**
   * Console Countreset example
   */
  consoleCountreset() {
    console.countReset();
  }

  /**
   * Console Debug example
   */
  consoleDebug() {
    console.debug('Debugging');
  }

  /**
   * Console Dir example
   */
  consoleDir() {
    console.dir(this);
    console.log(typeof this);
    console.log(this);
  }

  /**
   * Console DirXML example
   */
  consoleDirXML() {
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
    console.dirxml(this);
    console.log(typeof this);
    console.log(this);
  }

  /**
   * Console Error example
   */
  consoleError() {
    console.error('This is an error message!');
  }

  /**
   * Console Group example
   */
  consoleGroup() {
    console.group('Level 2');
    console.log('Level 2');
    console.group('Level 3');
    console.log('Level 3');
    console.log('More of level 3');
    console.groupEnd();
    console.log('Back to level 2');
    console.groupEnd();
  }

  /**
   * Console GroupCollapsed example
   */
  consoleGroupCollapsed() {
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
  }

  /**
   * Console Info example
   */
  consoleInfo() {
    console.info('This is an info message');
  }

  /**
   * Console Log example
   */
  consoleLog() {
    console.log(document.body);
  }

  /**
   * Console Profile example
   */
  consoleProfile() {
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
  }

  /**
   * Console Table example
   */
  consoleTable() {
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    const devs = {};
    devs.dev1 = new Person('Irving', 'Medina');
    devs.dev2 = new Person('Rodrigo', 'Benavides');
    console.table(devs);
  }

  /**
   * Console Time example
   */
  consoleTime() {
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
  }

  /**
   * Console TimeLog example
   */
  consoleTimeLog() {
    console.timeLog('mytime');
  }

  /**
   * Console TimeStamp example
   */
  consoleTimeStamp() {
    console.timeStamp('Jimmy');
  }

  /**
   * Console Trace example
   */
  consoleTrace() {
    function function1() {
      function function2() {
        console.trace();
      }
      function2();
    }
    function1();
  }

  /**
   * Console Warn example
   */
  consoleWarn() {
    console.warn('This is an warning message');
  }
}

customElements.define('cz-console', CalamarzoneConsole);
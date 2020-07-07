/**
 * ConsoleComponent
 */
class ConsoleComponent extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    // Always call super first in constructor
    super();

    const shadow = this.attachShadow({mode: 'open'});

    this.getAsert(shadow);
    this.getClear(shadow);
    this.getCount(shadow);
    this.getCountreset(shadow);
    this.getDebug(shadow);
    this.getDir(shadow);
    this.getDirXML(shadow);
    this.getError(shadow);
    this.getGroup(shadow);
    this.getGroupCollapsed(shadow);
    this.getInfo(shadow);
    this.getLog(shadow);
    this.getProfile(shadow);
    this.getTable(shadow);
    this.getTime(shadow);
    this.getTimeLog(shadow);
    this.getTimeStamp(shadow);
    this.getTrace(shadow);
    this.getWarn(shadow);
  }
  /**
   *getAsert
   * @param {shadowroot} shadow
   */
  getAsert(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Assert';
    button.onclick = () => {
      const number = Math.floor(Math.random() * 10);
      console.assert(number % 2 === 0,
        {errorMsg: `Number ${number} is not even`});
      console.log(`Number ${number}`);
    };
    shadow.appendChild(button);
  }

  /**
   *getClear
   * @param {shadowroot} shadow
   */
  getClear(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Clear';
    button.onclick = () => {
      console.clear();
    };
    shadow.appendChild(button);
  }

  /**
   *getCount
   * @param {shadowroot} shadow
   */
  getCount(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Count';
    button.onclick = () => {
      console.count();
    };
    shadow.appendChild(button);
  }

  /**
   *getCountreset
   * @param {shadowroot} shadow
   */
  getCountreset(shadow) {
    const button = document.createElement('button');
    button.textContent = 'countReset';
    button.onclick = () => {
      console.countReset();
    };
    shadow.appendChild(button);
  }

  /**
   *getDebug
   * @param {shadowroot} shadow
   */
  getDebug(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Debug';
    button.onclick = () => {
      console.debug('Debugging');
    };
    shadow.appendChild(button);
  }
  /**
   *getDir
   * @param {shadowroot} shadow
   */
  getDir(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Dir';
    button.onclick = () => {
      console.dir(button);
      console.log(typeof button);
      console.log(button);
    };
    shadow.appendChild(button);
  }
  /**
   *getDirXML
   * @param {shadowroot} shadow
   */
  getDirXML(shadow) {
    const button = document.createElement('button');
    button.textContent = 'DirXML';
    button.onclick = () => {
      const fancyThings = {
        car: '🏎️ Ferrari',
        watch: '⌚ Cartier',
        clothing: {
          shoes: '👠 Christian Louboutin',
          dress: '👗 Versace',
        },
        boat: '🛥️ Sunseeker',
      };
      console.dirxml(fancyThings);
      console.dirxml(button);
      console.log(typeof button);
      console.log(button);
    };
    shadow.appendChild(button);
  }
  /**
   *getError
   * @param {shadowroot} shadow
   */
  getError(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Error';
    button.onclick = () => {
      console.error('This is an error message!');
    };
    shadow.appendChild(button);
  }
  /**
   *getGroup
   * @param {shadowroot} shadow
   */
  getGroup(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Group';
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
   *getGroupCollapsed
   * @param {shadowroot} shadow
   */
  getGroupCollapsed(shadow) {
    const button = document.createElement('button');
    button.textContent = 'GroupCollapsed';
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
   *getInfo
   * @param {shadowroot} shadow
   */
  getInfo(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Info';
    button.onclick = () => {
      console.info('This is an info message');
    };
    shadow.appendChild(button);
  }
  /**
   *getLog
   * @param {shadowroot} shadow
   */
  getLog(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Log';
    button.onclick = () => {
      console.log(document.body);
    };
    shadow.appendChild(button);
  }
  /**
   *getProfile
   * @param {shadowroot} shadow
   */
  getProfile(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Profile';
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
   *getTable
   * @param {shadowroot} shadow
   */
  getTable(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Table';
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
   *getTime
   * @param {shadowroot} shadow
   */
  getTime(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Time';
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
   *getTimeLog
   * @param {shadowroot} shadow
   */
  getTimeLog(shadow) {
    const button = document.createElement('button');
    button.textContent = 'TimeLog';
    button.onclick = () => {
      console.timeLog('mytime');
    };
    shadow.appendChild(button);
  }
  /**
   *getTimeStamp
   * @param {shadowroot} shadow
   */
  getTimeStamp(shadow) {
    const button = document.createElement('button');
    button.textContent = 'TimeStamp';
    button.onclick = () => {
      console.timeStamp('Jimmy');
    };
    shadow.appendChild(button);
  }
  /**
   *getTrace
   * @param {shadowroot} shadow
   */
  getTrace(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Trace';
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
   *getWarn
   * @param {shadowroot} shadow
   */
  getWarn(shadow) {
    const button = document.createElement('button');
    button.textContent = 'Warn';
    button.onclick = () => {
      console.warn('This is an warning message');
    };
    shadow.appendChild(button);
  }
}

// Define the new element
customElements.define('console-component', ConsoleComponent);
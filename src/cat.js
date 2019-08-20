import util from 'util';
import color from 'ansi-colors'


const stdout = (str) => str;

const __CustomizeColorConf = {
  log      : stdout,
  info     : color.cyan,
  warning  : color.yellow,
  error    : color.red,
  success  : color.green,
  dark     : color.dim.gray,

  disabled : color.gray,
  em       : color.italic,
  heading  : color.bold.underline,
  muted    : color.dim,
  primary  : color.blue,
  strong   : color.bold,
  underline: color.underline,
};



color.theme(__CustomizeColorConf);


class Cat {
  set debuggerState(bState) {
    this[Symbol.for('cat.debuggerState')] = bState === true || false;;
  }

  get debuggerState() {
    return this[Symbol.for('cat.debuggerState')];
  }

  constructor() {
    Object.keys(__CustomizeColorConf).forEach((method)=>{
      Cat.prototype[method] = (...argv) => {

        if (this[Symbol.for('cat.debuggerState')] === false) {
          return;
        }

        const str = color[method](util.format(...argv)) + '\n';

        process.stdout.write(str);
      }
    });
  }

  debugger(bState) {
    this.debuggerState = bState === true || false;
  }
}


export { Cat };


export default new Cat();
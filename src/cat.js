import * as util from 'util';
import * as color from 'ansi-colors';

import { stdout, clear } from './stdout';


const __CustomizeColorConf = {
  info     : color.cyan,
  warn     : color.yellow,
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


function Kitty(options = {}) {
  if (!(this instanceof Kitty)) {
    throw new TypeError("Cannot call a class as a function");
  }

  const _privater_ = {};

  class Cat {
    clear = clear
  }

  Object.keys({ ...options }).forEach((method) => {

    if (method in Cat.prototype) return;

    (Cat.prototype)[method] = function proxyAgent(...output) {
      stdout({ output, method, options });
    }
  });

  return new Cat(options);
};


/* -------------------------------------------------------------------------- */
export default new Kitty({
  debug  : '#cyanBright(:i-debug[:datetime])',
  log    : ':i-log[:datetime]',
  info   : '#blueBright(:i-info[:datetime])',
  success: '#greenBright(:i-success[:datetime])',
  warn   : '#yellowBright(:i-warn[:datetime])',
  error  : '#redBright(:i-error[:datetime])',
  primary  : '#grey(:i-primary[:datetime])',
});


export const Cat = Kitty;
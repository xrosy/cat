import * as util from 'util';
import * as colors from 'ansi-colors';
import * as variables from './variables';

import emojiCode from './emoji';

export const builtIn = ({ output, method }) => {
  let targetOutput = output;

  Object.keys(variables).forEach((varName)=>{
    let value = variables[varName];

    value = typeof value === 'function' ? value() : value;

    targetOutput = targetOutput.replace(new RegExp(`:${varName}`, 'g'), value);
  });


  return targetOutput.replace(':method', method);
};


export const emoji = ({ output }) => {
  const rSign = /\:i\-([a-z]+)/g;

  return output.replace(rSign, (sign, match, ...argv) => {
    return emojiCode[match] || sign;
  });
};


/* 输出着色 */
// console.log(colors.styles);
export const tinter = ({ output, method }) => {
  let stack = [];

  function iterater(str) {
    const [matcher, $1, $2] = str.match(/#(\w+)\(([^#\(\))]+)\)/) || [];
    const { wrap: colorWrap = c => c } = (colors.styles)[$1] || {};

    if (typeof matcher === 'undefined') return str;

    return iterater(str.replace(matcher, colorWrap($2)));
  }

  return iterater(output);
};


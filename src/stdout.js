import fs from 'fs';
import * as util from 'util';
import * as broker from './libs/broker';

const { tinter, ...prehandles } = broker;

const clear = () => {
  process.stdout.write(process.platform === 'win32' ? '\x1bc' : '\x1b[2J\x1b[3J\x1b[H');
};

const format = ({ output, method, options })=> {
  const _mTinter = tinter({ method, output: options[method] });
  const _oTinter = tinter({ method, output: util.format(...output) });

  let targetOutput = util.format(_mTinter, _oTinter);

  Object.values(prehandles).forEach((handler) => {
    targetOutput = handler({ output: targetOutput, method, options });
  });

  return targetOutput;
}


const stdout = (...argv) => {
  // console.log('\xbb \x1b[35mstdout <source>:\x1b[0m', JSON.stringify(source));
  const outputer = format(...argv);

  if (typeof outputer !== 'string') {
    throw TypeError('The value returned by the result must be a string type.');
  }

  process.stdout.write(`${outputer}\n`);
}

// export const output2file = () => {
//   fs.writeFile('<path>', '<data>', {}, function callback() {
//     console.log('');
//   });
// }


export { stdout, clear };

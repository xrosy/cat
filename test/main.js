const { Cat } = require('../built/cat.js');
const cat = require('../built/cat.js').default;


// cat.clear();
cat.log('b', 'c', false, 123, NaN, {a: 123});
cat.info('info');
cat.success('success');
cat.warn('warn');
cat.debug('-debug-');
cat.error('-error-');




// const str = '...#key1(...#key2(...#key4(...)...)...#key3(...#key4(...#key1(...)...#key2(...#key4(...)...)...)...)...)...#key9(...#(angthing)...)...';
const str = '...#K1(..#K3(...#K5(.)...)...#K4(.)..)...#K2(.)...';
let reg = /.*/g;

reg = /\#(.*)/g;


function iterater(src) {
  let target = src;

  // console.log(reg.exec(src));

  src.replace(reg, (...sign)=>{
    // let $ = result.slice(0, -2);
    console.log(sign);
    // console.log(sign.match(/#\w+\(/g));
  });
}

// iterater(str);


// cat.warn('[%method][:excl][:123]kwarn[:cross]');

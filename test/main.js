const { Cat } = require('../built/cat.js');
const cat = require('../built/cat.js').default;


// cat.clear();
cat.log('b', 'c', false, 123, NaN, {a: 123});
cat.info('info', 'qqq');
cat.success('success %s ****', 'kkkk', '&&&& ++');
cat.warn('warn');
cat.debug('-debug-');
cat.error('-error-');
cat.primary('-error-');

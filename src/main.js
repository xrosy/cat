import cat from './cat';


cat.debugger(false);

cat.log('[aaa]');
cat.info('111', '222', __dirname);
cat.warning('111', '222', __dirname);
cat.error('111', '222', __dirname);
cat.success('111', '222', __dirname);
cat.primary('111', '222', __dirname);
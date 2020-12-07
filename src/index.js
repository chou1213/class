require('./index.scss');
if (process.env.NODE_ENV === 'development') {
  console.log('hello development');
} else {
  console.log('hello production');
}

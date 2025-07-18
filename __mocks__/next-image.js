const React = require('react');

module.exports = React.forwardRef((props, ref) => {
  return <img ref={ref} {...props} />;
});

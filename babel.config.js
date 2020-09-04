const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve('./')],
        alias: {
          cosmo: './'
        }
      }
    ]
  ]
};

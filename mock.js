var ReactNativeMock = require('./build/react-native');

// the cache key that real react native would get
var key = require.resolve('react-native');

// make sure the cache is filled with our lib
require.cache[key] = ReactNativeMock;

const path = require('path');

module.exports = {
    webpack: (config, env) => {
        // add the fallback option to the resolve object
        config.resolve.fallback = {
            path: require.resolve('path-browserify'),
            stream: require.resolve("stream-browserify"),
            assert: require.resolve("assert"),
            crypto: require.resolve("crypto-browserify"),
            fs: require.resolve("browserify-fs"),
        };
        return config;
    },
};

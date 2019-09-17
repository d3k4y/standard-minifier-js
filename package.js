Package.describe({
    name: 'd3k4y:standard-minifier-js',
    version: '2.1.2',
    summary: 'Harmony javascript minifiers used with Meteor apps by default.',
    documentation: 'README.md',
});

Package.registerBuildPlugin({
    name: "minifyStdJS",
    use: [
        'd3k4y:minifier-js@2.1.0',
        'babel-compiler@7.3.4',
        'ecmascript@0.8.0'
    ],
    sources: [
        'plugin/minify-js.js',
        'plugin/stats.js',
        'plugin/visitor.js',
        'plugin/utils.js',
    ],
});

Package.onUse(function(api) {
    api.use('isobuild:minifier-plugin@1.0.0');
});

requirejs.config({
    baseUrl: "./",
    paths: {
    	libs: "libs",
        lodash: "bower_components/lodash/lodash.min",
        PIXI: "/bower_components/pixi.js/bin/pixi.dev",
        factory: "libs/examples/factory"
    }
});

define(["libs/routes"], function(header){
});
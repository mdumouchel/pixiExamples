requirejs.config({
    baseUrl: "./",
    paths: {
    	libs: "/libs",
        lodash: "/bower_components/lodash/lodash.min",
        PIXI: "/bower_components/pixi.js/bin/pixi.dev",
        greenSock: "/bower_components/gsap/src/uncompressed/TweenMax",
        factory: "/libs/examples/factory"
    }
});

define(["libs/routes"], function(header){
});
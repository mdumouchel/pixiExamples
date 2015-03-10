define(["PIXI", "factory/bunnyFactory"], function(PIXI, bunnyFactory) {
	function init(){
	   // create an new instance of a pixi stage
        var stage = new PIXI.Stage(0x66FF99);

        // create a renderer instance.
        var renderer = PIXI.autoDetectRenderer(400, 300);

        // add the renderer view element to the DOM
        document.body.appendChild(renderer.view);

        requestAnimFrame( animate );
        var bunny = bunnyFactory.createBunny();
        stage.addChild(bunny);
        var bunny2 = bunnyFactory.createBunny();
        stage.addChild(bunny2);

        function animate() {

            requestAnimFrame( animate ); //This is what forces infinite loop..

            // just for fun, lets rotate mr rabbit a little
            bunny.spin();
            bunny2.spin();
            // render the stage   
            renderer.render(stage);
        }
    }

    return {
    	init: init
    }
})
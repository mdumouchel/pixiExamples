define(["PIXI", "greenSock"], function(PIXI, greensock) {
	function init(){
	// create an new instance of a pixi stage
        var stage = new PIXI.Stage(0x66FF99);

        // create a renderer instance.
        var renderer = PIXI.autoDetectRenderer(400, 300);

        // add the renderer view element to the DOM
        document.body.appendChild(renderer.view);

        requestAnimFrame(animate);

        // create a texture from an image path
        var texture = PIXI.Texture.fromImage("useravatar.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // move the sprite t the center of the screen
        bunny.position.x = 200;
        bunny.position.y = 150;
        bunny.mass = 10;

        stage.addChild(bunny);

        var t1 = new TimelineMax({onUpdate:animate, onUpdateScope:stage});
        t1.to(bunny.position, 2, {x:400}); 

        function animate() {

            requestAnimFrame(animate);

            // render the stage   
            renderer.render(stage);
        }
    }

    return {
    	init: init
    }
})
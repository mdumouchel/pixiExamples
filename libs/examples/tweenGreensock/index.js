define(["PIXI", "greenSock"], function(PIXI, greensock) {
	function init(){
	// create an new instance of a pixi stage
        var interactive = true;
        var stage = new PIXI.Stage(0x66FF99, interactive);

        // create a renderer instance.
        var renderer = PIXI.autoDetectRenderer(400, 300);

        // add the renderer view element to the DOM
        document.body.appendChild(renderer.view);

        requestAnimFrame(animate);

        // create a texture from an image path
        var texture = PIXI.Texture.fromImage("useravatar.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);
        
        //Building a button
        var button = new PIXI.Sprite(texture);
        console.log(button.interactive);
        button.interactive = true
        button.x = 24;
        button.y = 24;
        button.anchor.x = 0.5;
        button.anchor.y = 0.5;
        button.toggle = 1;
        button.click = function() {
            //Little bit of toggling and tweening..
            var t1 = new TimelineMax({onUpdate:animate, onUpdateScope:stage});
            t1.to(bunny, 2, {alpha:button.toggle * -1});
            var t2 = new TimelineMax({onUpdate:animate, onUpdateScope:stage});
            t2.to(button, 2, {rotation: 1.57 + (1.57 * button.toggle)})
            button.toggle *= -1;
        }

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // move the sprite t the center of the screen
        bunny.position.x = 200;
        bunny.position.y = 150;
        bunny.mass = 10;

        stage.addChild(bunny);
        stage.addChild(button);

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
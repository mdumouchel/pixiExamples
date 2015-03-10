define(["PIXI"], function(PIXI) {
	
    function Bunny(x, y){
        var self = {};
        // create a texture from an image path
        var texture = PIXI.Texture.fromImage("useravatar.png");
        // create a new Sprite using the texture
        self.bunny = new PIXI.Sprite(texture);
        //this = bunny;
        // center the sprites anchor point
        self.bunny.anchor.x = 0.5;
        self.bunny.anchor.y = 0.5;

        // move the sprite t the center of the screen
        self.bunny.position.x = 200;
        self.bunny.position.y = 150;
        self.bunny.mass = 10;
        
        self.bunny.spin = function(){
            this.rotation += 0.1;
            this.x += (Math.random() * -3) + Math.random() * 3;
        };

        return self.bunny;
    }

    return Bunny;
})
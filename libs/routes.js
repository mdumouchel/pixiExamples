define(function () {
    var app = $.sammy("body", function () {
    	var self = this;

    	self.get("/", function ()
        {
            require(["libs/examples/spriteRender/index"], initModule);
        });

        function initModule(module) {
            module.init($("#contentArea"));
        }

        self.get("spriteRender", function ()
        {
            require(["libs/examples/spriteRender/index"], initModule);
        });

        self.get("/factory", function ()
        {
            require(["libs/examples/factory/index"], initModule);
        });
    });
    app.run();
});
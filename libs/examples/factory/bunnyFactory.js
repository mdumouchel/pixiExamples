define(["factory/bunny"], function(bunny) {
	function createBunny() {
        return new bunny();
    }

    return {
    	createBunny: createBunny
    }
})
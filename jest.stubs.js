// require('regenerator-runtime/runtime');

window.requestAnimationFrame = function(callback) {
    setTimeout(callback);
};

window.sessionStorage = {
    getItem: function() {},
    setItem: function() {}
};

window.localStorage = {
    getItem: function() {},
    setItem: function() {}
};

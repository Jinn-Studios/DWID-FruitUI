var fruitService = (function($) {
    
    var setObj = function(key, obj) { sessionStorage.setItem(key, JSON.stringify(obj)); };
    var getObj = function(key) { return JSON.parse(sessionStorage.getItem(key)); };
    
    var callFruitAPI = function() {
        setObj('fruits', 
        [
            { key: 'Banana', value: '9' },
            { key: 'Apple', value: '20' },
            { key: 'Kiwi', value: '10' }
        ]);
    };
    
    var init = function() {
        
    };
    
    return { 
        initialize: init,
        setObj: setObj,
        getObj: getObj,
        callFruitAPI: callFruitAPI
    };
    
})(jQuery);
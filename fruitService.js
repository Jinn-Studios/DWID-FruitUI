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
    
    var sortData = function() {
        console.log('FillMe');
    };
    
    var formatTR = function(trHTML, obj) {
        return trHTML.replace('{key}', obj.key).replace('{value}', obj.value); 
    };
    
    var getFruits = function() { return getObj('fruits'); };
    
    var init = function() {
        
    };
    
    return { 
        initialize: init,
        setObj: setObj,
        getObj: getObj,
        callFruitAPI: callFruitAPI,
        getFruits: getFruits,
        formatTR: formatTR,
        sortData: sortData
    };
    
})(jQuery);
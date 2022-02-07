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
    
    var sortData = function(getField) {
        var rawData = getFruits();
        var sorted = getObj('sorted');
        sorted = (sorted === 1) ? -1 : sorted + 1;
        setObj('sorted', sorted);
        
        if (sorted === 0) return rawData;
        
        var sortedData = [];
        $.each(rawData, function(i, x) { sortedData.push(x); });
        
        sortedData.sort(function(a, b){
            var sortVal = 1;
            if (getField(a) < getField(b)) sortVal = -1;
            return sortVal * sorted;
        });
        
        return sortedData;
    };
    
    var formatTR = function(trHTML, obj) {
        return trHTML.replace('{key}', obj.key).replace('{value}', obj.value); 
    };
    
    var getFruits = function() { return getObj('fruits'); };
    
    setObj('sorted', 0);
    
    return {
        setObj: setObj,
        getObj: getObj,
        callFruitAPI: callFruitAPI,
        getFruits: getFruits,
        formatTR: formatTR,
        sortData: sortData
    };
    
})(jQuery);
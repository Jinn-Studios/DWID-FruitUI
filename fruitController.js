var fruitController = (function(svc, $) {
    
    var fillTable = function() {
        $('#fruits').find('tr:has(td)').remove();
    }
    
    var init = function() {
        svc.callFruitAPI();
        svc.setObj('trHTML', $('#fruits').find('td:first').parent().prop('outerHTML'));
        fillTable();
    };
    
    return { initialize: init };
    
})(fruitService || {}, jQuery);
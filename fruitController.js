var fruitController = (function(svc, $) {
    
    var fillTable = function() {
        $('#fruits').find('tr:has(td)').remove();
        var trHTML = svc.getObj('trHTML');
        $.each(svc.getFruits(), function(_, x) { $('#fruits').append(svc.formatTR(trHTML, x)); });
    }
    
    var init = function() {
        svc.callFruitAPI();
        $('#sortByName').click(function () { fillTable(svc.sortData()); });
        $('#sortByValue').click(function () { fillTable(svc.sortData()); });
        svc.setObj('trHTML', $('#fruits').find('td:first').parent().prop('outerHTML'));
        fillTable();
    };
    
    return { initialize: init };
    
})(fruitService || {}, jQuery);
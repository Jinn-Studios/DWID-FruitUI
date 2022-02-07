var fruitController = (function(svc, $) {
    
    var fillTable = function(withWhat) {
        $('#fruits').find('tr:has(td)').remove();
        var trHTML = svc.getObj('trHTML');
        $.each(withWhat, function(_, x) { $('#fruits').append(svc.formatTR(trHTML, x)); });
    }
    
    var init = function() {
        svc.callFruitAPI();
        $('#sortByName').click(function () { fillTable(svc.sortData(x => x.key)); });
        $('#sortByValue').click(function () { fillTable(svc.sortData(x => parseInt(x.value))); });
        svc.setObj('trHTML', $('#fruits').find('td:first').parent().prop('outerHTML'));
        fillTable(svc.getFruits());
    };
    
    return { initialize: init };
    
})(fruitService || {}, jQuery);
(function ($) {
    $.fn.swap = function(anotherElement) {
        var a = $(this).get(0);
        var b = $(anotherElement).get(0);
        var swap = document.createElement('span');
        a.parentNode.insertBefore(swap, a);
        b.parentNode.insertBefore(a, b);
        swap.parentNode.insertBefore(b, swap);
        swap.remove();
    }
}(jQuery));
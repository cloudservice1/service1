(function ($) {
    $(function () {
        var lis = $('#header .nav:first li'), _lastest;
        lis.each(function () {
            var children = $(this).children('ul');
            if (children.length) {
                $(this).bind('mouseenter',function () {
                    _lastest && _lastest.stop(true, true);
                    _lastest = children.show(200);
                }).bind('mouseleave', function () {
                        _lastest && _lastest.stop(true, true);
                        _lastest = children.hide(200);
                    });
                children.hide();
            }
        });
    });
})(jQuery);
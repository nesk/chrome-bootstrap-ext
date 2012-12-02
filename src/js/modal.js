$('button[data-modal]').click(function(ev) {
    ev.preventDefault();
    var modal = $('#' + ev.target.dataset.modalTarget).clone();
    $(modal).removeAttr('style');
    $(modal).find('button').click(function() {
        $(modal).addClass('transparent');
        setTimeout(function() {
            $(modal).remove();
        }, 1000);
    });

    $(modal).click(function() {
        $(modal).find('.page').addClass('pulse');
        $(modal).find('.page').on('webkitAnimationEnd', function() {
            $(this).removeClass('pulse');
        });
    });
    $('body').append(modal);
});
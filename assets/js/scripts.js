function bar_progress(progress_line_object, direction) {
    var new_value = 0;

    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
    $('.f1 fieldset:first').fadeIn('slow');
    $('.f1 .btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');


        parent_fieldset.find('input[type="text"], input[type="password"], input[type="tel"], input[type="email"], textarea').each(function() {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });


        if (next_step) {
            parent_fieldset.fadeOut(500, function() {

                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                $(this).next().fadeIn();

            });
        }

    });

});
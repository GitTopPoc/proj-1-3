$(document).ready(function() {

    let btn = $('.q-btn');

    btn.click(function() {
        if (!$(this).hasClass('active')) {
            btn.parent().parent().find('.question-descr').hide()
            $(this).parent().parent().find('.question-descr').toggle('slow')
            btn.removeClass('active')
            $(this).addClass('active')
        }
    })
});
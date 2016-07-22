import '../style/style.scss';
import $ from 'jquery';
import  'jquery-inview';


if($('.scroll-row').length) {
    $('.scroll-row .fade-container').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        console.log(arguments)
        if(isInView) {
            $(this).addClass('fade-in').unbind('inview');
        }
    })
}
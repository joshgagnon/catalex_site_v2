import '../style/style.scss';
import $ from 'jquery';
import  'jquery-inview';
import 'bootstrap/js/transition';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/collapse';

console.log(jQuery.fn.collapse())


if($('.scroll-row').length) {
    $('.scroll-row .fade-container').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

        if(isInView) {
            $(this).addClass('fade-in').unbind('inview');
        }
    })
}
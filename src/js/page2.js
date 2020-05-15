import {
    askName
} from './utils/toast';
import Swiper from 'swiper';
import $ from 'jquery';

askName();


$(document).ready(function () {
    var mySwiper = new Swiper('.page2-swiper-images', {
        /* ... */
    });
})
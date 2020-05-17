import $ from 'jquery';


$("input").on('input', e => console.log("value: ", e.target.value))
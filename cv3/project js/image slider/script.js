$(document).ready(function() {
    $('.btn1').click(function() {
        $('.img1').css('marginLeft', '0');
    })
    $('.btn2').click(function() {
        $('.img1').css('marginLeft', '-25%');
    })
    $('.btn3').click(function() {
        $('.img1').css('marginLeft', '-50%');
    })
    $('.btn4').click(function() {
        $('.img1').css('marginLeft', '-75%');
    })
    $('a').click(function(){
        $(this).addClass('active').siblings()
                .removeClass('active');
    })
})
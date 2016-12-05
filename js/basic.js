require('./main.js');
$('.base-info').on('click','li',function () {
   $(this).find('i').addClass('active');
});
$('.check').on('click',function () {
   $('.mask').css({'display':'block'});
});

$('.mask').on('click','.close',function(){

    $('.mask').css({'display':'none'});
});

$('.mask').on('click','.test_btn',function(){

    location.href='fell.html';
});
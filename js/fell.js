require('./main.js');
$('.small-box').on('click','span',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.btn').on('click',function () {

    location.href="physical.html";
});
require('./main.js');
$('.allery-choose').on('click','span',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).index()==0){
        $('.dislike').hide();
    }else{
        $('.dislike').show();
    }
});

$('.dislike').on('click','li',function(){
    $(this).addClass('active');
});

$('.askip').on('click',function(){
    location.href='basicInfo.html';
});
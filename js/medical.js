require('./main.js');
$('.choose').on('click','span',function () {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).index()==0){
        $('.tab-box').hide();
    }else{
        $('.tab-box').show();
    }
});

$('.tab-box').on('click','li',function(){
   $(this).addClass('active');
});

$('.medical-skip').on('click',function(){
    location.href='allergy.html'
})
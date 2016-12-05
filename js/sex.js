require('./main.js');
var $=require('jquery');

//点击男女
$('.sex-select').on('click','dl',function(){
   $(this).find('.chooseBtn').addClass('active').end().siblings().find('.chooseBtn').removeClass('active');
});

//点击开始按钮
$('.sex-skip').on('click',function(){
   //获取自定义属性
   var gender=$('.btn .active').attr('gender');
   var parame=encodeURI('gender='+gender);
   location.href='../html/medical.html?'+parame;
});

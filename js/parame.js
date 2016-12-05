
function getParame() {
    var parame=decodeURI(location.search.substr(1));
    var arr=parame.split('&'),
        obj={};
    $.each(arr,function (i,ele) {
        var newArr=arr.split('=');
        obj[newArr[0]]=newArr[1];
    });
    return obj;

}
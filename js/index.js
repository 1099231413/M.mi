function FontSize(){
    // //获取html
    // var html = document.getElementsByTagName("html")[0];
    // //获取屏幕的宽度
    // var w = document.documentElement.clientWidth || document.body.clientWidth;
    // html.style.fontSize = w / 14.4 + "px";
    var w = $("html").width();
    $("html").css("font-size", w / 14.4+"px");
}
window.onload=function(){
    FontSize();
}
window.onresize=function(){
    FontSize();
}

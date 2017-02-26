require('./base.css');
require('./css2.css')
function run(){
    var html = document.querySelector('html');
    var oWidth = html.getBoundingClientRect().width;
    var oHeight = html.getBoundingClientRect().height;
    var bg = document.querySelector('#bg');
    var pop = 750 / 1206;
    var a = oWidth / oHeight;
    var b,c;
    //var f = 47.7;

    if (a < pop) {
        b = (oWidth / pop);
        c  = oWidth;
    } else {
        c = (oHeight * pop);
        b = oHeight;
    }
    bg.style.width = c+'px';
    bg.style.height = b+'px';
    bg.style.margin = ''+(-b/2)+'px 0 0 '+(-c/2)+'px';
    var d = oWidth / pop;
    var e = oHeight*pop;
    console.log(d+"=="+e);
}
run();
window.addEventListener('resize',function(){
    run();

});

/*
 *
 *
 *
 * */



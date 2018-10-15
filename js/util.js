!function () {
    var doc = document,
        win = window,
        oBody = doc.documentElement || doc.body,
        resize = "onorientationchange" in win ? "orientationchange" : "resize";
    rem();
    addEventListener("resize", rem, false);
    function rem() {
        oBody.style.fontSize = 100 * (doc.body.clientWidth / 750) + "px";
    }
}();

// 小贴士
(function () {
    var link1 = 'http://mp.weixin.qq.com/s?__biz=MzAwNTA0MTgwOA==&mid=311409790&idx=1&sn=cc9b6583c2d67339b96154671abcc1ae&chksm=0c59a7813b2e2e9705038ca05b9e6638afd4a909448a21ad5f4a013396df6c82ae6727958ec3#rd';
    var link2 = 'http://mp.weixin.qq.com/s?__biz=MzAwNTA0MTgwOA==&mid=311409809&idx=1&sn=af6b84fb1593ee5d41184042141488dc&chksm=0c59a76e3b2e2e78c33510226ff7ca16329929000ad3933b3d38f0853223b4e267dd3083ee50#rd';
    var link3 = 'http://mp.weixin.qq.com/s?__biz=MzAwNTA0MTgwOA==&mid=311409810&idx=1&sn=32af04bb28ced12b5d0bdc1c0356df92&chksm=0c59a76d3b2e2e7bbcd8383c95e7021b2173deee0b935b7343679a483d871b6ad79a1ec59ecf#rd';
    var runList = document.getElementsByClassName("running");
    runList[0].addEventListener("touchstart",function () {
        window.location.href = link1;
    });
    runList[1].addEventListener("touchstart",function () {
        window.location.href = link2;
    });
    runList[2].addEventListener("touchstart",function () {
        window.location.href = link3;
    })
})();

// Android和iOS下载地址
var iosDownload = "https://itunes.apple.com/cn/app/%E5%88%86%E5%8A%A8%E5%9C%88/id1397390199?l=zh&ls=1&mt=8",
    androidDownload = "http://sj.qq.com/myapp/detail.htm?apkName=com.kct.fundoHealth.btnotification";

window.addEventListener('offline', function(){
    alert("网络断开了~");
});

// 截取链接中某个参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
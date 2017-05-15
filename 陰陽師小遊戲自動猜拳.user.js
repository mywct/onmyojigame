// ==UserScript==
// @name              陰陽師小遊戲自動猜拳
// @namespace         https://www.facebook.com/mywct
// @description       可以自動幫忙進行陰陽師小遊戲的猜拳

// @homepageURL       https://www.facebook.com/mywct
// @supportURL        https://www.facebook.com/mywct
// @updateURL         請與風星聯繫

// @author            風星
// @version           1.0.0.0
// @license           LGPLv3

// @compatible        chrome Chrome_46.0.2490.86 + TamperMonkey + 脚本_1.2.4 测试通过

// @match             *://*/*
// @grant             none
// @run-at            document-start
// ==/UserScript==


// 初始化

var OnmyojigameUrl = 'https://www.onmyojigame.com/';
var later = 500;

(function() {
    if(window.location.href.substring(0, OnmyojigameUrl.length) != OnmyojigameUrl)
        return;
    var _pageCtrl = null;
    var _popCtrl = null;
    var runFlag = false;
    setTimeout(function() {
        _pageCtrl = pageCtrl;
        _popCtrl = popCtrl;
        var _pageCtrlLoadOk = pageCtrl.loadOk;
        pageCtrl.loadOk = function() {
            _pageCtrlLoadOk.call(_pageCtrl);
            (function() {
                if(_pageCtrl.isPc) {
                    soundCtrl.pause('bg');
                }
                var fnTimeout = function() {
                    //document.getElementById('moveTips').style.display='none';
                    //除 鬼火燒烤 是用函數跳至外，其餘都是用程式來跑！
                    popCtrl.step(2,1);//鬼火燒烤
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext();//山兔口水蛙
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext();//葫蘆酒吧
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext(); //芝麻湯圓舖
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext(); //大力棉花糖
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext(); //犬神便當店
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext(); //難忘靚湯館
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                    popCtrl.goNext(); //雪女冰室
                    popCtrl.step(popCtrl.nowScene,3);
                    popCtrl.step(popCtrl.nowScene,4);
                    popCtrl.tiaozhan();
                };
                if(!runFlag) {
                    setTimeout(fnTimeout, 1000);
                    runFlag = true;
                }
            }).call(_pageCtrl);
        };
    }, later);
})();
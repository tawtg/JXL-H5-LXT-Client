window.addEventListener('load', function () {
    Grade(document.querySelectorAll('.lb-bgc'));

})
//轮播图切换联动效果
// 1、获取所有标题和图片
function lunbotu() {
    let currentIndex = 0;
    let titles = document.querySelectorAll(".like-lb>.titles>li");
    let images = document.querySelectorAll(".like-lb>.images>li");
    titles.forEach((title, index) => {
        title.onmouseover = function () {
            titles[currentIndex].className = "";
            images[currentIndex].className = "";
            title.className = "current";
            images[index].className = "current";
            currentIndex = index;
        }
    });
}

function login_register() {
    let currentIndex1 = 0;
    let tabs = document.querySelectorAll(".lr-pane .tabs li");
    let panes = document.querySelectorAll(".lr-pane .panes li");
    for (let i = 0, len = tabs.length; i < len; i++) {
        let tab = tabs[i];
        tab.onclick = function () {
            tabs[currentIndex1].className = "";
            tab.className = "current";
            panes[currentIndex1].className = "";
            panes[i].className = "current";
            currentIndex1 = i;

        }
    };
}
lunbotu();
login_register();

// 点击关闭后关闭面板
function HideMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask";
}
function ShowMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask show";
}

// < !--评论面板评分功能-->
let currentIndex = 0;
// 获取所有选项卡和面板元素
let tabs = document.querySelectorAll(".tabs>li");
let panes = document.querySelectorAll(".panes>li");
// 对每个选项卡监听鼠标单击事件
for (let i = 0, len = tabs.length; i < len; i++) {
    let tab = tabs[i];
    tab.onclick = function () {
        //根据选中状态切换面板显示
        tabs[currentIndex].className = "";
        tabs[i].className = "current";
        panes[currentIndex].className = "";
        panes[i].className = "current";

        currentIndex = i;
    }
}
// 点击评论后，获取评价信息。
let submit = document.getElementsByClassName("submit")[0];
let content = document.getElementsByClassName("comment-content")[0];
submit.onclick = function () {
    console.log("分数：", score);
    let content_v = content.value;
    console.log("评论内容：", content_v);
}
let score = 5;
// 星星评分效果
let star = document.querySelector(".comment-pane .star");
let y_star = document.querySelector(".comment-pane .y_star");
star.onclick = function (event) {
    // 获取鼠标点击位置
    // console.log(event.offsetX);
    score = Math.ceil(event.offsetX / star.offsetWidth * 5);
    y_star.style.width = 100 * score / 5 + "%";
}
var maindetail = document.getElementById('shell-main-c');
var circlenum = document.getElementById('circlenum');
// window.onload = function () {
let order = JSON.parse(localStorage.getItem('order')) || [];

order.forEach(item => {
    if (item.quantity > 0) {
        circlenum.innerHTML = JSON.parse(localStorage.getItem('ordernum')) || [];
        // console.log(item.name)
        maindetail.innerHTML += `<div class="shell-main-detail">
                    <div class="shopname">亚洲之窗店</div>
                    <div class="detail">
                        <div class="teaimage"><img src="${item.src}" alt=""></div>
                        <div class="teaname">${item.name}</div>
                        <div class="teaprice">￥${item.price}</div>
                    </div>
                    <div class="teaop">大杯/少冰/三分糖</div>
                    <div class="teasum">x${item.quantity}</div>
                </div>
                <div class="space"></div>
                `
    }
});
// };

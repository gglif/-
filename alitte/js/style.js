// 获取要操作的元素
let login_title = document.querySelector('.login-title');
let register_title = document.querySelector('.register-title');
let login_box = document.querySelector('.login-box');
let register_box = document.querySelector('.register-box');

// 绑定标题点击事件
login_title.addEventListener('click', () => {
    // 判断是否收起，收起才可以点击
    if (login_box.classList.contains('slide-up')) {
        register_box.classList.add('slide-up');
        login_box.classList.remove('slide-up');
    }
})
register_title.addEventListener('click', () => {
    if (register_box.classList.contains('slide-up')) {
        login_box.classList.add('slide-up');
        register_box.classList.remove('slide-up');
    }
})
//注册账户

var zC = document.getElementById('zhuCe');
var miMa = zC.querySelectorAll('input');

function zhuCe() {
    var zhenZe = /^[A-Za-z]\w{5,17}$/;
    var shuRu1 = miMa[1].value;
    var flag = shuRu1.match(zhenZe);
    if (flag != null && miMa[1].value == miMa[2].value == true) {
        var zhangHu = {
            name: miMa[0].value,
            mima: miMa[1].value
        }
        var into = JSON.stringify(zhangHu);
        localStorage.setItem('账户', into);
        alert('注册成功');
    }
}

function dengLu() {
    var Go = document.getElementById('To');
    var zH = document.getElementById('dengLu');
    var DL = zH.querySelectorAll('input');
    var str = localStorage.getItem('账户');
    var obj = JSON.parse(str);
    var JY = document.getElementById('yanZhenMa');

    if (DL[0].value == obj.name && DL[1].value == obj.mima) {
        if (JY.placeholder == JY.value && JY.value != '验证码') {
            Go.href = './index.html';
            // window.location.href = './index.html';
        } else {
            alert('验证码输入错误');
        }
    } else if (DL[0].value != obj.name || DL[1].value != obj.mima) {
        alert('用户名或密码错误,请重新输入。');
    } else {
        alert('登陆失败,请重新尝试。');
    }
}

function yzm() {
    var str = '';
    var NR = document.getElementById('yanZhenMa');
    var sz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < 4; i++) {
        str += sz[Math.round(Math.random() * 35)];
    };
    NR.placeholder = str;
}

var quan = document.getElementById('zhuCe');
var miMaSZ = quan.querySelectorAll('input');
var tup = quan.querySelectorAll('img');

miMaSZ[1].onblur = function () {
    var zhenZe = /^[A-Za-z]\w{5,17}$/;
    var shuRu1 = miMaSZ[1].value;
    var flag = shuRu1.match(zhenZe);
    if (flag == null) {
        tup[0].style.display = 'inline-block';
        tup[0].src = './image/x.png';
    } else {
        tup[0].style.display = 'inline-block';
        tup[0].src = './image/t.png';
    }
}
miMaSZ[2].onblur = function () {
    console.log(miMa[2].value);
    if (miMa[1].value == miMaSZ[2].value && miMa[2].value != '') {
        tup[1].style.display = 'inline-block';
        tup[1].src = './image/t.png';
    } else {
        tup[1].style.display = 'inline-block';
        tup[1].src = './image/x.png';
    }
}
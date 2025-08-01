document.addEventListener('DOMContentLoaded', function () {
  showAd();
});

function showAd() {
  const adModal = document.getElementById('ad-modal');
  adModal.style.display = 'block';

  setTimeout(() => {
    closeAd();
  }, 2000); // 10秒后自动关闭
}

function closeAd() {
  const adModal = document.getElementById('ad-modal');
  adModal.style.display = 'none';
}


// 页面加载完成后显示广告
window.onload = showAd;

const data = [
  { productId: 0, src: "./image/波霸奶茶.png", name: '波霸奶茶', price: 10, quantity: 0 },
  { productId: 1, src: "./image/金桔柠檬.png", name: '金桔柠檬', price: 12, quantity: 0 },
  { productId: 2, src: "./image/杨枝甘露.png", name: '杨枝甘露', price: 15, quantity: 0 },
  { productId: 3, src: "./image/葡萄柚绿.png", name: '葡萄柚绿', price: 11, quantity: 0 },
  { productId: 4, src: "./image/柠檬柚子茶.png", name: '柠檬柚子茶', price: 11, quantity: 0 },
  { productId: 5, src: "./image/柠檬多多.png", name: '柠檬多多', price: 14, quantity: 0 },
  { productId: 6, src: "./image/蜜柚红茶.png", name: '蜜柚红茶', price: 15, quantity: 0 },
  { productId: 7, src: "./image/柠檬养乐多.png", name: '柠檬养乐多', price: 13, quantity: 0 }
]
localStorage.setItem('data', JSON.stringify(data))


function goTo() {
  window.location.href = "../detailPage/boba.html?data=" + 0;
}
function goTo1() {
  window.location.href = "../detailPage/jinju.html?data=" + 1;
}
function goTo2() {
  window.location.href = "../detailPage/yzgl.html?data=" + 2;
}
function goTo3() {
  window.location.href = "../detailPage/putaoyoulv.html?data=" + 3;
}
function goTo4() {
  window.location.href = "../detailPage/ninmengyouzi.html?data=" + 4;
}
function goTo5() {
  window.location.href = "../detailPage/ninmeng.html?data=" + 5;
}



let names = document.getElementById("called")
const id = JSON.parse(localStorage.getItem('账户')) || null;
if (id != null) names.innerHTML = `<a href="./login.html">${id.name}</a>`;


function initializeCart() {
    if (!localStorage.getItem('cart')) {
        init()
    }
}

initializeCart();

function init() {
    const data = [
        { productId: 0, src: "./image/波霸奶茶s.png", name: '波霸奶茶', price: 10, quantity: 0 },
        { productId: 1, src: "./image/金桔柠檬s.png", name: '金桔柠檬', price: 12, quantity: 0 },
        { productId: 2, src: "./image/杨枝甘露s.png", name: '杨枝甘露', price: 15, quantity: 0 },
        { productId: 3, src: "./image/葡萄柚绿s.png", name: '葡萄柚绿', price: 11, quantity: 0 },
        { productId: 4, src: "./image/柠檬柚子茶s.png", name: '柠檬柚子茶', price: 11, quantity: 0 },
        { productId: 5, src: "./image/柠檬多多s.png", name: '柠檬多多', price: 14, quantity: 0 },
        { productId: 6, src: "./image/蜜柚红茶s.png", name: '蜜柚红茶', price: 15, quantity: 0 },
        { productId: 7, src: "./image/芒果养乐多m.png", name: '柠檬养乐多', price: 13, quantity: 0 }
    ]
    localStorage.setItem('cart', JSON.stringify(data))
}

const products = [
    { productId: 0, src: "./image/波霸奶茶s.png", name: '波霸奶茶', price: 10, quantity: 0 },
    { productId: 1, src: "./image/金桔柠檬s.png", name: '金桔柠檬', price: 12, quantity: 0 },
    { productId: 2, src: "./image/杨枝甘露s.png", name: '杨枝甘露', price: 15, quantity: 0 },
    { productId: 3, src: "./image/葡萄柚绿s.png", name: '葡萄柚绿', price: 11, quantity: 0 },
    { productId: 4, src: "./image/柠檬柚子茶s.png", name: '柠檬柚子茶', price: 11, quantity: 0 },
    { productId: 5, src: "./image/柠檬多多s.png", name: '柠檬多多', price: 14, quantity: 0 },
    { productId: 6, src: "./image/蜜柚红茶s.png", name: '蜜柚红茶', price: 15, quantity: 0 },
    { productId: 7, src: "./image/芒果养乐多m.png", name: '柠檬养乐多', price: 13, quantity: 0 }
];

// 解析URL以获取data参数的值，并将其作为产品ID返回
function getProductIdFromUrl() {
    var queryString = window.location.search.substring(1); // 去除开头的"?"
    var params = new URLSearchParams(queryString);
    var data = params.get('data'); // 获取data参数
    return parseInt(data, 10); // 将data参数的值转换为整数并返回
}
// 初始化购物车
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// 更新数量输入字段的值
function changeQuantity(delta) {
    var quantityInput = document.getElementById('quantity');
    var quantity = parseInt(quantityInput.value, 10);
    quantity = Math.max(1, quantity + delta); // 确保数量不会小于1
    quantityInput.value = quantity; // 更新输入字段的值
}

// 将产品添加到购物车
function addToCart() {
    var productId = getProductIdFromUrl();
    if (!isNaN(productId) && productId >= 0 && productId < products.length) {
        var product = products[productId];
        var quantityInput = document.getElementById('quantity');
        var quantity = parseInt(quantityInput.value, 10); // 从输入字段中读取数量
        if (isNaN(quantity) || quantity < 1) {
            alert('请确保数量是有效的！');
            return;
        }
        addProductToCart(product, quantity);
    } else {
        alert('无效的产品ID！');
    }
}
// 将产品添加到购物车
function addProductToCart(product, quantity) {
    var existingProductIndex = cart.findIndex(item => item.productId === product.productId);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        // 复制产品对象并设置数量
        cart.push({ ...product, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// 更新购物车中的产品总数
function updateCartCount() {
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}
// 页面加载时更新购物车数量显示
window.onload = function () {
    updateCartCount();
    // ...（根据需求决定是否保留或注释掉自动添加产品的代码）
};
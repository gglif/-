let names = document.getElementById("called")
const id = JSON.parse(localStorage.getItem('账户')) || null;
if (id != null) names.innerHTML = `<a href="./login.html">${id.name}</a>`;
const qa = document.getElementById('qa');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 切换全选状态时调用此函数
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    itemCheckboxes.forEach((checkbox, index) => {
        const isChecked = selectAllCheckbox.checked;
        cart[index].isSelected = isChecked;
        checkbox.checked = isChecked;
    });
    calculateSelectedTotal();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function renderCartItems() {
    qa.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        if (item.quantity > 0) {
            const isSelected = item.isSelected || false;
            totalPrice += isSelected ? item.price * item.quantity : 0;
            qa.innerHTML += `
                        <div class="cart-item" id="item-${index}">
                            <ul>
                                <li>
                                    <input type="checkbox" class="item-checkbox" data-index="${index}" style="margin-top: 50px;" ${isSelected ? 'checked' : ''} onclick="toggleItemSelection(${index})"/>
                                </li>
                                <li><img src="${item.src}" alt="" />
                                    <p class='teaname'>${item.name}</p>
                                </li>
                                <li>
                                    <p>¥${item.price}</p>
                                </li>
                                <li>
                                    <div class='sb'>
                                        <button type="button" onclick="updateQuantity(${index}, -1)">-</button>
                                        <input type="number" size="2" value="${item.quantity}" onchange="updateQuantity(${index}, 0)" style="text-align: center;">
                                        <button type="button" onclick="updateQuantity(${index}, 1)">+</button>
                                    </div>
                                </li>
                                <li><button type="button" onclick="deleteItem(${index})">删除</button></li>
                            </ul>
                        </div>
                    `;
        }
    });

    document.getElementById('sum').textContent = `￥${totalPrice.toFixed(2)}`;
    updateCartCount();
}

function updateQuantity(index, delta) {
    if (delta !== 0) {
        cart[index].quantity = Math.max(1, cart[index].quantity + delta);
    } else {
        const input = event.target;
        cart[index].quantity = Math.max(1, Math.min(99, parseInt(input.value) || 1));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

function deleteItem(index) {
    cart[index].quantity = 0; // 清空数量
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

window.onload = function () {
    // 初始化每个商品的选择状态
    cart = cart.map(item => ({ ...item, isSelected: true }));
    updateCartCount();
    renderCartItems();
};
function toggleItemSelection(index) {
    const checkbox = event.target;
    cart[index].isSelected = checkbox.checked;
    calculateSelectedTotal();
}
function calculateSelectedTotal() {
    let totalPrice = 0;
    cart.forEach(item => {
        if (item.isSelected && item.quantity > 0) {
            totalPrice += item.price * item.quantity;
        }
    });
    document.getElementById('sum').textContent = `￥${totalPrice.toFixed(2)}`;
    updateCartCount();
}
function generateRandomCode(length) {
    let firstChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let lastThreeChars = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return firstChar + lastThreeChars;
}

function calculateTotal() {
    localStorage.setItem('order', JSON.stringify(cart))
    localStorage.setItem('ordernum', JSON.stringify(generateRandomCode(4)))
    cart = cart.map(item => ({
        ...item,
        quantity: item.isSelected ? 0 : item.quantity,
        isSelected: false
    }));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}
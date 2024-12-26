// جلب السلة من localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// عرض المنتجات في السلة
function showCartItems() {
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <div class="cart-item-details">
                <img src="${product.images[0]}" alt="${product.name}" class="cart-item-img">
                <p>${product.details}</p>
                <p>Price: ${product.price}</p>
            </div>
        `;
        cartContainer.appendChild(productDiv);

        total += parseInt(product.price.split(' ')[0]); // إضافة السعر إلى المجموع
    });

    totalPriceElement.textContent = total + " "; // تحديث المجموع
}

// دالة لإتمام عملية الدفع
function checkout() {
    alert('Proceeding to checkout...');
    // هنا يمكنك إضافة منطق الدفع أو تحويل المستخدم إلى صفحة أخرى
}

// استدعاء دالة عرض المنتجات في السلة
showCartItems();

// تحديد الصور في السلايدر
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// وظيفة لتغيير الصور
function changeImage() {
    slides[currentIndex].style.opacity = 0; // إخفاء الصورة الحالية
    currentIndex = (currentIndex + 1) % slides.length; // الانتقال إلى الصورة التالية
    slides[currentIndex].style.opacity = 1; // إظهار الصورة الجديدة
}

// تغيير الصورة كل 3 ثواني
setInterval(changeImage, 3000);
 
const productsData = {
    1: [
        {
            name: 'Future Rack',
            price: '11500 pound',
            images: ['futurerack1.jpg', 'futurerack2.jpg', 'futurerack3.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 150 kilos'
        },
        {
            name: 'Iron Rack',
            price: '2500 pound',
            images: ['ironrack1.jpg', 'ironrack2.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 350 kilos'
        },
        {
            name: 'Iron Bed',
            price: '3000 pound',
            images: ['bediron1.jpg', 'bediron2.jpg', 'bediron3.jpg','bediron4.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 560 kilos'
        },
        {
            name: 'Desk Mirror',
            price: '4000 pound',
            images: ['deskmirror1.jpg', 'deskmirror2.jpg', 'deskmirror3.jpg','deskmirror4.jpg'],
            details: 'Strong <br>Natural and Elegant'
        },
        {
            name: 'Banan Sofa',
            price: '1500 pound',
            images: ['banansofa1.jpg', 'banansofa2.jpg','banansofa3.jpg','banansofa4.jpg','banansofa5.jpg'],
            details: 'Strong <br>Natural and Elegant'
        },
        {
            name: 'Metal Desk',
            price: '5000 pound',
            images: ['metaldesk1.jpg', 'metaldesk2.jpg', 'metaldesk3.jpg','metaldesk4.jpg','metaldesk5.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 350 kilos'
        },
        {
            name: 'Keke Sofa',
            price: '4500 pound',
            images: ['kekesofa1.jpg', 'kekesofa2.jpg'],
            details: 'Strong <br>Natural and Elegant'
        },
        {
            name: 'Food Table',
            price: '2500 pound',
            images: ['tablefood1.jpg', 'tablefood2.jpg','tablefood3.jpg','tablefood4.jpg','tablefood5.jpg','tablefood6.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 500 kilos'
        },
        {
            name: 'Old Comodino',
            price: '800 pound',
            images: ['oldComodino1.jpg', 'oldComodino2.jpg','oldComodino3.jpg','oldComodino4.jpg'],
            details: 'Natural and Elegant'
        },
        {
            name: 'Relax Chair',
            price: '1200 pound',
            images: ['relaxchair1.jpg', 'relaxchair2.jpg','relaxchair3.jpg'],
            details: 'Strong <br>Natural and Elegant'
        },
        {
            name: 'Tree Bed',
            price: '1500 pound',
            images: ['treebed1.jpg', 'treebed2.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 150 kilos'
        },
        {
            name: 'Flat Table',
            price: '3500 pound',
            images: ['flattable1.jpg', 'flattable2.jpg','flattable3.jpg'],
            details: 'Strong <br>Natural and Elegant<br>Bear  to 120 kilos'
        }
    ]
};

function displayProducts() {
    const container = document.getElementById('products-container');
    const products = productsData[1]; // الفئة رقم 1 من المنتجات

    // تفريغ المحتوى الحالي داخل الـ container
    container.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const imageGallery = `
            <div class="product-gallery">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image" id="product-image-${index}">
            </div>
            <button class="prev" onclick="changeImage(${index}, 'prev')"></button>
            <button class="next" onclick="changeImage(${index}, 'next')">Next</button>
        `;

        // إضافة المحتوى الخاص بالمنتج
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p class="details">${product.details}</p>
            <p class="price">${product.price}</p>
            ${imageGallery}
            
             
        `;

        // إضافة العنصر الجديد إلى الحاوية
        container.appendChild(productDiv);
    });
}

function changeImage(productIndex, direction) {
    const product = productsData[1][productIndex];
    const imageElement = document.getElementById(`product-image-${productIndex}`);
    
    // تحديد الصورة الحالية
    let currentImageIndex = product.images.indexOf(imageElement.src.split('/').pop());
    
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % product.images.length;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
    }

    // تغيير الصورة المعروضة
    imageElement.src = product.images[currentImageIndex];
}

function addToCart(productIndex) {
    const product = productsData[1][productIndex];
    console.log(`${product.name} تم إضافته إلى السلة!`);
}

// استدعاء الدالة لعرض المنتجات عند تحميل الصفحة
window.onload = displayProducts;





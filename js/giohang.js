function themvaogiohang() {
    // Lấy thông tin sản phẩm được chọn
    const imgSrc = document.querySelector('.h1').src;
    const productName = document.querySelector('#productname').textContent;
    const price = document.querySelector('#tt1').textContent;
    const size = document.querySelector('select[name="size1"]').value;
    const color = document.querySelector('select[name="color"]').value;
    const stock = document.querySelector('#sl1').value;

    const quantity =stock * price;
    
    // Lưu thông tin sản phẩm vào đối tượng giỏ hàng
    const cartItem = { imgSrc, productName, size, color, stock, price, quantity };
  
    // Lấy danh sách sản phẩm trong giỏ hàng từ localStorage hoặc tạo mới nếu chưa có
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Thêm sản phẩm vào danh sách
    cartItems.push(cartItem);
  
    // Lưu danh sách sản phẩm vào localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Chuyển hướng người dùng đến trang giỏ hàng
    window.location.href = "../html/giohang.html"
  }

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const cartList = document.getElementById('cart-list');

  cartList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');

    const itemHtml = `
      <div class="cart-item">
        <div class="cart-item-img">
          
        </div>
        <div class="cart-item-info">
        <table class="table table-bordered" style="width:80%;margin:auto;">
        <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Kích thước</th>
            <th>màu sắc</th>
            <th>Số lượng</th>
            <th>Tổng giá</th>
            <th></th>
        </tr>
        <tr>
        
            <th><img src="${item.imgSrc}" alt="" width="200"></th>
            <th>${item.productName}</th>
            <th>${item.size}</th>
            <th>${item.color}</th>
            <th>${item.stock}</th>
            <th>${item.quantity}</th>
            <th><button class="btn" onclick="removeCartItem(${index})">Xóa</button></th>
        </tr>
        </table>
          
        </div>
    `;

    listItem.innerHTML = itemHtml;

    cartList.appendChild(listItem);
  });
}
function removeCartItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
  }
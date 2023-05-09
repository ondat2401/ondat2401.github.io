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
  
    let isHeaderAdded = false; // Biến để kiểm tra xem đã thêm dòng đầu chưa
  
    cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
  
      const itemHtml = `
        <div class="cart-item" >
          <div class="cart-item-info">
          <table class="table table-bordered" style="width:80%;margin:auto;">
          ${!isHeaderAdded ? 
            `<tr class="col-12">
              <th class="col-sm-2">Hình ảnh</th>
              <th class="col-sm-3">Tên sản phẩm</th>
              <th class="col-sm-1">Kích thước</th>
              <th class="col-sm-1">Màu sắc</th>
              <th class="col-sm-1">Số lượng</th>
              <th class="col-sm-2">Tổng giá</th>
              <th class="col-sm-1"></th>
            </tr>` : ''
          }
          <tr class="col-12">
              <th class="col-sm-2"><img src="${item.imgSrc}" alt="" width="200"></th>
              <th class="col-sm-3">${item.productName}</th>
              <th class="col-sm-1">${item.size}</th>
              <th class="col-sm-1">${item.color}</th>
              <th class="col-sm-1">${item.stock} cái</th>
              <th class="col-sm-2">${item.quantity}đ</th>
              <th class="col-sm-1"><button class="btn btn-block" id="rmv-btn" style="line-height:200px;background-color: black;color: #d36905;" onclick="removeCartItem(${index})">Xóa</button></th>
          </tr>
          </table>
          </div>
      `;
  
      listItem.innerHTML = itemHtml;
  
      cartList.appendChild(listItem);
  
      if (!isHeaderAdded) {
        isHeaderAdded = true; // Đặt biến này thành true để không thêm lại dòng đầu
      }
    });
  }
  
function removeCartItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
  }
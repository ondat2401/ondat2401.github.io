var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Thêm sản phẩm vào giỏ hàng khi người dùng bấm vào nút "Thêm vào giỏ hàng"
function addToCart(product) {
  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  var existingProduct = cart.find(function(item) {
    return item.id === product.id;
  });
  
  if (existingProduct) {
    // Nếu sản phẩm đã có trong giỏ hàng, chỉ cập nhật số lượng
    existingProduct.quantity += product.quantity;
  } else {
    // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
    cart.push(product);
  }
  
  // Lưu thông tin giỏ hàng vào lưu trữ trình duyệt
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href="../html/giohang.html"
//   showCart();
}

// Ví dụ sử dụng hàm addToCart để thêm một sản phẩm vào giỏ hàng
var product = {
  id: 1,
  name: "Áo phông",
  price: 100000,
  quantity: 1
};

function showCart() {
    // Lấy thông tin giỏ hàng từ lưu trữ trình duyệt
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Tìm đến vùng hiển thị thông tin giỏ hàng trên trang web
    var cartContainer = document.getElementById("cart-container");
  
    // Tạo HTML để hiển thị thông tin giỏ hàng
    var cartHtml = "";
    var totalPrice = 0;
  
    cart.forEach(function(product) {
      var productTotalPrice = product.price * product.quantity;
      totalPrice += productTotalPrice;
      cartHtml += "<div>" +
                  "<h4>" + product.name + "</h4>" +
                  "<p>Giá: " + product.price + " VNĐ</p>" +
                  "<p>Số lượng: " + product.quantity + "</p>" +
                  "<p>Tổng tiền: " + productTotalPrice + " VNĐ</p>" +
                  "</div>";
    });
  
    // Hiển thị HTML vừa tạo lên trang giỏ hàng
    cartHtml += "<p>Tổng giá trị đơn hàng: " + totalPrice + " VNĐ</p>";
    cartContainer.innerHTML = cartHtml;
  }
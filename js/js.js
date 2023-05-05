function ktTaikhoan(){
    var tk=document.getElementById('username').value;
    var patten=/^.{6,}$/;
    if(patten.test(tk)){
        return ktTMK();
    }else{
        alert("Tài khoản phải có ít nhất có ít nhất 6 ký tự!");
        return false;
    }
}

function ktTMK(){
    var mk=document.getElementById('pass').value;
    var patten2=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(patten2.test(mk)){
        alert("Đăng nhập thành công");
        return true;
    }else{
        alert("Mật khẩu phải có ít nhất 1 chữ số, 1 chữ cái, 1 ký tự đặc biệt và có ít nhất 8 ký tự!");
        return false;
    }
}
function ktTaikhoan2(){
    var tk=document.getElementById('usernamedk').value;
    var patten=/^.{6,}$/;
    if(patten.test(tk)){
        return ktEmail();
    }else{
        alert("Tài khoản phải có ít nhất có ít nhất 6 ký tự!");
        return false;
    }
}
function ktEmail(){
    var email=document.getElementById('emaildk').value;
    var patten= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(patten.test(email)){
        return ktTMK2();
    }else{
        alert("Email sai định dạng!");
        return false;
    }
}
function ktTMK2(){
    var mk=document.getElementById('passdk').value;
    var mk2=document.getElementById('cfpassdk').value;
    var patten2=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(mk!=mk2){
        alert("Mật khẩu chưa trùng khớp!");
        return false;
    }
    if(patten2.test(mk)&&mk==mk2){
        
        return saveRegistrationInfo();
    }else{
        alert("Mật khẩu phải có ít nhất 1 chữ số, 1 chữ cái, 1 ký tự đặc biệt và có ít nhất 8 ký tự!");
        return false;
    }
}

function kiemtra(){
    ktTaikhoan();
}

// Hàm lưu thông tin đăng ký
var users=JSON.parse(localStorage.getItem("users")) || [];;
function saveRegistrationInfo(e) {
    event.preventDefault();
    var username = document.getElementById('usernamedk').value;
    var password = document.getElementById('passdk').value;
    var email = document.getElementById('emaildk').value;
    var user = {
        username: username,
        password: password,
        email: email
      };
    alert("Đăng ký thành công");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    // var json=JSON.stringify(user);
    // localStorage.setItem(username,json);
    // Lưu thông tin vào Local Storage
    
}
function checkLogin(e) {
    event.preventDefault();
    // Lấy thông tin từ người dùng
    var username = document.getElementById('usernamedn').value;
    var password = document.getElementById('passdn').value;
    if(username==''||password==''){
        alert("Vui lòng điền thông tin");
        return false;
    }
    // Kiểm tra thông tin đăng nhập
    if (login(username, password)) {
        alert("Đăng nhập thành công!");
        // Điều hướng đến trang chủ
        window.location.href = "../index.html";
    } else {
        alert("Thông tin đăng nhập sai!");
    }
}
function login(username, password) {
    // Lặp qua mảng người dùng để kiểm tra thông tin đăng nhập
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true; // Trả về true nếu thông tin đăng nhập đúng
        }
    }
    return false; // Trả về false nếu thông tin đăng nhập sai
}
var STT=1;

function btngiohang(){
    var hinh=getElementById('hinh').value;
    var gia=getElementById('gia').value;
    var size=getElementById('size').value;
    var num=getElementById('num').value;
    var tonggia=num*gia;
    var trnew="<tr><td>"+STT+"</td><td>"+hinh+"</td><td>"+size+"</td><td>"+num+"</td><td>"+tonggia+"<\td><\tr>"
    document.getElementById('tblgiohang')+=trnew;
    STT++;
}
function dangky(){
    // window.location.href="dangnhap.html"
    $('#Dangky').modal('show');
}
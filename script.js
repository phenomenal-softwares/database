function showP(){
  var psw = document.getElementById('psw');
  var eye = document.getElementById('psw-eye');
  if (psw.type === "password") {
    psw.type = "text";
  } else {
    psw.type = "password";
  }
  
  eye.classList.toggle("blur");
}
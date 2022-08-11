var form = document.getElementsByTagName('form');
var legend = document.getElementsByTagName('legend');
function toLogin(){
    document.getElementById('inputEmail').style.display = 'none';
    document.getElementById('inputConfirm').style.display = 'none';
    document.getElementById('submitForm').innerHTML = 'Log In';
    form[0].style.height = '55%';
    legend[0].innerHTML = 'Log In';
}
function toRegister(){
    document.getElementById('inputEmail').style.display = 'block';
    document.getElementById('inputConfirm').style.display = 'block';
    document.getElementById('submitForm').innerHTML = 'Register';
    form[0].style.height = '80%';
    legend[0].innerHTML = 'Register';
}
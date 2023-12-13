function store(){
    var name = document.getElementById('username');
    var pw = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 12){
        alert('Max of 12');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else{
        localStorage.setItem('username', name.value);
        localStorage.setItem('password', pw.value);
        window.location.href = '../index.html';
        alert('Your account has been created');
    }
}

function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');
    var userRemember = document.getElementById("confirm-password");

    if(userName.value == storedName && userPw.value == storedPw){
        window.location.href = '../../rating/rating-coments.html';
        alert('You are logged in.');
    }else{
        alert('Invalid Credentials');
    }
}

document.getElementById('btn-login').addEventListener('click', function(event){
//    console.log("btn clicked");
event.preventDefault();

// Phone Number from user
const numberFild = document.getElementById('num-input').value;

// Pin from user
const pinFild = document.getElementById('pin-input').value;
console.log(numberFild , pinFild);


if(numberFild === '0188' && pinFild === '1234'){
    window.location.href = '/home.html';
    // alert("Login Succefull");
}
else{
    alert("Wrong Number or Pin");
}

 

})
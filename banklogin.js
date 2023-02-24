document.getElementById('submit-btn').addEventListener('click', function() {
    // console.log('button clicked');
    const usearEmail = document.getElementById('usear-mail');
    const email = usearEmail.value;

    const passUsear = document.getElementById('usear-pass');
    const pass = passUsear.value;

    // console.log(email, pass);

    if(email == 'sakib@gmail.com' && pass == '12345') {
        // console.log("valid usear")
        window.location.href = 'bank.html'
    }
    else{
        // console.log('invalid usear')
        alert('Wrong PassWord!!!')
    }
})
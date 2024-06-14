let pattern_pass =/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/;
document.getElementById('password').addEventListener('blur', function (e)
{
    let thisValue = e.target.value;
    if (!thisValue || thisValue.match(pattern_pass)) {
        e.target.style.border ='1px solid red';
        e.target.style.color = '#fa0a0a';
    } else {
        e.target.style.border = '1px solid green';
        e.target.style.color = '#0a0000';
    }
});

document.getElementById('number').addEventListener('blur', function (e)
{
    let pattern_phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let thisValue = e.target.value;
    if (!thisValue || thisValue.match(pattern_phone)) {
        e.target.style.border ='1px solid red';
        e.target.style.color = '#fa0a0a';
    } else {
        e.target.style.border = '1px solid green';
        e.target.style.color = '#0a0000';
    }
});

const form = document.getElementById('authForm');
form.addEventListener('change', changeFormHandler);

function changeFormHandler() {
    console.log(form.checkValidity()); 
    if (form.checkValidity()) {
        var obj = JSON.parse(localStorage.getItem('user'));
        if (obj.number == document.getElementById('number').value &&
            obj.password == document.getElementById('password').value) {
                localStorage.setItem('isLogin', true)
                window.location.replace('profile.html');
            }
    }
}

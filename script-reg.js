const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        event.preventDefault();
    }
});

let pattern_rus = /[^а-яА-ЯёЁ\-\s]/;
document.getElementById('name').addEventListener('blur', function (e)
{
    let thisValue = e.target.value;
    if (!thisValue || thisValue.match(pattern_rus)) {
        e.target.style.border ='1px solid red';
        e.target.style.color = '#fa0a0a';
    } else {
        e.target.style.border = '1px solid green';
        e.target.style.color = '#0a0000';
    }
});
document.getElementById('surmame').addEventListener('blur', function (e)
{
    let thisValue = e.target.value;
    if (!thisValue || thisValue.match(pattern_rus)) {
        e.target.style.border ='1px solid red';
        e.target.style.color = '#fa0a0a';
    } else {
        e.target.style.border = '1px solid green';
        e.target.style.color = '#0a0000';
    }
});
document.getElementById('patronymic').addEventListener('blur', function (e)
{
    let thisValue = e.target.value;
    if (!thisValue || thisValue.match(pattern_rus)) {
        e.target.style.border ='1px solid red';
        e.target.style.color = '#fa0a0a';
    } else {
        e.target.style.border = '1px solid green';
        e.target.style.color = '#0a0000';
    }
});


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
document.getElementById('confirmPassword').addEventListener('blur', function (e)
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

form.addEventListener('change', changeFormHandler);

function changeFormHandler() {
    console.log(form.checkValidity()); 
    if (form.checkValidity()) {
        localStorage.setItem('isLogin', 'true');
        var obj = {
            'surname': document.getElementById('surmame').value,
            'name': document.getElementById('name').value,
            'patronymic': document.getElementById('patronymic').value,
            'phone': document.getElementById('number').value,
            'password': document.getElementById('password').value,
        };
        localStorage.setItem('user', JSON.stringify(obj));
        window.location.replace('profile.html')
    }
}
  
document.getElementById('btn-out').addEventListener('click', function() {
    localStorage.removeItem('isLogin');
    window.location.replace('registration.html');
});

let checkIsLogin = () => {
    if (localStorage.getItem('isLogin') == null) {
        window.location.replace('registration.html');
    }
}
console.log(`${localStorage.getItem('isLogin') != null}`);
checkIsLogin();
let personal = document.getElementById('personal');
let resize = () => {
    personal.style.width = `${window.innerWidth / 2}px`;
   
}
resize();
window.addEventListener('resize', resize);

let shSurname = 'Фамилия:';
let shName = 'Имя:';
let shPatronymic = 'Отчество:';
let shPhone = 'Номер телефона:';

function setDataProfile (data) {
    document.getElementById('surname').innerHTML = `${shSurname} ${data.surname}`;
    document.getElementById('name').innerHTML = `${shName} ${data.name}`;
    document.getElementById('patronymic').innerHTML = `${shPatronymic} ${data.patronymic}`;
    document.getElementById('phone').innerHTML = `${shPhone} ${data.phone}`;
}

let dataProfile = JSON.parse(localStorage.getItem('user'));
setDataProfile(dataProfile);




let shType = 'Тип заявки:';
let shAdress = 'Адрес:';
let shAmount = 'Количество молока:';
let shDate = 'Дата:';
let shStatus = 'Статус:';
let shPrice = 'Цена:';

let createHistory = (data) => {
    data.forEach(element => {
        let elem = document.createElement('div');
        elem.classList.add('elem');

        let row1 = document.createElement('div');
        row1.classList.add('row');
        elem.appendChild(row1);

        let type = document.createElement('p');
        type.innerHTML = `${shType}<br/>${(element.type) == 'req1' ? 'Покупка': 'Продажа'}`
        type.classList.add('p-elem');
        row1.appendChild(type);

        let adress = document.createElement('p');
        adress.innerHTML = `${shAdress}<br/>${element.adress}`
        adress.classList.add('p-elem');
        row1.appendChild(adress);

        let amount = document.createElement('p');
        amount.innerHTML = `${shAmount}<br/>${element.amount} литр`
        amount.classList.add('p-elem');
        row1.appendChild(amount);

        let row2 = document.createElement('div');
        row2.classList.add('row');
        elem.appendChild(row2);

        let date = document.createElement('p');
        date.innerHTML = `${shDate}<br/>${element['date']}`
        date.classList.add('p-elem');
        row2.appendChild(date);

        let status = document.createElement('p');
        status.innerHTML = `${shStatus}<br/>Оплачено`
        status.classList.add('p-elem');
        row2.appendChild(status);

        let price = document.createElement('p');
        price.innerHTML = `${shPrice}<br/>${element.price} рублей`
        price.classList.add('p-elem');
        row2.appendChild(price);

        document.getElementById('history').appendChild(elem); 
    });
}

let dataHistory = JSON.parse(localStorage.getItem('profile-history'));

createHistory(dataHistory);
let txt = 'Стоимость молока, учитывая количество: ';
let countAmount = document.getElementById('amount');
let costas = document.getElementById('costСalculation');
amount.addEventListener('change', function() {
    let count = countAmount.value;
    costas.innerHTML = `${txt} ${count * 20} рублей`;
});

let dtToday = new Date();
let month = dtToday.getMonth() + 1;
let day = dtToday.getDate();
let year = dtToday.getFullYear();
if (month < 10)
    month = '0' + month.toString();
if (day < 10)
    day = '0' + day.toString();
let minDate = year + '-' + month + '-' + day;    

document.getElementById('date').setAttribute('min', minDate);

function sendRequest() {
    console.log('sss')
    if (document.getElementById('sendReqForm').checkValidity()) {
        let obj = {
            'date': document.getElementById('date').value,
            'amount': document.getElementById('amount').value,
            'adress': document.getElementById('city').value + ', ' + 
                document.getElementById('street').value + ', ' + 
                document.getElementById('houseNumber').value,
            'price': Number(document.getElementById('amount').value) * 20,
            'type': document.getElementById('selectType').value
        };
        console.log(obj);

        let arr = JSON.parse(localStorage.getItem('profile-history')) || [];
        arr.push(obj);
        
        localStorage.setItem('profile-history', JSON.stringify(arr));
    }
}

document.getElementById('send').onclick = sendRequest;


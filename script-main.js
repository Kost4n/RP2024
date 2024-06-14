const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

const sliders = [
    {
        'img': 'images/slide1.png',
        'text': 'Мы занимаемся покупкой, сбором и продажей молока. В первую очередь, заключаем договора с ЛПХ на закупку молока.'
    },
    {
        'img': 'images/slide4.png',
        'text': 'Затем, осуществляется сбор молока с этих ферм, что обычно происходит с помощью специализированного транспорта'
    },
    {
        'img': 'images/slide2.png',
        'text': 'Сбор молока на фермах является важным этапом в работе компаний, занимающихся его покупкой, сбором и продажей'
    },
    {
        'img': 'images/slide3.png',
        'text': 'Этот процесс начинается с организации логистики для сбора молока с различных фермерских хозяйств, с которыми компания имеет договорные отношения.'
    },
    {
        'img': 'images/slide1.png',
        'text': 'Мы занимаемся покупкой, сбором и продажей молока. В первую очередь, заключаем договора с ЛПХ на закупку молока.'
    },
]

let showSlide = (numberSlide1, numberSlide2) => {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const slide1text = document.getElementById('sl-tx1');
    const slide2text = document.getElementById('sl-tx2');
    slide1.src = sliders[numberSlide1].img;
    slide2.src = sliders[numberSlide2].img;
    slide1text.innerHTML = sliders[numberSlide1].text;
    slide2text.innerHTML = sliders[numberSlide2].text;
}

function showNextSlide() {
    if (currentSlide + 1 >= sliders.length || currentSlide + 2 >= sliders.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide(currentSlide, currentSlide + 1)
}

function showPrevSlide() {
    if (currentSlide - 1 <= 0 || currentSlide + 2 <= 0) {
        currentSlide = sliders.length - 1;
    } else {
        currentSlide--;
    }
    showSlide(currentSlide - 1, currentSlide);
}

function adjustSlider() {
    const sliderWidth = slider.offsetWidth;
    const slide1 = slides[0];
    const slide2 = slides[1];
    if (sliderWidth < 769) {
        slide1.style.width = '100%';
        slide2.style.width = '0';
        slide2.style.visibility = 'hidden';
        document.querySelector('.slides').style.display = 'block';
    } else {
        slide1.style.width = '50%';
        slide2.style.width = '50%';
        slide2.style.visibility = 'visible';
        document.querySelector('.slides').style.display = 'flex';
    }
}

adjustSlider();
showSlide(currentSlide, currentSlide + 1);

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

window.addEventListener('resize', adjustSlider);
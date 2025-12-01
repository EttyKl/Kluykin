function changeColor(elem) {
    elem.style.backgroundColor == 'lightblue' ? 
        elem.style.backgroundColor = 'white' 
        : elem.style.backgroundColor = 'lightblue'; 
}

let currentRotation = 0;

function rotateElem(elem) {
    currentRotation += 90;
    elem.style.transform = `rotate(${currentRotation}deg)`;
}

function validateForm(e) {
    e.preventDefault();

    document.querySelectorAll('label').forEach(label => {
        label.textContent = '';
    });

    const name = document.querySelector('[name="name"]').value;
    const tel = document.querySelector('[name="tel"]').value;
    const time = document.querySelector('[name="time"]').value;
    const count = document.querySelector('[name="count"]').value;

    alert(`ФИО: ${name},\n Телефон: ${tel},\n Время доставки: ${time},\n Число шариков: ${count} шт`)

    if (name == '' || tel == '' || time == '' || count == '') {
        const label = document.querySelector('label[for="name"]');
        label.textContent = 'Заполните все поля формы'
    }

    else {
        const regexTime = new RegExp(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)
        const regexTel = new RegExp(/^((\+7|7|8)+([0-9]){10})$/)
        const regexName = new RegExp(/^[А-Яа-яЁё\s]+$/)

        const labelName = document.querySelector('label[for="name"]');
        if (!regexName.test(name)) {
            labelName.textContent = 'ФИО должно содержать только русские буквы'
        }

        else if (name.split(' ').length != 3 || name.length < 10) {
            labelName.textContent = 'Введите ФИО полностью'
        }

        if (!regexTime.test(time))
        {
            const label = document.querySelector('label[for="time"]');
            label.textContent = 'Введите время в формате **:**'
        }

        if (!regexTel.test(tel))
        {
            const label = document.querySelector('label[for="tel"]');
            label.textContent = 'Телефон должен начинаться с +7 или 8 и иметь еще 10 цифр'
        }

        const labelCount = document.querySelector('label[for="count"]');
        if (count <= 9)
        {
            labelCount.textContent = 'Минимум 10 шариков'
        } 

        else if (count > 300) {
            labelCount.textContent = 'Максимум 300 шариков'
        }
    }
}


const formWithValidation = document.querySelector('.deliver-me-form');
formWithValidation.addEventListener('submit', validateForm)
const daysInWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].reverse();
const forDaysInWeek = document.querySelector('.schedule__week');
const dayInWeek = document.querySelector('.schedule__tasks');
let todayIs = new Date();

const whatIsDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];



    dayInWeek.dataset.day = whatIsDay[todayIs.getDay()];





const schedule = {
    'пн': {
        '13:00' : 'Обед',
        '17:40' : 'Скайпкол'
    },
    'вт': {
        '13:00' : 'Обед',
        '13:40' : 'Скайпкол'        
    },
    'пт': {
        '13:00' : 'Обед',
        '13:40' : 'Отдых'        
    }
};



let text = '';
let toDayAdd = schedule[dayInWeek.dataset.day];
for (let element in toDayAdd) {
    text += `
    <div class="day__task">
    <div class = "day__time">${element}</div>
    <div class = "day__reminder">${toDayAdd[element]}</div>
    <div class ="task__delete">X</div>
    </div>
    `;
}
dayInWeek.innerHTML = text;


for (let day in daysInWeek) {
    let inday = daysInWeek[day];
    forDaysInWeek.insertAdjacentHTML('afterbegin', `
        <div class="schedule__week-day">${inday}</div>
    `);
    let nowDay = document.querySelector('.schedule__week-day');
    
    nowDay.addEventListener('click', (event) => {
        
        dayInWeek.dataset.day = inday;
        let toDayAdd = schedule[dayInWeek.dataset.day];

        let text = '';
        for (let element in toDayAdd) {
            text += `
            <div class="day__task">
            <div class = "day__time">${element}</div>
            <div class = "day__reminder">${toDayAdd[element]}</div>
            </div>
            `;
        }
        dayInWeek.innerHTML = text;



    });
}



const scheduleInputTime = document.querySelector('.schedule__input-time');
const scheduleInputRemind = document.querySelector('.schedule__input-remind');
const addTaskButton = document.querySelector('.schedule__button');

addTaskButton.addEventListener('click', (event) => {

    event.preventDefault();
    dayInWeek.insertAdjacentHTML('afterbegin', 
    `       <div class="day__task">
            <div class = "day__time">${scheduleInputTime.value}</div>
            <div class = "day__reminder">${scheduleInputRemind.value}</div>
            </div>
            `
    );

    let toDayAdd = schedule[dayInWeek.dataset.day];

    
    toDayAdd[scheduleInputTime.value] = scheduleInputRemind.value;
    
    

    let text = '';
    for (let element in toDayAdd) {
        text += `
        <div class="day__task">
        <div class = "day__time">${element}</div>
        <div class = "day__reminder">${toDayAdd[element]}</div>
        </div>
        `;
    }
    dayInWeek.innerHTML = text;



});




dayInWeek.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__delete')) {
        let timeToDelete = event.target.closest('.day__task').querySelector('.day__time').textContent;
        timeToDelete

        event.target.closest('.day__task').remove();
        delete schedule[dayInWeek.dataset.day][timeToDelete];
    } else if ()



});
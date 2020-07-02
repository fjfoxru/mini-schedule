const daysInWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].reverse();
const forDaysInWeek = document.querySelector('.schedule__week');
const dayInWeek = document.querySelector('.schedule__tasks');
const schedule = {
    'пн': {
        '13:00' : 'Обед',
        '17:40' : 'Скайпкол'
    },
    'вт': {
        '13:00' : 'Обед',
        '13:40' : 'Скайпкол'        
    }
};



for (let day in daysInWeek) {
    let inday = daysInWeek[day];
    forDaysInWeek.insertAdjacentHTML('afterbegin', `
        <div class="schedule__week-day">${inday}</div>
    `);
    let nowDay = document.querySelector('.schedule__week-day');
    
    nowDay.addEventListener('click', (event) => {
        
        let text = '';

        for (let element in schedule[inday]) {
            text += `
            <div class = "day__time">${element}</div>
            <div class = "day__reminder">${schedule[inday][element]}</div>
            `;
        }
        dayInWeek.innerHTML = text;
    });
}





const addTaskButton = document.querySelector('.schedule__button');

addTaskButton.addEventListener('click', (event) => {

    event.preventDefault();


});
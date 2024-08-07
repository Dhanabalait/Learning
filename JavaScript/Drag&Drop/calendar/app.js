let navigation = 0;
const calendarDays = document.getElementById('calendarDays');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
const calMonth = document.getElementById('calMonth');
const externalEvents = document.getElementById('externalEvents');
const eventItems = document.getElementsByClassName('event-item');
console.log('eventItems',eventItems);

let btnPrevious = document.getElementById('btnPrevious');
let btnNext = document.getElementById('btnNext');

const eventDropBoxs = document.getElementsByClassName('event-drop-box');
function loadCalendar() {

    calendarDays.innerHTML = '';
    const date = new Date();

    if (navigation != 0) {
        date.setMonth(new Date().getMonth() + navigation);
    }
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    calMonth.innerHTML = `${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`;
    const dayInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayofMonth = new Date(year, month, 1);
    const dateText = firstDayofMonth.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' });
    //console.log('dateText=======> ', dateText);

    const startDayofMonth = dateText.split(',')[0];

    const emptyDays = weekDays.indexOf(startDayofMonth);
    //console.log(emptyDays);
    for (let i = 1; i <= dayInMonth + emptyDays; i++) {
        const dayBox = document.createElement('div');
        const dayVal = i - emptyDays < 10 ? "0" + (i - emptyDays) : i - emptyDays;
        const monthVal = month + 1 < 10 ? "0" + (month + 1) : month + 1;
        const dateString = `${dayVal}/${monthVal}/${year}`;
        console.log('dateString======> ', dateString);
        if (i > emptyDays) {
            dayBox.innerText = i - emptyDays;
            dayBox.classList.add('day', 'event-drop-box');
            dayBox.setAttribute('data-id', dateString);
            if (events) {
                const dayofTheEvents = events.filter((e) => e.startDate == dateString);
                console.log('dayofTheEvents======> ', dayofTheEvents);

                dayofTheEvents.forEach((e) => {
                    const eventDetail = `<h5>${e.title}</h5>`;
                    const existEvent = document.createElement('div');
                    existEvent.classList.add('event-item');
                    existEvent.setAttribute('data-id', e.id);
                    existEvent.setAttribute('draggable', true);
                    existEvent.innerHTML = eventDetail;
                    dayBox.appendChild(existEvent);
                });

            }

            if (i - emptyDays === day && navigation == 0) {
                dayBox.classList.add('current-day');
            }
        } else {
            dayBox.classList.add('day', 'empty-day');
        }

        calendarDays.append(dayBox);
    }

}

btnPrevious.addEventListener('click', () => {
    navigation--;
    loadCalendar();
    dropBoxLoad();
});

btnNext.addEventListener('click', () => {
    navigation++;
    loadCalendar();
    dropBoxLoad();
});


function loadEvents() {
    events.forEach((myEvent) => {
        if (myEvent.startDate == null) {
            const eventDetail = `<h5>${myEvent.title}</h5>`;
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event-item');
            eventDiv.setAttribute('data-id', myEvent.id);
            eventDiv.setAttribute('draggable', true);
            eventDiv.innerHTML = eventDetail;
            externalEvents.appendChild(eventDiv);
        }
    });
}

loadCalendar();
loadEvents();
dropBoxLoad();

for (let i of eventItems) {
    i.addEventListener("dragstart", dragStart);
    i.addEventListener("dragend", dragEnd);
}

function dragStart() {
    console.log('dragStart', this);
    dragEvent = this;
    setTimeout(() => this.style.display = 'none', 0);
}

function dragEnd() {
    const draggId = this.dataset.id;
    const eventStartDate = this.parentElement.dataset.id;
    saveEvent(draggId, eventStartDate);
    setTimeout(() => this.style.display = 'block', 0);
    dragEvent = null;
    //setTimeout(()=> this.parentElement.classList.remove('drop-box-hover'),1000);
}

function saveEvent(id, date) {
    const getEvents = events;
    const updateEvent = getEvents.filter((e) => e.id == id)[0];
    updateEvent.startDate = date ? date : null;
    console.log('updateEvent: ', updateEvent);
    localStorage.setItem('events', JSON.stringify(getEvents));
}

function dropBoxLoad() {
    for (let i of eventDropBoxs) {
        i.addEventListener("dragover", dragEventOver);
        i.addEventListener("dragenter", dragEventEnter);
        i.addEventListener("dragleave", dragEventLeave);
        i.addEventListener("drop", dropEvent);
    }
}
function dropEvent() {
    console.log('drop====> ',this);
    this.append(dragEvent);
}
function dragEventOver(e) {
    e.preventDefault();
    this.classList.add('drop-box-hover');
}
function dragEventEnter(e) {
    e.preventDefault();
    //setTimeout(()=> this.classList.remove('drop-box-hover'),0);
}
function dragEventLeave() {
    this.classList.remove('drop-box-hover');
}
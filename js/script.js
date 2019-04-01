const date = new Date();
const dayNamesPL = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota"
];
const monthNamesPL = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień"
];
const changeDateBy = {
  addDay: () => {
    date.setDate(date.getDate() + 1);
  },
  subDay: () => {
    date.setDate(date.getDate() - 1);
  },
  addMonth: () => {
    date.setMonth(date.getMonth() + 1);
  },
  subMonth: () => {
    date.setMonth(date.getMonth() - 1);
  },
  addYear: () => {
    date.setFullYear(date.getFullYear() + 1);
  },
  subYear: () => {
    date.setFullYear(date.getFullYear() - 1);
  }
};

const init = () => {
  window.onload = displayDate();
};
const changeDatebuttons = document.querySelectorAll(".callendarPage button");
changeDatebuttons.forEach(element => {
  addEventListener("click", buttonHandler);
});



function displayDate() {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let dayWord = date.getDay();

  let displayYear = (document.getElementById("year").innerHTML = year);
  let displayMonth = (document.getElementById("month").innerHTML =
    monthNamesPL[month]);
  let displayDay = (document.getElementById("day").innerHTML = day);
  let displayDayWord = (document.getElementById("dayWord").innerHTML =
    dayNamesPL[dayWord]);

    dayDisplayColor(dayWord);
}

function buttonHandler() {
  let action = event.target.getAttribute("data-action");
  console.debug(action);
  if (action === null) {
    return;
  }
  changeDateBy[action]();
  displayDate();
}

function dayDisplayColor(day) {
    dayClass = document.getElementById('day').classList
    day === 0 ? dayClass.add('red') : dayClass.remove('red')
}

init();

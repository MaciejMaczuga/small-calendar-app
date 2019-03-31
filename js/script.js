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

const displayDate = () => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayWord = date.getDay();

  const displayYear = (document.getElementById("year").innerHTML = year);
  const displayMonth = (document.getElementById("month").innerHTML = month + 1);
  const displayDay = (document.getElementById("day").innerHTML = day);
  const displayDayWord = document.getElementById('dayWord').innerHTML = dayNamesPL[dayWord];
};
window.onload = displayDate();

const dateControl = {
  addDay: function() {
    date.setDate(date.getDate() + 1);
  },
  subDay: function() {
    date.setDate(date.getDate() - 1);
  },
  addMonth: function() {
    date.setMonth(date.getMonth() + 1);
  },
  subMonth: function() {
    date.setMonth(date.getMonth() - 1);
  },
  addYear: function() {
    date.setFullYear(date.getFullYear() + 1);
  },
  subYear: function() {
    date.setFullYear(date.getFullYear() - 1);
  }
};

const buttonHandler = () => {
  const action = event.target.getAttribute("data-action");
  console.log(action);
  if (action === null) {
    return;
  }
  dateControl[action]();
  displayDate();
};

buttons = document.querySelectorAll(".callendarPage button");
buttons.forEach(element => {
  addEventListener("click", buttonHandler);
});

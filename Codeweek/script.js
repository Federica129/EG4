const jsonURL = "https://jsonplaceholder.typicode.com/todos";

const secToday = document.querySelector(".today");
const secFuture = document.querySelector(".future");
const secPast = document.querySelector(".past");
const boxpast = document.querySelector(".secpast");
const box = document.querySelector(".box");

const secTodayEm = document.querySelector(".todayempty");
const secFutureEm = document.querySelector(".futureempty");
const secPastEm = document.querySelector(".pastempty");

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} //fn numeri random

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
} //fn per convertire la data in due caratteri

const sortDates = (a, b) => {
  if (a.date < b.date) return -1;
  if (a.date > b.date) return 1;
  return 0;
}; //funzione sort, ordinamento delle date

fetch(jsonURL)
  .then((res) => res.json())
  .then((info) => {
    //console.log(info); //vecchio array
    const days = [
      "2022-12-05",
      "2022-03-04",
      "2023-04-02",
      "2019-08-11",
      "2022-07-14",
      "2018-02-01",
      "2024-01-20",
      "2027-12-15",
      "2022-11-07",
      "2028-05-02",
      "2026-08-15",
      "2022-01-13",
      "2009-02-01",
      "2006-01-20",
      "2022-07-05",
      "2021-04-04",
      "2023-08-12",
      "2001-08-11",
      "2024-07-13",
      "2015-02-01",
      "2024-10-21",
      "2027-11-05",
      "2014-10-07",
      "2028-09-02",
      "2010-08-15",
      "2022-02-13",
      "2004-02-11",
      "2006-01-25",
      "2028-09-14",
      "2011-03-19",
      "2022-04-22",
      "2011-12-11",
      "2016-05-25",
      "2028-10-12",
      "2010-07-01",
      "2022-12-13",
      "2014-05-12",
      "2006-11-23",
      "2027-04-27",
      "2011-05-29",
      "2022-04-30",
      "2011-06-21",
      "2016-07-28",
      "2012-07-29",
      "2022-06-30",
      "2013-06-26",
      "2016-08-16",
      "2022-10-13",
      "2014-05-15",
      "2006-12-20",
      "2025-04-21",
      "2012-07-29",
      "2022-08-30",
      "2011-06-17",
      "2016-02-28",
      "2014-03-29",
      "2022-09-19",
      "2013-05-26",
      "2016-08-20",
      "1922-12-30",
      "2000-09-01",
      "2077-11-23",
    ];

    const newArr = info.map((obj, i, a) => ({
      ...obj,
      priority: randomIntFromInterval(1, 4),
      date: days[randomIntFromInterval(0, 60)],
      //   e.priority = num;
      //   e.date = days[i];
    }));
    // console.log(newArr);

    const giorno = new Date();
    const date1 = `${padTo2Digits(giorno.getFullYear())}-${padTo2Digits(
      giorno.getMonth() + 1
    )}-${giorno.getDate()}`;

    //TODAY
    const todayFilt = newArr.filter((obj) => {
      if (obj.date === date1) {
        return obj;
      }
    });

    secToday.innerHTML = todayFilt
      .map((data) => {
        const [year, month, day] = data.date.split("-");

        if (data.date === date1) {
          return `<div class='box'><p>${day}-${month}-${year}</p><h6>Priorità:${data.priority}</h6></div>`;
        }
      })
      .slice(0, 12)
      .sort()
      .join("");

    //FUTURE
    const futFilt = newArr.filter((obj) => {
      if (obj.date > date1) {
        return obj;
      }
    });

    secFuture.innerHTML = futFilt
      .sort(sortDates)
      .map((data) => {
        const newDate = data.date.split("-").reverse().join("-");
        return `<div class='box'><p>${newDate}</p><h6>Priorità:${data.priority}</h6></div>`;
      })
      .slice(0, 38)
      .join("");
    console.log(futFilt);

    //PAST
    const pastFilt = newArr.filter((obj) => {
      if (obj.date < date1) {
        return obj;
      }
    });
    console.log(pastFilt);
    secPast.innerHTML = pastFilt
      .sort(sortDates)
      .map((data) => {
        const newDate1 = data.date.split("-").reverse().join("-");
        return `<div class='box'><p>${newDate1}</p><h6>Priorità:${data.priority}</h6></div>`;
      })
      .slice(0, 43)
      .join("");
  })
  .then(() => {
    if (secToday.innerHTML === "") {
      secTodayEm.innerHTML = `<div class='infop'><p >Non ci sono appuntamenti per oggi.</p></div>`;
      secToday.style.height = 0;
    }

    if (secFuture.innerHTML === "") {
      secFutureEm.innerHTML = `<div class='infop'><p>Nessun
      appuntamento previsto per i prossimi giorni.</p></div>`;
      secFuture.style.height = 0;
    }
    if (secPast.innerHTML === "") {
      boxpast.style.display = "none";
    }
  })
  .catch((err) => {
    console.log(err);
  });

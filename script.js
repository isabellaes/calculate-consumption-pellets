import data from "./data.json" assert { type: "json" };

window.localStorage.setItem("data", JSON.stringify(data.data));

const yearSection = document.getElementById("year");
const monthSection = document.getElementById("month");
const allDataSection = document.getElementById("alldata");

function filterDataByYear() {
  const pellets1 = window.localStorage.getItem("data");
  const pellets = JSON.parse(pellets1);
  const years = pellets.map((element) => element.date.substring(0, 4));
  const unique = [new Set(years)];
  const values = [];
  unique[0].forEach((entry) => values.push(entry));

  const amount = pellets.filter(
    (element) => element.date.substring(0, 4) === values[0]
  );

  const amountSum = amount.map((element) => element.amount);
  let sum = 0;
  for (let index = 0; index < amountSum.length; index++) {
    let num = Number(amountSum[index]);
    sum = sum + num;
  }

  const h1 = document.createElement("h1");
  h1.innerHTML = values[0];

  const h2 = document.createElement("h2");
  h2.innerHTML = sum;

  yearSection.appendChild(h1);
  yearSection.appendChild(h2);
}

function filterDataByMonth() {
  const pellets1 = window.localStorage.getItem("data");
  const pellets = JSON.parse(pellets1);
  const months = pellets.map((element) => element.date.substring(5, 7));
  const unique = [new Set(months)];
  const values = [];
  unique[0].forEach((entry) => values.push(entry));

  values.forEach((value) => {
    const amount = pellets.filter(
      (element) => element.date.substring(5, 7) === value
    );
    const amountSum = amount.map((element) => element.amount);
    let sum = 0;
    for (let index = 0; index < amountSum.length; index++) {
      let num = Number(amountSum[index]);
      sum = sum + num;
    }
    let month1;
    switch (value) {
      case "01":
        month1 = "Januari";
        break;
      case "02":
        month1 = "Februari";
        break;
      case "03":
        month1 = "Mars";
        break;
      case "04":
        month1 = "April";
        break;

      case "05":
        month1 = "Maj";
        break;
      case "06":
        month1 = "Juni";
        break;
      case "07":
        month1 = "Juli";
        break;
      case "08":
        month1 = "Augusti";
        break;
      case "09":
        month1 = "September";
        break;
      case "10":
        month1 = "Oktober";
        break;
      case "11":
        month1 = "November";
        break;
      case "12":
        month1 = "December";
        break;
      default:
        break;
    }
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = month1;
    td2.innerHTML = sum;

    tr.appendChild(td1);
    tr.appendChild(td2);
    monthSection.appendChild(tr);
  });
}

function allDataToTable() {
  const pellets1 = window.localStorage.getItem("data");
  const pellets = JSON.parse(pellets1);
  pellets.forEach((element) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = element.date;
    td2.innerHTML = element.amount;

    tr.appendChild(td1);
    tr.appendChild(td2);
    allDataSection.appendChild(tr);
  });
}

function form() {
  const pellets1 = window.localStorage.getItem("data");
  const pellets = JSON.parse(pellets1);
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("date").value;
    const input2 = document.getElementById("amount").value;
    const object = {
      amount: input2,
      date: input,
    };
    pellets.push(object);
    window.localStorage.setItem("data", JSON.stringify(pellets));
  });
}

filterDataByYear();
filterDataByMonth();
allDataToTable();
form();

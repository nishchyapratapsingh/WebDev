const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
let msg = document.querySelector(".msg");


const updateMessage = async() => {
    let amountElem = document.querySelector(".amountBox input");
    let amount = amountElem.value;
    if (amount === "" || amount < 1) {
      amount = 1;
      amountElem.value = "1";
    }
    const fromCountry = document.querySelector(".from select").value;
    const toCountry = document.querySelector(".to select").value;
    const URL = `${BASE_URL}/${fromCountry.toLowerCase()}.json`; //api calls should be lower case
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let rate = data[fromCountry.toLowerCase()][toCountry.toLowerCase()];
    let resultAmount = amount * rate;
  
    msg.innerText = `${amount} ${fromCountry} = ${resultAmount} ${toCountry}`;
}

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);

    select.addEventListener("change", (evt) => {
      updateFlag(evt.target); //gives as argument the element changed
    });
  }
}

window.addEventListener("load", ()=> {
    updateMessage();
})

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let image = element.parentElement.querySelector("img");
  image.src = newSrc;
};


btn.addEventListener("click", async (evt) => {
  evt.preventDefault(); //prevents default behaviour of button (reload)
  updateMessage();
});

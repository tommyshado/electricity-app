// DOM element(s) references

const unitsAvailable = document.querySelector(".unitsAvailable");
const unitsBought = document.querySelector(".totalUnits");
const totalAmountSpent = document.querySelector(".totalAmount");
const advanceTaken = document.querySelector(".advanceTaken");
const checkedIcon = document.querySelector(".showIcon");
const buttonForBuying = document.querySelector(".btn");
const usageOfElectricity = document.querySelector(".useNow");
const messages = document.querySelector("#message");
const messagesForElectricity = document.querySelector("#electricityMessages");

var boughtUnits = 0;
var unitsAval = 0;
var amountSpentForElectricity = 0;
var takenAdvance = 0;

if (localStorage["unitsBought"]) {
  boughtUnits = Number(localStorage.getItem("unitsBought"));
  unitsBought.innerText = boughtUnits.toFixed(2);
}

if (localStorage["unitsAvailable"]) {
  unitsAval = Number(localStorage.getItem("unitsAvailable"));
  unitsAvailable.innerText = unitsAval.toFixed(2);
}

if (localStorage["amountSpent"]) {
  amountSpentForElectricity = Number(localStorage.getItem("amountSpent"));
  totalAmountSpent.innerText = amountSpentForElectricity.toFixed(2);
}

if (localStorage["advanceTaken"]) {
  takenAdvance = Number(localStorage.getItem("advanceTaken"));
  advanceTaken.innerText = takenAdvance.toFixed(2);
}

const electricity = Electricity(
  boughtUnits,
  unitsAval,
  amountSpentForElectricity,
  takenAdvance
);

function topElectricity(topUpValue) {
    electricity.topUpElectricity(topUpValue);
    unitsBought.innerText = electricity.totalUnitsBought();
    unitsAvailable.innerText = electricity.getUnitsAvailable();

    localStorage.setItem("unitsBought", unitsBought.innerText);
    localStorage.setItem("unitsAvailable", unitsAvailable.innerText);
    localStorage.setItem("amountSpent", totalAmountSpent.innerText);
};

if (Number(advanceTaken.innerText) > 0) {
  checkedIcon.style.display = "block";
}

buttonForBuying.addEventListener("click", function () {
  const topUpElectricity = document.querySelector(
    "input[name='buyElectricity']:checked"
  );

  if (topUpElectricity.value !== "advance") {
    topElectricity(topUpElectricity.value);
    totalAmountSpent.innerText = electricity.totalAmountSpent();

    messages.innerHTML = "Bought electricity units.";
    messages.classList.add("success");

    setTimeout(() => {
      messages.innerHTML = "";
    }, 3000);

    return;
  }

  topElectricity(topUpElectricity.value);
  advanceTaken.innerText = electricity.advanceUnits();

  if (Number(advanceTaken.innerText) > 0) {
    checkedIcon.style.display = "block";
  }

  localStorage.setItem("advanceTaken", advanceTaken.innerText);
});

usageOfElectricity.addEventListener("click", function () {

  if (Number(unitsAvailable.innerHTML) > 0) {
    const appliacesUsage = document.querySelector(
      "input[name='useElectricity']:checked"
    );
  
    if (appliacesUsage) {
      electricity.useAppliance(appliacesUsage.value);
      unitsAvailable.innerText = electricity.getUnitsAvailable();
  
      messagesForElectricity.innerHTML = "Used electricity units.";
      messagesForElectricity.classList.add("success");
  
      setTimeout(() => {
        messagesForElectricity.innerHTML = "";
      }, 3000);
  
      localStorage["unitsAvailable"] = unitsAvailable.innerText;
    }
  }
});

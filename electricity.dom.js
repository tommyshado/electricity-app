// DOM element(s) references


// references to the electricity elements section
const unitsAvailable = document.querySelector('.unitsAvailable');
const unitsBought = document.querySelector('.totalUnits');
const totalAmountSpent = document.querySelector('.totalAmount');

// buttons
const buttonForBuying = document.querySelector('.btn');

// variables for local storage
var boughtUnits = 0;
var unitsAval = 0;
var amountSpentForElectricity = 0;

// local storage code 
if (localStorage['unitsBought']) {
    boughtUnits = Number(localStorage.getItem('unitsBought'));
    unitsBought.innerText = boughtUnits.toFixed(2);
}

if (localStorage['unitsAvailable']) {
    unitsAval = Number(localStorage.getItem('unitsAvailable'));
    unitsAvailable.innerText = unitsAval.toFixed(2);
}

if (localStorage['amountSpent']) {
    amountSpentForElectricity = Number(localStorage.getItem('amountSpent'));
    totalAmountSpent.innerText = amountSpentForElectricity.toFixed(2);
}

// Factory Function instance 
const electricity =  Electricity(boughtUnits);


// DOM events here 
buttonForBuying.addEventListener('click', function() {
    // radio button for top up electricity
    const topUpElectricity = document.querySelector("input[name='buyElectricity']:checked");
    if (topUpElectricity) {
        electricity.topUpElectricity(topUpElectricity.value);
        // setting units bought by the client in the unitsBought element reference
        unitsBought.innerText = electricity.totalUnitsBought();
        // setting the amount units available in the unitsAvailable element reference
        unitsAvailable.innerText = electricity.getUnitsAvailable();
        // setting the amount a client will spend in the totalAmountSpent element reference
        totalAmountSpent.innerText = electricity.totalAmountSpent();

        // storing units bought in the local storage
        localStorage.setItem('unitsBought', unitsBought.innerText);
        localStorage.setItem('unitsAvailable', unitsAvailable.innerText);
        localStorage.setItem('amountSpent', totalAmountSpent.innerText);
    };
});
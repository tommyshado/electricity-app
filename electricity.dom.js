// DOM element(s) references


// references to the electricity elements section
const unitsAvailable = document.querySelector('.unitsAvailable');
const unitsBought = document.querySelector('.totalUnits');
const totalAmountSpent = document.querySelector('.totalAmount');
const advanceAmount = document.querySelector('.advance');

// buttons

// button for buying electricty
const buttonForBuying = document.querySelector('.btn');

// button for using electricity
const usageOfElectricity = document.querySelector('.useNow');

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
const electricity =  Electricity(boughtUnits, unitsAval);


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
        localStorage.setItem('unitsBought', unitsAvailable.innerText);
        localStorage.setItem('amountSpent', totalAmountSpent.innerText);
    };
});

usageOfElectricity.addEventListener('click', function() {
    // get the reference to the radio buttons
    const appliacesUsage = document.querySelector("input[name='useElectricity']:checked");

    // checking if the client is using the appliance 
    if (appliacesUsage) {
        // client is using the appliance
        electricity.useAppliance(appliacesUsage.value);
        // decrementing the unitsAvailable inner units
        unitsAvailable.innerText = electricity.getUnitsAvailable();
        // local storage
        localStorage['unitsAvailable'] = unitsAvailable.innerText;
    }
});
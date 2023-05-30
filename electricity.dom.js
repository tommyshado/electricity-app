// DOM element(s) references


// references to the electricity elements section
const unitsAvailable = document.querySelector('.unitsAvailable');
const unitsBought = document.querySelector('.totalUnits');
const totalAmountSpent = document.querySelector('.totalAmount');

// buttons
const buttonForBuying = document.querySelector('.btn');

// Factory Function instance 
const electricity =  Electricity();

// variables for local storage
var boughtUnits = 0;

// local storage code 
if (localStorage['unitsBought']) {
    unitsBought.innerText = localStorage.getItem('unitsBought');
    boughtUnits = unitsBought.innerText;
}



// DOM events here 
buttonForBuying.addEventListener('click', function() {
    // radio button for top up electricity
    const topUpElectricity = document.querySelector("input[name='buyElectricity']:checked");
    if (topUpElectricity) {
        electricity.topUpElectricity(topUpElectricity.value);
        unitsBought.innerText = electricity.getUnitsAvailable();
        // storing units bought in the local storage
        localStorage.setItem('unitsBought', unitsBought.innerText);
    };
});
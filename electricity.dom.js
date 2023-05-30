// DOM element(s) references

// radio button for top up electricity
const topUpElectricity = document.querySelector("input[name='buyElectricity']");

// references to the electricity elements section
const unitsAvailable = document.querySelector('.unitsAvailable');
const unitsBought = document.querySelector('.totalUnits');
const totalAmountSpent = document.querySelector('.totalAmount');

// buttons
const buttonForBuying = document.querySelector('.btn');

// Factory Function instance 
const electricity =  Electricity();


// DOM events here 
buttonForBuying.addEventListener('click', function() {
    if (topUpElectricity) {

    };
});
// DOM element(s) references

// radio button for top up electricity
const topUpElectricity = document.querySelector("input[name='buyElectricity']");

// buttons
const buttonForBuying = document.querySelector('.btn');

// Factory Function instance 
const electricity =  Electricity();


// DOM events here 
buttonForBuying.addEventListener('click', function() {
    if (topUpElectricity) {};
});
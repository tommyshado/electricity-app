function Electricity(boughtUnits) {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    // create a variable to keep track of the amount bought for electricity
    let unitsAvailable = boughtUnits || 0;

    function topUpElectricity(amount) {
        // convert the string we will get from the dom from the amount reference
        let amountNumber = Number(amount);
        // create conditional statements to check the amount from the UI whether it's value is 10, 20 and 50
        // and also check whether a client selects an advance of 30
        if (amountNumber === 10) {
            // assign the variable amountOfElectricity with 7 units
            unitsAvailable += 7.00;
        }

        if (amountNumber === 20) {
            // assign the variable amountOfElectricity with 14 units
            unitsAvailable += 14.00;
        }
        
        if (amountNumber === 50) {
            // assign the variable amountOfElectricity with 35 units
            unitsAvailable += 35.00;
        }



    }

    function getUnitsAvailable() {
         return unitsAvailable.toFixed(2);
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        
    }

    function advanceTaken() {
    }

    function totalAmountSpent() {
    }

    function totalUnitsBought(){
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}
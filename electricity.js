function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    // create a variable to keep track of the amount bought for electricity
    let amountOfElectricity = 0;

    // create an empty object to keep trcak of the number of advance of electricity to not allow a client to make use of advance more than once
    const advanceElectricity = {};

    function topUpElectricity(amount) {
        // convert the string we will get from the dom from the amount reference
        let amountNumber = Number(amount);
        // create conditional statements to check the amount from the UI whether it's value is 10, 20 and 50
        // and also check whether a client selects an advance of 30
        if (amountNumber === 10) {
            // assign the variable amountOfElectricity with 7 units
            amountOfElectricity = 7;
        }

        if (amountNumber === 20) {
            // assign the variable amountOfElectricity with 14 units
            amountOfElectricity = 14;
        }

        if (amountOfElectricity === 50) {
            // assign the variable amountOfElectricity with 35 units
            amountOfElectricity = 35;
        }

        if (amountOfElectricity === 30) {
            if (advanceElectricity[amountOfElectricity] === undefined) {
                // assign the variable amountOfElectricity with 21 units
                amountOfElectricity = 21;
                // we will get this for the dom
                advanceElectricity[amountOfElectricity] = 1;
            } else {
                advanceElectricity[amountOfElectricity]++;
            }
        }

    }

    function getUnitsAvailable() {
         return unitsAvailable;
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
function Electricity(boughtUnits, unitsAval) {

    // do we want to go with this or array? 
    let appliances = {
        'stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    // create a variable to keep track of the amount bought for electricity
    let unitsAvailable = unitsAval || 0;

    // create a variable to keep track of the current amount of electricity
    let currentAmountOfElectrity = 0;

    // variable for the advance
    let advance = 0;

    let advanceGiven = false;

    // create another variable to keep track of the units that are bought without decrementing with appliaces values
    let totalOfUnitsBought = boughtUnits || 0;

    function topUpElectricity(amount) {
        // convert the string we will get from the dom from the amount reference
        let amountNumber = Number(amount);

        let amountOfAdvance = amount;

        // reassign a variable that will keep track of the amount
        currentAmountOfElectrity += amountNumber;
        // create conditional statements to check the amount from the UI whether it's value is 10, 20 and 50
        // and also check whether a client selects an advance of 30
        if (amountNumber === 10) {
            // assign the variable amountOfElectricity with 7 units
            unitsAvailable += 7.00;
            totalOfUnitsBought += 7.00;
        }

        if (amountNumber === 20) {
            // assign the variable amountOfElectricity with 14 units
            unitsAvailable += 14.00;
            totalOfUnitsBought += 14.00;
        }
        
        if (amountNumber === 50) {
            // assign the variable amountOfElectricity with 35 units
            unitsAvailable += 35.00;
            totalOfUnitsBought += 35.00;
        }

        if (amountOfAdvance === 'advance' && advanceGiven === false) {
                unitsAvailable += 21.00;
                totalOfUnitsBought += 21.00;
                advance += 21.00;
                advanceGiven = true;
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
        if (unitsAvailable > 0) {
            for (const applianceKey in appliances) {
                if (applianceKey === "stove" && appliance === "stove") {
                    unitsAvailable -= appliances[applianceKey];
                }
                if (applianceKey === "Kettle" && appliance === "Kettle") {
                    unitsAvailable -= appliances[applianceKey];
                }
                if (applianceKey === "TV" && appliance === "TV") {
                    unitsAvailable -= appliances[applianceKey];
                }
                if (appliance === "Fridge" && appliance === "Fridge") {
                    unitsAvailable -= appliances[applianceKey];
                }
            }
        }

        
    }


    function advanceTaken() {
        if (advanceGiven) {
            return true;
        }
        return false;
    }

    function totalAmountSpent() {
        return currentAmountOfElectrity.toFixed(2);
    }

    function totalUnitsBought(){
        // return the not decremented units bought
        return totalOfUnitsBought.toFixed(2);
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
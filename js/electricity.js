function Electricity(boughtUnits, unitsAval, amountSpentForElectricity, takenAdvance) {
  let appliances = {
    Stove: 10.75,
    Kettle: 5.89,
    TV: 3.20,
    Fridge: 13.50,
  };

  let units = {
    10: 7,
    20: 14,
    50: 35,
    advance: 21,
  };

  let unitsAvailable = unitsAval || 0;
  let unitsBought = boughtUnits || 0;
  let totalAmount = amountSpentForElectricity || 0;
  
  let advanceGivenUnits = takenAdvance || 0;
  let advanceGiven = false;
  
  function topUpElectricity(topUpValue) {
    if (topUpValue === "advance") {
        totalAmount += 30;
        unitsAvailable += 21;
        advanceGivenUnits += 21;
        advanceGiven = true;
    }

    if (topUpValue !== "advance") {
      unitsAvailable += Number(units[topUpValue]);
      unitsBought += Number(units[topUpValue]);
      totalAmount += Number(Object.keys(units)[Object.keys(units).indexOf(topUpValue)]);
      
      while (unitsAvailable > 0 && advanceGivenUnits > 0) {
        unitsAvailable--;
        advanceGivenUnits--;
      };
    }
  }

  function getUnitsAvailable() {
    return unitsAvailable.toFixed(2);
  }

  function useAppliance(appliance) {
    if (unitsAvailable > appliances[appliance]) {
      unitsAvailable -= appliances[appliance];
      return;
    }

    unitsAvailable = 0;
  }

  function advanceTaken() {
    if (advanceGiven) return true;
    else return false;
  }
  
  function advanceUnits() {
    return advanceGivenUnits;
  };

  function totalAmountSpent() {
    return totalAmount.toFixed(2);
  }

  function totalUnitsBought() {
    return unitsBought.toFixed(2);
  }

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
    advanceUnits
  };
}

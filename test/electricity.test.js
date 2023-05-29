describe("The buy electricity app", function () {

    it("should return 0 if not topup made yet", function () {

        let electricity = Electricity();

        assert.equal(0, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity with 10", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(10);

        assert.equal(7, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity with 20", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(20);

        assert.equal(14, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity with 50", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(50);

        assert.equal(35, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity multiple times", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(20);
        electricity.topUpElectricity(10);
        electricity.topUpElectricity(50);
        electricity.topUpElectricity(20);

        assert.equal(73, electricity.getElectricity());
    })

    it("should not allow a user to take advance more than once without paying the balance", function () {

        let electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity('advance');

        assert.equal(21, electricity.getElectricity());
    })

    it("should allow a user to take advance and pay for the advance", function () {

        let electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(50);
        electricity.topUpElectricity('advance');

        assert.equal(35, electricity.getElectricity());
    })


    it("should allow a user to take advance and pay for the advance and use appliances", function () {

        let electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(20);

        // advanced ignored as you still owe R10
        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(20);

        electricity.useAppliance('Tv');

        // advanced is valid now
        electricity.topUpElectricity('advance');

        assert.equal(25, electricity.getElectricity());
    })

    it("should allow appliances usage", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(50);

        electricity.useAppliance('Tv');
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');

        assert.equal(electricity.getElectricity, 20);

    })

    it("should not allow appliance usage if not enough electricity", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(10);

        electricity.useAppliance('Tv');
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');
        electricity.useAppliance('Fridge');

        assert.equal(electricity.getElectricity, 0);

    })

    it("should not allow appliance usage if not enough electricity", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(10);

        electricity.useAppliance('Tv');

        // not enough electricity units (4 available)
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');

        electricity.topUpElectricity('advance');
        electricity.useAppliance('Fridge');
        electricity.useAppliance('Stove');

        assert.equal(electricity.getUnitsAvailable(), 2);

    })
})
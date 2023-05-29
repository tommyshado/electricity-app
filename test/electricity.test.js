describe("The buy electricity app", function () {

    it("should return 0 if not topup made yet", function () {

        const electricity = Electricity();

        assert.equal(0, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 10", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(10);

        assert.equal(7, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 20", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(20);

        assert.equal(14, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 50", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(50);

        assert.equal(35, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity multiple times", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(20);
        electricity.topUpElectricity(10);
        electricity.topUpElectricity(50);
        electricity.topUpElectricity(20);

        assert.equal(73, electricity.getUnitsAvailable());
    })

    it("should not allow a user to take advance more than once without paying the balance", function () {

        const electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity('advance');

        assert.equal(21, electricity.getUnitsAvailable());
    })

    it("should allow a user to take advance and pay for the advance", function () {

        const electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(50);
        electricity.topUpElectricity('advance');

        assert.equal(35, electricity.getUnitsAvailable());
    })


    it("should allow a user to take advance and pay for the advance and use appliances", function () {

        const electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(20);

        // advanced ignored as you still owe R10
        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(20);

        assert.isTrue(electricity.useAppliance('TV'));

        // advanced is valid now
        electricity.topUpElectricity('advance');

        assert.equal(25, electricity.getUnitsAvailable());
    })

    it("should allow appliances usage", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(50);
        assert.isTrue(electricity.useAppliance('TV'));
        assert.isTrue(electricity.useAppliance('Kettle'));

        assert.equal(20, electricity.getUnitsAvailable());

    })

    it("should not allow appliance usage if not enough electricity", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(10);

        assert.isTrue(electricity.useAppliance('TV'));
        assert.isFalse(electricity.useAppliance('Stove'));
        assert.isFalse(electricity.useAppliance('TV'));
        assert.isFalse(electricity.useAppliance('TV'));

        assert.equal(0, electricity.getUnitsAvailable());

    })

    it("should allow electricity usage after topping up with advance", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(10);
        assert.isTrue(electricity.useAppliance('TV'));

        // not enough electricity units (4 available)
        assert.isFalse(electricity.useAppliance('Stove'));
        assert.isFalse(electricity.useAppliance('Fridge'));
        assert.isFalse(electricity.useAppliance('Kettle'));

        electricity.topUpElectricity('advance');
        assert.isTrue(electricity.useAppliance('Fridge'));
        assert.isTrue(electricity.useAppliance('Stove'));

        assert.equal(2, electricity.getUnitsAvailable());

    })
})
describe("The buy electricity app", function () {

    it("should return 0 if not topup made yet", function () {

        const electricity = Electricity();

        assert.equal(0, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity with 10", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(10);

        assert.equal(7, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity with 20", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(20);

        assert.equal(14, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity with 50", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(50);

        assert.equal(35, electricity.getElectricity());
    })

    it("should allow a user to top-up electricity multiple times", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(20);
        electricity.topUpElectricity(10);
        electricity.topUpElectricity(50);
        electricity.topUpElectricity(20);

        assert.equal(73, electricity.getElectricity());
    })

    it("should not allow a user to take advance more than once without paying the balance", function () {

        const electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity('advance');

        assert.equal(21, electricity.getElectricity());
    })

    it("should allow a user to take advance and pay for the advance", function () {

        const electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(50);
        electricity.topUpElectricity('advance');

        assert.equal(35, electricity.getElectricity());
    })


    it("should allow a user to take advance and pay for the advance and use appliances", function () {

        const electricity = Electricity();

        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(20);

        // advanced ignored as you still owe R10
        electricity.topUpElectricity('advance');
        electricity.topUpElectricity(20);

        electricity.useAppliance('TV');

        // advanced is valid now
        electricity.topUpElectricity('advance');

        assert.equal(25, electricity.getElectricity());
    })

    it("should allow appliances usage", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(50);

        electricity.useAppliance('TV');
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');

        assert.equal(20, electricity.getElectricity());

    })

    it("should not allow appliance usage if not enough electricity", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(10);

        electricity.useAppliance('TV');
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');
        electricity.useAppliance('Fridge');

        assert.equal(0, electricity.getElectricity());

    })

    it("should allow electricity usage after topping up with advance", function () {

        const electricity = Electricity();

        electricity.topUpElectricity(10);

        electricity.useAppliance('TV');

        // not enough electricity units (4 available)
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');

        electricity.topUpElectricity('advance');
        electricity.useAppliance('Fridge');
        electricity.useAppliance('Stove');

        assert.equal(2, electricity.getElectricity());

    })
})
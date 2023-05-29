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

    // it("should get all the appliences", function () {

    //     let electricity = Electricity();

    //     assert.deepEqual(electricity.getAppliances(), [{

    //     }]);

    // })

    it("should allow appliences usage", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(50);

        electricity.useAppliance('Tv');
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');

        assert.equal(electricity.getElectricity, 20);

    })

    it("should not allow applience usage if not enough electricity", function () {

        let electricity = Electricity();

        electricity.topUpElectricity(10);

        electricity.useAppliance('Tv');
        electricity.useAppliance('Stove');
        electricity.useAppliance('Kettle');
        electricity.useAppliance('Fridge');

        assert.equal(electricity.getElectricity, 0);

    })
})
var DinnerPrintoutView = function (container, model) {

    this.getGoBackAndEditDinnerButton = function()
    {

        return container.find("#go-back-and-edit-dinner-button");
    }

    this.getContainer = function(){
        return container;
    }
};
 
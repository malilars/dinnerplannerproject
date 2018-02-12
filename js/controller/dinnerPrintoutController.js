var DinnerPrintoutController = function(dinnerPrintoutView, model, app) {

    dinnerPrintoutView.getGoBackAndEditDinnerButton().click(function(){
        app.goToSelectDish(dinnerPrintoutView.getContainer());

    });
};
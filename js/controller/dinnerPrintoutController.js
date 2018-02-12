var DinnerPrintoutController = function(dinnerPrintoutView, model, app) {


    dinnerPrintoutView.getGoBackAndEditDinnerButton().click(function(){
        app.goToSelectDish(dinnerPrintoutView.getContainer());

    });

    // denna finns inte i dinnerPrintOutView

/*     dinnerPrintoutView.getPrintFullRecipeButton().click(function(){
        app.goToFullRecipe($("#dinner-printout"));
    }); */

};
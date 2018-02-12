var DishDetailsController = function(view, model) {
    
    view.getAddToMenuButton().click(function(){
        var choosenDishId = $(this).attr('chosenDish');
        model.addDishToMenu(choosenDishId);
    });

    // When user press "add to menu" we want to update the model
   // view.on('click', '#addToMenuButton', function() {

  //      var chosenDishId = $(this).attr("chosenDish");
   //     model.addDishToMenu(chosenDishId);

  //  });




}
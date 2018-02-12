var SelectDishController = function(selectDishView, model) {

    model.addObserver(selectDishView);

    selectDishView.getSearchDinnerButton().click(function(){
        var dishType = $('#dish-type').val();
        //search for the dishes with the dishtype
        var dishes = model.getAllDishes(dishType);
        //update the view
        selectDishView.updateListOfDishes(dishes);
    });


};
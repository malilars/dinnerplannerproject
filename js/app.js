
$(function() {

    "use strict";
    ;
    var model = new DinnerModel();

    model.addDishToMenu(1);


    // Containers
    var selectDishContainer = $("#select-dish");
    var dinnerMenuContainer = $("#dinner-menu");
    var dishDetailsContainer = $("#dish-details");
    var dinnerOverViewContainer = $("#dinner-overview");
    var dinnerPrintoutContainer = $("#dinner-printout");
    var homeViewContainer = $("#dinner-home");


    // Views
    var homeView = new HomeView(homeViewContainer);
    var selectDishView = new SelectDishView(selectDishContainer, model);
    var dinnerMenuView = new DinnerMenuView(dinnerMenuContainer, model);
    var dishDetailsView = new DishDetailsView(dishDetailsContainer, model);
    var dinnerOverviewView = new DinnerOverviewView(dinnerOverViewContainer, model);
    var dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintoutContainer, model);

    // Controllers
    //SKa inte dessa få vyer? De heter vy i controllern
    var menuViewController = new MenuViewController(dinnerMenuContainer, model);
    var selectDishViewController = new SelectDishViewController(selectDishContainer, model);

    var dishDetailsController = new DishDetailsController(dishDetailsView, model);


    // Init home view;
    // Since we're only going to do this once, I skipped making an entire controller
    initHomeView()

    function initHomeView() {

        dinnerMenuContainer.hide();
        selectDishContainer.hide();
        dishDetailsContainer.hide();
        dinnerOverViewContainer.hide();
        dinnerPrintoutContainer.hide();

    }

    // Move from homeView to selectdishView
    $('body').on('click', '#createNewDinnerButton', function () {
        homeViewContainer.hide();
        dinnerMenuContainer.show();
        selectDishContainer.show();
    });

var a = "hej";

    // Move from selectDishView to dishDetailsView
    $('body').on('click','.thumbnail',function(){
        var dishId = $(this).attr("id");
        selectDishContainer.hide();
        dishDetailsContainer.show();
        dishDetailsView.initDish(dishDetailsContainer, model, dishId);
    });

    // Move from dishDetailsView to selectDishView
    $('body').on('click','#backToSearchViewButton',function(){
        selectDishContainer.show();
        dishDetailsContainer.hide();
    });

    // Move to dinnerOverviewView (always from Dinner Menu container)
    $('body').on('click','#confirmDinnerButton',function() {

        selectDishContainer.hide();
        dinnerMenuContainer.hide();
        dishDetailsContainer.hide();
        dinnerOverViewContainer.show();
    });

    // When the button "go back and edit dinner" is clicked we go back
    // to "select dinner view"
    $('body').on('click', '#goBackEditDinnerButton', function(){

        dinnerOverViewContainer.hide();
        dinnerMenuContainer.show();
        selectDishContainer.show()
    });

    //Dinner print out
    $('body').on('click', '#printFullRecipeButton', function(){
        dinnerOverViewContainer.hide();
        dinnerPrintoutContainer.show();

    });


});
$(function() {
	//We instantiate our model
	var model = new DinnerModel();

    //Create the views
    var selectDishView = new SelectDishView(selectDishElement = $("#select-dish"), model);
    var dinnerMenuView = new DinnerMenuView(dinnerMenuElement = $("#dinner-menu"), model);
    var dinnerOverviewView = new DinnerOverviewView(dinnerOverviewElement = $("#dinner-overview"), model);
    var dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintoutElement = $("#dinner-printout"), model);
    var homeView = new HomeView(homeElement = $("#home"), model);
    var dishDetailsView = new DishDetailsView(dishDetailsElement = $("#dish-details"), model);

    //start with showing the home view
    homeElement.show();
    //dinnerOverviewElement.show();


    //Create the controllers
    var homeController = new HomeController(homeView, model, this);
    var selectDishController = new SelectDishController(selectDishView, model);
    var menuViewController = new MenuViewController(dinnerMenuView, model);
    
    
    var dishDetailController = new DishDetailController(dishDetailsView, model, this);
    var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model, this);
    var dinnerPrintoutController = new DinnerPrintoutController(dinnerPrintoutView, model, this);
    
    selectDishView.bindClickOnThumbnail(function() {
        //fetch the id of the dish
        //change view to dish details with the given id
        selectDishElement.hide();   
        dishDetailsElement.show();
        dishDetailsView.updateDishDetails($(this).attr('data-dish-id'));
        
    })

    this.goToSelectDish = function(viewElement){

        viewElement.hide();
        selectDishElement.show();
        dinnerMenuElement.show();

    }

    this.goToFullRecipe = function(){
        dinnerOverviewElement.hide();
        dinnerPrintoutElement.show();
    }




	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */



});
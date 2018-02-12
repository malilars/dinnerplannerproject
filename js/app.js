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

    //Create the controllers
    var homeController = new HomeController(homeView, model);
    var selectDishController = new SelectDishController(selectDishView, model);

    selectDishView.bindClickOnThumbnail(function() {
        //fetch the id of the dish
        //change view to dish details with the given id
        $('#select-dish').hide();   
        $('#dish-details').show();
        dishDetailsView.updateDishDetails($(this).attr('data-dish-id'));
        
    })

    model.addObserver(dishDetailsView);
    model.addObserver(dinnerMenuView);

    var a  ="hej";


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */



});
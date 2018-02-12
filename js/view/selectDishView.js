/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var SelectDishView = function (container, model) {

    searchResults = container.find("#searchResults");

    //Initialise the view
    dishes = model.getAllDishes("starter");
    this.updateListOfDishes = function(dishes)
    {
        searchResults.empty();
        dishes.forEach(function(dish) {
            //Create the column
            var contents = $("<div></div>")
                .addClass('col-md-3')
                .append(
                    //create the thumbnail (small image that represents a larger image)
                    $("<div></div>")
                        .addClass('thumbnail')
                        .attr('data-dish-id', dish.id)
                        .append(
                            //Create the image
                            $("<img/>")
                                .addClass('img')
                                .addClass('img-responsive')
                                .attr('src', 'images/' + dish.image)
                        )
                        .append(
                            //Create the caption
                            $("<div></div>")
                                .addClass('caption')
                                .append(
                                    $("<p></p>").text(dish.name)
                                )
                        )
                );
    
            searchResults.append(contents);
        });
    };

    this.updateListOfDishes(dishes);

    this.getSearchDinnerButton = function()
    {
        return container.find("#search-dinner-button");
    };

    //We can not return element and run .click() from controller
    //since the elements we create dynamically will not be selected...
    //instead we bind event callbacks from here, so that controller
    //can add whatever he wants for the click event.
    this.bindClickOnThumbnail = function(callback)
    {
        return container.on("click", ".thumbnail", callback);
    };
    

    //To be run when the model changes
    this.update = function(model)
    {

    };

};
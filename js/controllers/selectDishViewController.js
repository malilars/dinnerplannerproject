

var SelectDishViewController = function(view, model) {


    //TODO: Implement listener for click on the images

    var searchButton = view.find("#submitButton");

    // When user presses "Search" we will take out the input and display the chosen dishes
    searchButton.click(function(){

        // text
        var filter = view.find("#searchInput").val();

        // dessert or main course
        var type = view.find("#optionsInput").find(":selected").val();

        displaySearchResult(type, filter);
    });


    // We create figure-html objects and append them to searchResult
    function displaySearchResult(type, filter){

        // The container where we put the result
        var searchResultContainer = view.find("#searchResults");

        // Empty the old result
        searchResultContainer.empty();


        model.getAllDishes(type,filter).forEach(function (dish){
            //Create the column
            var contents = $("<div></div>")
                .addClass('col-md-3')
                .append(
                    //create the thumbnail
                    $("<div></div>")
                        .addClass('thumbnail')
                        .attr("id", dish.id)
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

            searchResultContainer.append(contents);
        });


    }


};
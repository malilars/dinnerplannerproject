var DinnerOverviewView = function(container, model) {
    // TODO, fix update

    "use strict";

    model.addObserver(this);
    updateDinnerOverview();
    

    function updateDinnerOverview() {

        var dishesOverview = container.find("#dishes-overview")
        dishesOverview.empty();
        var numberOfGuest = model.getNumberOfGuests();
        
        console.log(numberOfGuest);
        /*
        var headerDiv = $("<div/>")
            .attr("class", "row")
            .append(
                $("<div/>")
                .attr("class", "col-md-6")
                .append(
                    $("<h1/>")
                    .text("My dinner: " + numberOfGuest + " people")))
                    
            .append(
                $("<div/>")
                .attr("class", "col-md-6 text-right")
                .append(
                    $("<button/>")
                    .attr("class", "btn btn-info")
                    .attr("id", "goBackEditDinnerButton")
                    .text("Go back and edit dinner")))
            .append("<hr/>");
                    **/
        var selectedDishes = model.getFullMenu();

        var selectedDishesDivCol = $("<div/>").attr("class", "col-md-8");

        var selectedDishesDivRow = $("<div/>").attr("class", "row");

        selectedDishes.forEach(function(dish) {


            /*      <figure class="figure">
                          <img src="..." class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                          <figcaption class="figure-caption">A caption for the above image.</figcaption>
                      </figure>
                      */

            var totDishPrice = model.getTotalDishPrice(dish) * model.getNumberOfGuests();

            var dishDiv = $("<div/>")
                .attr("class", "col-md-3")
                .append(
                    $("<figure/>")
                    .attr("class", "figure")
                    .append($("<img/>")
                        .attr("class", "img img-responsive")
                        .attr('data-dish-id', dish.image))
                        .append(
                            //Create the image
                            $("<img/>")
                                .addClass('img')
                                .addClass('img-responsive')
                                .attr('src', 'images/' + dish.image)
                        )
                    .append(
                        $("<figcaption/>")
                        .attr("class", "figure-caption")
                        .text(dish.name)))
                .append(
                    $("<p/>").text(totDishPrice + " SEK"));

            selectedDishesDivRow.append(dishDiv);
        });

        selectedDishesDivRow.append(
            $("<div/>")
            .attr("class", "col-md-4")
            .append(
                $("<h3/>").text("Total"))
            .append(
                $("<p/>")
                .text(model.getTotalMenuPrice() + " SEK")));

        selectedDishesDivCol.append(selectedDishesDivRow);
        /*        
        var lowerDiv = $("<div/>")
            .attr("class", "row")
            .append(
                $("<div/>")
                .attr("class", "col-md-12 text-center")
                .append(
                    $("<button/>")
                    .attr("class", "btn btn-primary")
                    .attr("id", "printFullRecipeButton")
                    .text("Print Full Recipe")));
                    */
        dishesOverview.append(selectedDishesDivCol);

    }

    // evoked when notifyObservers in model is called
    this.update = function() {
        updateDinnerOverview();
        alert("update dinnerOverviewView");
    }

    this.getContainer = function(){
        return container;
    }

    this.getPrintFullRecipeButton = function(){
        return container.find('#full-recipe-button');
    }

    this.getGoBackEditDinnerButton = function()
    {
        return container.find("#go-back-edit-dinner-button");
    }

};
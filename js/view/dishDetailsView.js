var DishDetailsView = function(container, model) {
    "use strict";
    model.addObserver(this);

    // This function create all html-components for dishDetails
    this.initDish = function(container, model, dishId) {

        // empty the old container
        container.empty();

        var dish = model.getDish(dishId);

        var numberOfGuests = model.getNumberOfGuests();
        var totDishCost = 0;

        var colDivOne = $("<div/>")
            .attr("class", "col-md-6")
                .append(
                    $("<h2/>")
                        .text(dish.name))
                        .append(
                            $("<img/>")
                                .attr("src", "images/" + dish.image)
                                .attr("class", "img img-responsive"))
                                .append(
                                    $("<p/>")
                                        .text(dish.description))
                                        .append(
                                            $("<button/>")
                                                .attr("id", "backToSearchViewButton")
                                                .attr("class", "btn btn-info")
                                                .text("Back to search")
                                            ).append(
                                                $("<h2/>").text("PREPARATION")
                                            ).append(
                                                $("<p/>").text(dish.description)
                                            );


        var ingridTable = $("<table/>").attr("class", "table").append("<tbody>");

        dish.ingredients.forEach(function(ingridient){

            var totQuant = ingridient.quantity * numberOfGuests;
            var totCost = ingridient.price * numberOfGuests;

            totDishCost += totCost;

            var tr = $("<tr/>")
            .append(
                $("<td/>")
                    .text(totQuant + " "+ ingridient.unit))
                    .append(
                        $("<td/>")
                            .text(ingridient.name))
                            .append(
                                $("<td/>")
                                    .text("SEK"))
                                    .append(
                                        $("<td/>")
                                            .text(totCost));

            ingridTable.append(tr);
        });

        ingridTable.append("</thead>")
            .append(
                $("<tfoot/>")
                    .append($("<tr/>")
                    .append(
                        $("<th/>")
                            .attr("colspan", "2")
                            .append(
                                $("<button/>")
                                    .attr("chosenDish",dishId)
                                    .attr("id", "addToMenuButton")
                                    .attr("class", "btn btn-primary")
                                    .text("Add to menu")))
                                    .append(
                                        $("<th/>")
                                            .text("SEK"))
                                            .append(
                                                $("<th/>")
                                                    .text(totDishCost))));


        var colDivTwo = $("<div/>")
            .attr("class", "col-md-6")
            .append(
                $("<div/>")
                    .attr("class", "panel panel-default")
                    .append(
                        $("<div/>")
                            .attr("class", "panel-heading")
                            .text("Ingridients for " + numberOfGuests + " people"))
                            .append(
                                $("<div/>")
                                    .attr("class", "panel-body")
                                    .append(ingridTable)
            )
        );

        var mainDiv = $("<div/>")
            .attr("class", "row")
            .append(colDivOne)
            .append(colDivTwo);

        container.append(mainDiv);
    }

    // evoked when notifyObservers in model is called
    this.update = function (){
        alert("update dishDetailsView");
    }

    //This is not working, since it is called BEFORE the element is created.
    //We should just create the elements in HTML...
    this.getAddToMenuButton = function(){
        var addToMenuButton = container.find('#addToMenuButton');
        return addToMenuButton;
    }
};
 

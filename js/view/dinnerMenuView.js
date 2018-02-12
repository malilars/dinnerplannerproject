var DinnerMenuView = function (container, model) {

    "use strict";

    model.addObserver(this);
    function updateTable()
    {
 
        // find the table
        var tbody = container.find("#fullMenuTable tbody");

        // empty the old data
        tbody.empty();

        var totalMenuPrice = model.getTotalMenuPrice();

        var numberOfGuest = model.getNumberOfGuests();

        // loop over model.getFullMenu() and for each dish add it to the table
        model.getFullMenu().forEach(function(dish) {

            //3. add a row to the table
            tbody.append(
                $("<tr/>")
                    .append(
                        $('<td/>').text(dish.name)
                    ).append(
                        $('<td/>').text(numberOfGuest * model.getTotalDishPrice(dish))
                    )
            );
        });


        // update the footer
        var totalPriceContainer = container.find("#currentTotalPrice");
        totalPriceContainer.empty();
        totalPriceContainer.text("SEK " + totalMenuPrice);


        
        //4. Update the total (förslagsvis genom att ha en <span id="totalSomething"> och uppdatera text() på den)

    };

    this.getContainer = function(){
        return container;
    }

    // evoked when notifyObservers in model is called
    this.update = function()
    {
       updateTable();
       
       if(model.getFullMenu().lenght != 0){
            container.find("#confirm-dinner-button").prop('disabled', false);
       };
       
    };

    this.getConfirmDinnerButton = function(){

        return container.find("#confirm-dinner-button");
    }

    this.getSelectBox = function(){
        return container.find("#numberOfGuests");
    }

};
var DinnerMenuView = function (container, model) {

    this.updateTable = function()
    {
        //1 find the table = (container.find("#id-if-table"))
        var tbody = container.find("#fullMenuTable tbody");
        var totalMenuPrice = 0
        //2. loop over model.getFullMenu() and for each:
        model.getFullMenu().forEach(function(row) {

            //3. add a row to the table
            tbody.append(
                $("<tr/>")
                    .append(
                        $('<td/>').text(row.name)
                    ).append(
                        $('<td/>').text(model.getNumberOfGuests())
                    )
            );
        });


        //4. Update the total (förslagsvis genom att ha en <span id="totalSomething"> och uppdatera text() på den)

    };

    this.updateTable();

    // evoked when notifyObservers in model is called
    this.update = function()
    {
        updateTable();
    };

    var selectBox = container.find("#numberOfGuests");

    selectBox.val(model.getNumberOfGuests());


    //when we change the select box
    selectBox.change(function() {
        //we must update the model
        model.setNumberOfGuests(
            selectBox.val()
        );
    });
};
 

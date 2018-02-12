

var DinnerMenuView = function(container, model) {

    "use strict";
    model.addObserver(this);

    initView(container);

    function initView(container){

        var header = $("<div/>").text("My Dinner");

        // add <hr/>

        var formDiv = $("<div/>")
            .attr("class", "form-group").append(
                $("<label/>").attr("for", "numberOfGuests").text("Number of people")).append(
                    $("<select/>")
                    .attr("class", "form-control")
                    .attr("name", "numberOfGuests")
                    .attr("id", "numberOfGuests")
                    .append('<option value="1">1</option>')
                    .append('<option value="2">2</option>')
                    .append('<option value="3">3</option>'));


        var table = $("<table/>").attr("class", "table");
        var thead = $("<thead/>").append("<tr><th>Dish Name</th><th>Cost</th></tr>");

        var confirmButton = $("<button/>")
            .attr("class", "btn btn-success btn-block")
            .attr("id", "confirmDinnerButton")
            .text("Confirm dinner");

        container.append(header);
        container.append("<hr/>");

        // formDiv.append(label).append(select);

        container.append(formDiv);

        table.append(thead);
        container.append(table);
        container.append(confirmButton);


    }

    // evoked when notifyObservers in model is called
    this.update = function (){
        alert("update dinnerMenuView");
    }

};




var SelectDishView = function (container, model) {

    "use strict";
    initView(container);

    function initView(container){

        var mainDiv = $("<div/>").attr("class", "row");

        var columnDiv = $("<div/>").attr("class", "col-md-12").append($("<h3/>").text("FIND A DISH:"));

        var forminline = $("<div/>").attr("class", "form-inline");

        var formInput = $("<div/>").attr("class", "form-group").append(
            $("<input/>").attr("id", "searchInput")
            .attr("type", "text")
            .attr("class", "form-control")
            .attr("placeholder", "Enter Keywords"));

        var formOptions = $("<div/>").attr("class", "form-group").append(
            $("<select/>").attr("id", "optionsInput").attr("class", "form-control").append('<option value="starter">Förrätt</option><option value="main dish">Huvudrätt</option><option value="dessert">Efterrätt</option>'));

        var formButton = $("<div/>").attr("class", "form-group").append(
            $("<button/>").attr("class", "btn btn-primary").text("Search").attr("id", "submitButton"));

        container.append(
            mainDiv.append(
                columnDiv.append(
                    forminline.append(formInput).append(formOptions).append(formButton))));

        container.append(
            $("<div/>").attr("class", "row").attr("id", "searchResults"));
    }


};
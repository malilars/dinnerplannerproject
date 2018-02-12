var DinnerPrintoutView = function (container, model) {

    "use strict";
    model.addObserver(this);
    initView(container,model);

    function initView(container,model){


        model.getFullMenu().forEach(function(dish){

            var dishDiv = $("<div/>").attr("class", "row");

            var imgDiv = $("<div/>")
                .attr("class", "col-md-2")
                .append(
                    $("<img/>")
                        .attr("src", dish.image)
                        .attr("class", "img img-responsive"));

            var descDiv = $("<div/>")
                .attr("class", "col-md-4")
                .append(
                    $("<h2/>")
                        .text(dish.name))
                        .append(
                            $("<p/>")
                                .text(dish.description));

            var prepDiv = $("<div/>")
                .attr("class", "col-md-6")
                    .append(
                        $("<h3/>")
                            .text("Preparation"))
                            .append(
                                $("<p/>")
                                    .text(dish.description));


            dishDiv.append(imgDiv).append(descDiv).append(prepDiv);
            container.append(dishDiv);
        });

    }

    // evoked when notifyObservers in model is called
    this.update = function (){
        alert("update printOutView");
    }



};

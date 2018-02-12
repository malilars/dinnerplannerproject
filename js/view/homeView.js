var HomeView = function (container) {

	"use strict";

	initView(container);

	function initView(container){

		container.append($("<div/>").addClass("row").
			append($("<div/>").addClass("col-md-12").
				append($("<p/>").addClass("text-center").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, non, saepe. Asperiores at consequuntur corporis dignissimos esse" +
			", facilis fuga incidunt magnam natus nobis omnis quas quasi rerum unde voluptates! Quia.")))
			.append($("<div/>").addClass("col-md-12 text-center")
				.append($("<button/>").addClass("btn btn-primary").attr("id", "createNewDinnerButton").text("Create new dinner"))));
	}

};
 

var MenuViewController = function(view, model) {

        var selectForm = view.find($("Select"));

        // This will handle the change of numberofguest- select - form
        selectForm.change(function(){
            var numberOfGuests = selectForm.find(":selected").text();
            model.setNumberOfGuests(numberOfGuests);
        });


};
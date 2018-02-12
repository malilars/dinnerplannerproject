var MenuViewController = function(view, model) {


    // This will handle the change of numberofguest- select - form
    view.getSelectBox().change(function(){
        alert("Körs det här?");
        var numberOfGuests = $(this).find(":selected").text();
        model.setNumberOfGuests(numberOfGuests);
    });

 /** 
    view.getConfirmDinnerButton().click(function(){

        // TODO, tell generalstatecontroller to move
    })
*/

};
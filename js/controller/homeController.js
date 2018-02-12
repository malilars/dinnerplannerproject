var HomeController = function(homeView, model) {

    homeView.getCreateDinnerButton().click(function(){

        $('#home').hide();
        $('#dinner-menu').show();
        $('#select-dish').show();

    });

};
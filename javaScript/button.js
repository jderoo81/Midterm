

//menu button
var menuButton = document.getElementById("menu_button");

menuButton.addEventListener("click", function(){

    var dropDownMenu = document.getElementById("navMenu_list");

    if(dropDownMenu.style.display == "none"){

        dropDownMenu.style.display = "block";
    }
    else{
        dropDownMenu.style.display = "none"
    }

});

$(function() {
    // Creating an array
    var toBuyList = [
        "Buy Apples 🍏",
        "Buy Oranges 🍊",
        "Buy Kiwis 🥝",
        "Buy Pineapples 🍍",
        "Buy Strawberries 🍓",
        "Buy Lemons 🍋",
    ];

    for (var i = 0; i < toBuyList.length; i++) {
        // Cloning the template div
        var template = $(".template li").clone();
        // Adding info to the template div
        template.prepend(toBuyList[i]);
        // Adding template div to the list
        $(".to-buy-list").append(template);
    }
    
    // Enabling deletion from the list by clicking on "X"
    $(".to-buy-list").on("click", ".delete", function() {
        $(this).parent().remove();
    }); 

    // Adding elements to the list via input
    $("#add-item").keydown(function(event) {
        if (event.which == 13) {
            var item = $(this).val();
            
            if (item != "") {
                // Cloning the template div
                var template = $(".template li").clone();
                // Adding info to the template div
                template.prepend(item);
                // Adding template div to the list
                $(".to-buy-list").append(template);
                $(this).val("");
            }
        }               
    });
});
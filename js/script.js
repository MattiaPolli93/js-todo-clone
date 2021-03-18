$(function() {
    // Creating an array
    var toDoList = [
        "Buy Apples 🍏",
        "Buy Oranges 🍊",
        "Buy Kiwis 🥝",
        "Buy Pineapples 🍍",
        "Buy Strawberries 🍓",
        "Buy Lemons 🍋",
    ];

    for (var i = 0; i < toDoList.length; i++) {
        // Cloning the template div
        var template = $(".template li").clone();
        // Adding info to the template div
        template.prepend(toDoList[i]);
        // Adding template div to the list
        $(".to-do-list").append(template);
    }
});
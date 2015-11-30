function calculate() {
    var number = prompt("Enter a decimal number");
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }

    
    var result = (+number).toString(16).toUpperCase();
    alert(result);
}
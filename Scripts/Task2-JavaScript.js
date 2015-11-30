
function circleArea() {
    var radius = prompt("Please enter the radius" );
    if (radius != null) {
        document.getElementById("demo").innerHTML =
        "Radius ="+ radius + " Area =" + Math.PI * Math.pow(radius, 2);
    }
}
function getMouseCordenadas(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("idInfoX").innerHTML = e.clientX;
    document.getElementById("idInfoY").innerHTML = e.clientY;
}
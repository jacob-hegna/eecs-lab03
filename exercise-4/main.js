let rgb = function(r, g, b) {
  return "rgb("+r+","+g+","+b+")";
}


var change_colors = function() {
    let bd_r = document.getElementById("border_r").value;
    let bd_g = document.getElementById("border_g").value;
    let bd_b = document.getElementById("border_b").value;
    let bd_w = document.getElementById("border_w").value;

    let bg_r = document.getElementById("background_r").value;
    let bg_g = document.getElementById("background_g").value;
    let bg_b = document.getElementById("background_b").value;

    let text = document.getElementById("dummy-text");

    text.style.borderColor     = rgb(bd_r, bd_g, bd_b);
    text.style.backgroundColor = rgb(bg_r, bg_g, bg_b);
};
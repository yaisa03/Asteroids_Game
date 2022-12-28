window.gui = new Gui/* instance of the gui class */

window.onload = function() {
    console.log("loading...")
}

window.onresize = function() {
    console.log("resizing...")
    window.gui.resize();
}
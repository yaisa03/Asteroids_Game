class Gui { /* all user interface actions and run the game look */

    constructor() { /* variables  */
        this.cnv = null; /* canvas */
        this.ctx = null; /* context */
        this.resources = null;
        this.resourcesToLoad = 0;
    }

    resize() { /* resizes the canvas to the webpage size */
        if (this.cnv) {
            this.cnv.width = window.innerWidth;
            this.cnv.height = window.innerHeight;
        }
    }

    prepareCanvas() { /* sets contex object */
        this.cnv = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        this.resize();
    }

    toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? "block" : "none";
        element.style.display = display;
    }

    closeAllScreens() { /* hides all the elemnst with the screen class */
        let elements = document.querySelectorAll(".screen");
        [...elements].forEach( e => {
            e.style.display = "none";
        })
    }

    showScreen(id) {
        this.closeAllScreens(); /* closes all */
        this.toggleScreen(id, true); /* shows the specified screen */
    }
}
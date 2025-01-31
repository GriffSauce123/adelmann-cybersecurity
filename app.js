const caret = document.getElementById("down-caret");

caret.addEventListener("click", () => {
    window.scroll({
        top: 25000, 
        left: 0, 
        behavior: 'smooth' 
      });
    console.log("penis")
})
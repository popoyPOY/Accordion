let container = document.querySelectorAll(".container")

container.forEach((container) => {
     container.addEventListener("click", () => {
          
          //var click = container.children[1].children[0].style.display = "block";

          if (container.children[1].children[0].style.display == "none") {
               container.children[1].children[0].style.display = "block";
          }
          else {
               container.children[1].children[0].style.display = "none";
          }
     })
})
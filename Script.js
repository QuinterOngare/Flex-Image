const Panels = document.querySelectorAll('.panel')

Panels.forEach(function(card) {
    card.addEventListener("click", function() {
removeActiveClasses()
card.classList.add('active')
    })
 } )

 function removeActiveClasses() {
     Panels.forEach(function(card) {
         card.classList.remove('active')
     }
     )
 }

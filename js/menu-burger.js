// Ici une condition ternaire

// function handleMenu(value) {
//     value === true
//     ? (openBtn.classList.add('inactive'), closeBtn.classList.remove('inactive'))
//     : (openBtn.classList.remove('inactive'), closeBtn.classList.add('inactive'))
// }

//  ********************************************************************************************      //

// Ici une boucle switch qui permet de verifier dans N cas

// function handleMenu(value) {
//     switch (value) {
//         case true:
//             openBtn.classList.add('inactive')
//             closeBtn.classList.remove('inactive')
//             break
//         case false:
//             closeBtn.classList.add('inactive')
//             openBtn.classList.remove('inactive')
//             break
//     }
// }

//  ********************************************************************************************      //

function handleMenu(value) {
  if (value === true) {
    openBtn.classList.add('inactive')
    closeBtn.classList.remove('inactive')
    navMenuBurger.classList.remove('inactive')
    mainContent.classList.add('inactive')
  } else {
    closeBtn.classList.add('inactive')
    openBtn.classList.remove('inactive')
    navMenuBurger.classList.add('inactive')
    mainContent.classList.remove('inactive')
  }
}

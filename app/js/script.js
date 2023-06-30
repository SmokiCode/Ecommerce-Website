const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const shut = document.getElementById('close');

/*bar.addEventListener('click', () => {
    nav.classList.toggle('active');
})
*/

//To click on the icon to show the nav
bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
//To click on the icon to remove the nav
  shut.addEventListener('click', () => {
    nav.classList.remove('active');
  });




 
//console.log('hello world');

const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener('click', function() {
  console.log("open Hamburger");

  if (btnHamburger.classList.contains('open')) {
      btnHamburger.classList.remove('open');
  } else {
    btnHamburger.classList.add('open');
  }
)
});

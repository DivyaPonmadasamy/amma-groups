const header = document.querySelector('.header');
const icons_block = document.querySelector('.icons-block');

window.addEventListener('scroll', () => {
  if (window.scrollY > 65) {
    icons_block.classList.add('scrolled');
    header.classList.add('scrolled');
  } else {
    icons_block.classList.remove('scrolled');
    header.classList.remove('scrolled');
  }
});

// if (window.matchMedia("(max-width: 480px)").matches) {}

// function handleScroll() {
//   if (window.matchMedia("(max-width: 480px)").matches) {
//     if (window.scrollY > 0) {
//       icons_block.classList.add('scrolled');
//       header.classList.add('scrolled');
//     } else {
//       icons_block.classList.remove('scrolled');
//       header.classList.remove('scrolled');
//     }
//   } else {
//     if (window.scrollY > 65) {
//       icons_block.classList.add('scrolled');
//       header.classList.add('scrolled');
//     } else {
//       icons_block.classList.remove('scrolled');
//       header.classList.remove('scrolled');
//     }
//   }
// }

// window.addEventListener('load', handleScroll);
// window.addEventListener('scroll', handleScroll);
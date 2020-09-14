// window.addEventListener('scroll', (e) => {
//   currentScrollPost = window.scrollY;
//   console.log('e', last_known_scroll_position)
//   // if (!ticking) {
//   //   window.requestAnimationFrame(function() {
//   //     doSomething(last_known_scroll_position);
//   //     ticking = false;
//   //   });

//   //   ticking = true;
//   // }
// });

function copyEmail() {
  const email = 'brian.parrish3739@gmail.com'
  const el = document.createElement('textarea');
  el.value = email;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function onScrollButtonClicked() {
  console.log('click');
  const section = document.getElementById('employment-history');
  section.scrollIntoView({ behavior: 'smooth' });
}
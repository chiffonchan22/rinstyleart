window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 40) { // 300pxスクロールしたら切り替え
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

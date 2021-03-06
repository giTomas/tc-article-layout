const Scroll = (function(){
  //config
  const btn             = document.getElementById('js-btn-scrolltop');
  const article         = document.getElementById('js-article');
  const banner          = document.getElementById('js-banner');
  // const distanceFromTop = article.offsetTop;


  // function with GSAP -> scroll to top

  //Handlers
  const scrollDownHandler = () => TweenMax.to(window, 0.22, {scrollTo: article.offsetTop});
  const scrollUpHandler = () =>  TweenLite.to(window, 0.22, {scrollTo: article.offsetTop});

  //event listener
  const scrollUpListener   = btn.addEventListener('click', scrollUpHandler, false);
  const scrollDownListener = banner.addEventListener('click', scrollDownHandler, false);

  //closeListener

  return {
    listeners: [
                scrollUpListener,
                scrollDownListener
              ]
  };

})();

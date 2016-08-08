const Scroll = (function(){
  //config
  const btn             = document.getElementById('js-btn-scrolltop');
  const article         = document.getElementById('js-article');
  const banner          = document.getElementById('js-banner');
  const imgs            = document.querySelectorAll('.js-img-resize');
  // const figure          = document.querySelectorAll('.js-figure');
  // const js              = document.querySelectorAll('.js');
  // const coords          = figure[0].getBoundingClientRect();
  const coords          = imgs[0].getBoundingClientRect();
  const distanceFromTop = article.offsetTop;


  // function with GSAP -> scroll to top
  //Handlers (close, open)
  const imgResizeHandler = (e) => {
    const src    = e.currentTarget;
    const coords = src.getBoundingClientRect();
    const url = src.dataset.url;
    console.log(coords);
    // console.log(e.clientY);
    // console.log(src);
    // console.log(url);

  };


  //event listener
  const scrollUpListener   = btn.addEventListener('click', (e) => console.log(e), false);
  const scrollDownListener = banner.addEventListener('click', (e) => console.log(e), false);
  const imgsListeners      = () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', imgResizeHandler, false);
    }
  };
  //closeListener

  return {
    // log: console.log(distanceFromTop),
    // log2: console.log(imgs),
    // log3: console.log(coords),
    // log4: console.log(coords2),
    listeners: [
                scrollUpListener,
                scrollDownListener,
                imgsListeners()
              ]
  };

})();

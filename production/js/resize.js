const Resize = (function(){
  const imgs     = document.querySelectorAll('.js-img-resize');
  const tl       = new TimelineLite();
  const modal    = document.getElementById('js-modal');
  const modalImg = document.getElementById('js-modal-img');
  // const figure          = document.querySelectorAll('.js-figure');
  // const js              = document.querySelectorAll('.js');
  // const coords          = figure[0].getBoundingClientRect();
  // const coords          = imgs[0].getBoundingClientRect();

  const imgResizeHandler = (e) => {
    const src    = e.currentTarget;
    const url    = src.dataset.url;
    const img    = src.parentNode.firstChild;
    const coords = img.getBoundingClientRect();

    let params =  {
        initialScale: Math.round((coords.width / img.naturalWidth) * 10000) / 10000,
        left: coords.width / 2  + coords.left,
        top: coords.height / 2 + coords.top,
        x: coords.left,
        y: coords.top
      };
    // console.log(params);
    modalImg.setAttribute('src', url);
    console.log(params);

    tl.to(modal, 0, {display: "block", backgroundColor: "rgba(0, 0, 0, 0)"})
      .from('#js-modal-img', 0.5, {scale: params.initialScale, top: params.top, left: params.left, force3D:true})
      .to(modal, 0.5, {backgroundColor: "rgba(0, 0, 0, 0.85)", force3D:true}, '-=0.5')
  };

  const closeHandler = () => {
    tl.to(modal, 0, {clearProps: 'all'})
      .to('#js-modal-img', 0, {clearProps: 'all'});
    // modalImg.removeAttribute('style');
    modalImg.removeAttribute('src');
  }

  const imgsListeners = () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', imgResizeHandler, false);
    }
  };

  const modalListener = modal.addEventListener('click', closeHandler, false);

  return {
    // log: console.log(distanceFromTop),
    // log2: console.log(imgs),
    // log3: console.log(coords),
    // log4: console.log(coords2),
    listeners: [
                imgsListeners(),
                modalListener
              ]
  };

})();

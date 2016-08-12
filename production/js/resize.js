
const Resize = (function(){
  const imgs     = document.querySelectorAll('.js-img-resize');
  const all      = document.querySelectorAll('img');
  const tl       = new TimelineLite();
  const modal    = document.getElementById('js-modal');
  const modalImg = document.getElementById('js-modal-img');
  const w        = {
      wHeight: window.innerHeight,
      wWidth : window.innerWidth
    };
  let params = {};

  // const figure          = document.querySelectorAll('.js-figure');
  // const js              = document.querySelectorAll('.js');
  // const coords          = figure[0].getBoundingClientRect();
  // const coords          = imgs[0].getBoundingClientRect();

  const imgResizeHandler = (e) => {
    const src      = e.currentTarget;
    const url      = src.dataset.url;
    const img      = src.parentNode.firstChild;
    const coords   = img.getBoundingClientRect();
    const modalImg = document.getElementById('js-modal-img');
    const param1   = Math.round((coords.width / img.naturalWidth) * 10000) / 10000;
    const param2   = coords.width / 2  + coords.left;
    const param3   = coords.height / 2 + coords.top;
          params   = {
            initialScale: param1,
            left: param2,
            top: param3,
        // x: coords.left,
        // y: coords.top
          };
    const params4 = {
      imgHeight:  img.naturalHeight,
      viewportHeight: w.wHeight,
      difference: img.naturalHeight - w.wHeight
    }
    console.log(params4);

    // console.log(params);
    modalImg.setAttribute('src', url);
    // console.log(params);

    tl.to(modal, 0, {display: "block", backgroundColor: "rgba(0, 0, 0, 0)"})
      .from(modalImg, 0.33, {scale: params.initialScale, top: params.top, left: params.left, force3D:true, ease: Power1.easeOut}, '+=0.05')
      .to(modal, 1, {backgroundColor: "rgba(0, 0, 0, 0.9)", force3D:true, ease: Power1.easeOut}, '-=0.5')
  };

  const closeHandler = () => {
    // tl.to(modalImg, 0, {clearProps: 'all'})
      // .to(modal, 0.05, {clearProps: 'all'});
    // modalImg.removeAttribute('style');
    tl.to(modal, 1, {backgroundColor: "rgba(0, 0, 0, 0)", force3D:true, ease: Power1.easeOut})
      .to(modalImg, 0.33, {scale: params.initialScale, top: params.top, left: params.left, force3D:true, ease: Power1.easeOut}, '-=0.77')
      .to(modalImg, 0, {clearProps: 'all'})
      .to(modal, 0, {clearProps: 'all'});

    setTimeout(()=> {modalImg.removeAttribute('src');}, 1000);

    // console.log(params);
  }

  const imgsListeners = () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', imgResizeHandler, false);
    };
    modal.addEventListener('click', closeHandler, false)
  };

  // const modalListener = modal.addEventListener('click', closeHandler, false);

  return {
    // log: console.log(distanceFromTop),
    // log2: console.log(imgs),
    // log3: console.log(coords),
    // log4: console.log(coords2),
    // log5: console.log(all !== null),
    // log6: console.log(w),
    // log7: params,
    // listeners: [
                // modalListener
              // ],
    attach : imgsListeners
  };

})();

Resize.attach();

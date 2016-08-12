
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        // console.log(document.readyState);
        TweenLite.to('#js-page', 1, {opacity: 1, ease: Power4.easeOut});
    }
}, 100);

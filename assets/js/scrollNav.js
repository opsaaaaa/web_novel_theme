  
class ScrollNav {
  constructor (target='[scroll-nav]'){
    this.detectScroll(
      document.querySelector(target)
    );
  }
  detectScroll(nav) {
    window.addEventListener('scroll', function(e) { 
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;

      if(scrollY <= this.lastScroll) {
        nav.setAttribute('scroll-nav', 'up');
      } else {
        nav.setAttribute('scroll-nav', 'down');
      };

      this.lastScroll = scrollY ;
    });
  }
}

window.addEventListener('load', (e) => {
  new ScrollNav();
});

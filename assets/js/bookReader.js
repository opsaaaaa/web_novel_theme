class BookReader {
  constructor (selector = '#reader', getCurrent = true, anchorTag = 'href') {
    this.pNodes = document.querySelectorAll(`${selector} p`);
    this.reader = document.querySelector(selector);
    this.pSelected = null;
    this.anchorTag = anchorTag;
    this.anchorParagraphs();
    this.scrollToAnchor();
    if(getCurrent){
      this.tackSelectedParagraph();
    };
  }

  tackSelectedParagraph() {
    this.pNodes.forEach((p, i) => {
      p.addEventListener('click',(e) => this.setCurrent(p));
      p.addEventListener('select',(e) => this.setCurrent(p));
    });
  }

  setCurrent(p) {
    this.clearCurrent();
    this.reader.setAttribute('current', 
      p.getAttribute('id')
    );
    p.setAttribute('current', '');
  }

  clearCurrent() {
    this.pNodes.forEach((p) => {
      p.removeAttribute('current')
    })
  }

  anchorParagraphs() {
    var c = 0;
    var anchorTag = this.anchorTag;
    this.pNodes.forEach(function(p){
      if(p.innerHTML.match('...')) {
        c = c+1;
        var a = document.createElement('a')
        a.setAttribute(anchorTag, `#p${c}`)
        a.setAttribute('class', `anchor`)
        p.setAttribute('id', `p${c}`)
        a.innerHTML = String(c)
        p.appendChild(a)
      } else {
        p.setAttribute('class', 'scene-change')
      };
    });
  }

  scrollToAnchor() {
    var hash = window.location.hash;
    if(hash != '') {
      document.querySelector(hash).scrollIntoView()
    };
  }
}

window.addEventListener('load', (e) => {
  new BookReader('#reader', true, 'copy');
});

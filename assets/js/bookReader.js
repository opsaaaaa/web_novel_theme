class BookReader {
  constructor (selector = '#reader', getCurrent = true, anchorTag = 'href') {
    this.pNodes = document.querySelectorAll(`${selector} p`);
    this.reader = document.querySelector(selector);
    this.setBookMarkLink();
    if(this.reader) {
      this.pSelected = null;
      this.anchorTag = anchorTag;
      this.anchorParagraphs();
      this.scrollToAnchor();
      if(getCurrent){
        this.tackSelectedParagraph();
      };
    }
  }

  tackSelectedParagraph() {
    this.pNodes.forEach((p, i) => {
      p.addEventListener('click',(e) => {
        this.setCurrent(p)    
      });
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
      if(p.innerHTML.match(/\s\w+\s/)) {
        c = c+1;

        // var a = document.createElement('a');
        // a.addEventListener('click',(e)=>{BookReader.saveBookMark(p)});
        // a.setAttribute(anchorTag, `#p${c}`)
        // a.setAttribute('class', `anchor`)
        p.setAttribute('id', `p${c}`)
        // a.innerHTML = String(c)
        // p.appendChild(a)
      } else if(p.innerHTML.match(/^(…|...)\s*$/)) {
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

  static saveBookMark(p) {
    var url = new URL(window.location);
    url.hash = '#'+p.getAttribute('id');
    window.localStorage.setItem('bookmark', url.href)
    custom_alert_function('Saved Bookmark')
    console.log(window.localStorage.getItem('bookmark'));
  }

  setBookMarkLink() {
    var bm = window.localStorage.getItem('bookmark');
    if(bm != undefined) {
      bm = new URL(bm);
      document.querySelectorAll('[go-to-bookmark]').forEach((b)=>{
        b.setAttribute('href', bm.href)
        b.setAttribute('title', 'Bookmark: '+bm.pathname+bm.hash)
      })
    }
  }
}

// TODO: figure out how to import this vv
custom_alert_function = function(msg) {
  var sp = document.createElement('span');
  sp.innerHTML = msg;
  document.querySelector('#alerts').appendChild(sp);
};

window.addEventListener('load', (e) => {
  new BookReader('#reader', true, 'copy');
});

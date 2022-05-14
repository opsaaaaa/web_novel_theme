class CopyBtn {
  constructor(
    target = '[copy]', 
    attr = 'copy', 
    fun = (t) => {
      alert(CopyBtn.copyMsg(t)); 
      return(t);
    }
  ) {
    this.target = target;
    this.field = attr;
    this.fun = fun;
    this.activateButtons();
  }

  activateButtons() {
    document.querySelectorAll(this.target).forEach((b)=>{
      b.addEventListener('click', (e)=>{
        this.copyElementText(b);
      })
    })
  }

  copyElementText(el) {
    var text = el.getAttribute(this.field);
    console.log(text)
    navigator.clipboard.writeText(this.fun(text, el)); 
  }

  static copyMsg(m) {
    return('Copied: <code>'+m+'</code>');
  }
}

custom_alert_function = function(msg) {
  var sp = document.createElement('span');
  sp.innerHTML = msg;
  document.querySelector('#alerts').appendChild(sp);
};



window.addEventListener('load', (e) => {
  new CopyBtn('button[copy]', 'copy', (t) => {
    custom_alert_function(CopyBtn.copyMsg(t));
    return(t);
  });
  new CopyBtn('a[copy]', 'copy', (t)=>{
    var cUrl = new URL(window.location);
    cUrl.hash = t;
    custom_alert_function(CopyBtn.copyMsg(cUrl));
    return(cUrl);
  });
});

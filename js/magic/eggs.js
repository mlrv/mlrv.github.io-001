const eggs = {

  // General eggs
  unleashTheRabbit: () => {
    const egg = new Egg();
    egg
      .addCode('up,up,down,down,left,right,left,right,b,a', () => {
        jQuery('#egggif').fadeIn(500, () => {
          window.setTimeout(() => {
            jQuery('#egggif').hide()
          }, 5000)
        })
      })

      .addHook(() => {
        alert('1337 mode activated!');
      }).listen();
    return '\n'
  },

  flip: () => {
    document.body.className = 'transform';
    return '\n'
  },

  matrix: () => {
    startTheMatrix();
    document.getElementById('typed-strings').style.visibility = 'hidden';
    document.getElementById('waterfall').style.visibility = 'visible';
    return '\n'
  },

  // Spaceship
  destroy: () => {
    window.location.href = "javascript:var%20KICKASSVERSION='2.0';var%20s%20=%20document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='js/magic/kickass.js';void(0);"

    // Mimics a mouse click on a hidden elements - this allows the user to control the ship
    function eventFire(el, etype) {
      if (el.fireEvent) {
        el.fireEvent('on' + etype)
      } else {
        const evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj)
      }
    }

    eventFire(document.getElementById('.hiddenelement'), 'click');
    return '\n'
  }
};

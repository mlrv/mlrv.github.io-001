/**
 * Created by marco on 29-Mar-17.
 */

/*
  Easter eggs!
  TO DO:
  - drunk mode
  - spaceship
*/

var eggs = {

  // General eggs
  unleashTheRabbit: function () {
    var egg = new Egg()
    egg
                .addCode('up,up,down,down,left,right,left,right,b,a', function () {
                  jQuery('#egggif').fadeIn(500, function () {
                    window.setTimeout(function () {
                      jQuery('#egggif').hide()
                    }, 5000)
                  })
                })

                .addHook(function () {
                  alert('Konami!')
                  console.log('Hook called for: ' + this.activeEgg.keys)
                  console.log(this.activeEgg.metadata)
                }).listen()
  },

  flip: function () {
    document.body.className = 'transform'
  },

  matrix: function () {
    document.getElementById('waterfall').style.visibility = 'visible'
  },

  // Spaceship - you can't use the arrows to control it - need to find a better solution
  destroy: function () {
    window.location.href = "javascript:var%20KICKASSVERSION='2.0';var%20s%20=%20document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='js/magic/kickass.js';void(0);"

    // Mimics a mouse click on a hidden elements - this allows the user to control the ship
    function eventFire (el, etype) {
      if (el.fireEvent) {
        el.fireEvent('on' + etype)
      } else {
        var evObj = document.createEvent('Events')
        evObj.initEvent(etype, true, false)
        el.dispatchEvent(evObj)
      }
    }

    eventFire(document.getElementById('.hiddenelement'), 'click')
  }
}

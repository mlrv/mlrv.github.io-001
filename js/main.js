/*
TO DO:
 [x] enable easter eggs
 [x] integrate spaceship
 [x] add audio player
 [x] what happens when song finishes?
 [x] add shortcuts for player + playlist details
 [x] change favicon (use emoji?)
 [x] restructure files, do not have everything in text.js
 [x] add <div> with auto typing
 [x] now there is a scrollbar - fix containers so that everything is in one window and the bar disappears
 [x] fix auto typing in a nice way
 [ ] download CV with command from CLI
 [ ] add list of eggs if the user wants
 [ ] fix matrix so that it properly loads from the beginning
 [ ] fix colors to have opacity at 50%
 [ ] fix text.colors() - might need to find a way to change future lines as well as the old ones
 [ ] add books sections
 [ ] add more eggs (drunk mode is one)
 [ ] flip now only works once, then you need to reload - need to find a way of doing it everytime you type 'flip'
 [ ] quote all authors
*/

$(function () {
  var jqconsole = $('#console').jqconsole('', '> ')

  function process (input) {
    var parsed = input.split(' ')

    switch (parsed[0]) {
      case '?':
      case 'ls':
      case 'help':
        return text.help()
      case 'whoareyou':
        return text.whoareyou
      case 'exp':
        return text.exp()
      case 'cv':
        return text.cv()
      case 'now':
        return text.now()
      case 'books':
        return text.books()
      case 'eggs':
        return text.eggs()
      case 'thanks':
        return text.thanks
      case 'contact':
        return text.contact
      case 'colors':
        return text.colors()
      case 'destroy':
        return eggs.destroy()
      case 'flip':
        return eggs.flip()
      case 'matrix':
        return eggs.matrix()
      case 'music':
        return music.play()
      default:
        return text.notRight
    }
  }

  eggs.unleashTheRabbit()

  var startPrompt = function () {
    jqconsole.Prompt(true, function (input) {
      if (input) jqconsole.Write(process(input), 'jqconsole-output', false)
      else jqconsole.Write(text.notRight, 'jqconsole-output')
      startPrompt()
    })
  }

  startPrompt()
})

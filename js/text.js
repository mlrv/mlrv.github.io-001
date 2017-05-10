var text = {

  helpGreeting: function () {
    var random = Math.floor((Math.random() * 3) + 1)
    console.log(random)
    switch (random) {
      case 1:
        return "What's up?"
      case 2:
        return 'Nice to meet you pal!'
      case 3:
        return 'What it do?'
    }
  },

  help: function () {
    return this.helpGreeting() + '\n\n' +
		'Try one of these:\n\n' +
		'\t<\a>whoareyou</\a>: curious? 💬 \n\n' +
		"\t<\a>exp</\a>: previous experience and things I've built 📃\n\n" +
		'\t<\a>now</\a>: what I am doing right now 🕒\n\n' +
		'\t<\a>books</\a>: my personal recommendations 📚\n\n' +
		'\t<\a>eggs</\a>: easter eggs 🎲\n\n' +
    '\t<\a>thanks</\a>: people 🌟\n\n' +
		'\t<\a>contact</\a>: coffee, maybe? 👋\n'
  },

    // Need to clean this, but it works! Now use actual palettes
		// Problem: this only changes the existing lines, not the new ones!
  colors: function () {
    var random = Math.floor((Math.random() * 5) + 1)
    var randomOffSet = random - 1

    function getRandomColor () {
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }

    var backgroundColor = ['#002B36', '#000000', getRandomColor(), getRandomColor(), getRandomColor()]
    var consolePromptColor = ['#B58900', '#00DD00', getRandomColor(), getRandomColor(), getRandomColor()]
    var outputColor = ['#DC322F', '#ff3333', getRandomColor(), getRandomColor(), getRandomColor()]
    var oldPromptColor = ['#268BD2', '#00DD00', getRandomColor(), getRandomColor(), getRandomColor()]

    var background = document.querySelector('#console')
    var consolePrompt = document.querySelectorAll('.jqconsole-prompt')
    var oldPrompt = document.querySelectorAll('.jqconsole-old-prompt')
    var outputElements = document.querySelectorAll('.jqconsole-output')

    for (i = 0; i < outputElements.length; i++) {
      outputElements[i].style.color = outputColor[randomOffSet]
    }

    for (i = 0; i < consolePrompt.length; i++) {
      consolePrompt[i].style.color = consolePromptColor[randomOffSet]
    }

    for (i = 0; i < oldPrompt.length; i++) {
      oldPrompt[i].style.color = oldPromptColor[randomOffSet]
    }

    background.style.backgroundColor = backgroundColor[randomOffSet]
  },

  whoareyou: "hi, I'm Marco\n" +
             "software developer @RBS\n" +
             "Genoa (IT) &rarr; Manchester (UK) &rarr; Edinburgh (UK) &rarr; ?\n" +
             "web develppment 💻 artificial intelligence 💭 blockchain 🔑 pizza 🍕\n",

  workObj: [
    {
      name: 'Software Engineer (contractor)',
      company: 'Gigster',
      url: 'https://www.gigster.com',
      time: 'November 2016 -> Present'
    },
    {
      name: 'Software Engineering (intern)',
      company: 'Udacity',
      url: 'https://www.udacity.com',
      time: 'Summer 2015 -> Spring 2016'
    },
    {
      name: 'Developer (part-time/contract)',
      company: 'HelloToken',
      url: 'http://www.hellotoken.com',
      time: 'Spring 2015 -> Summer 2016'
    },
    {
      name: 'Growth Hacker/Developer (intern)',
      company: 'Apptopia',
      url: 'http://www.apptopia.com',
      time: 'Summer 2014'
    },
    {
      name: 'Full Stack Javascript Engineer',
      company: 'AdmitHub',
      url: 'http://www.admithub.com',
      time: 'May 2014 -> September 2014'
    },
    {
      name: 'Researcher',
      company: 'UNT Dept. of Computer Science and Engineering',
      url: 'http://www.cse.unt.edu/~ccaragea/research.html',
      time: 'November 2013 -> Present'
    },
    {
      name: 'Developer',
      company: 'Signet Education',
      url: 'https://signeteducation.com/',
      time: 'Summer 2012'
    }
  ],

  exp: function () {
    var output = 'My work exp:\n\n'
    this.workObj.forEach(function (item) {
      output += ('\t' +
				item.name +
				" @ <a href='" +
				item.url +
				"'>" +
				item.company +
				'</a>' +
				'\n\n')
    })

    output += 'type <\a>cv</\a> to get the boring version of my cv ' +
      '<\i>(last updated: 10/05/17)</\i> \n\n'

    return output
  },

  cv: function () {
    var win = window.open('docs/Marco_Levrero_CV.pdf', '_blank')
    win.focus()
  },

  positionsObj: [

    {
      position: 'Organizer',
      organization: 'TreeHacks',
      url: 'https://www.treehacks.com/'
    },
    {
      position: 'Officer',
      organization: 'Stanford ACM',
      url: 'http://stanfordacm.com/'
    },
    {
      position: 'President',
      organization: 'RESOLV',
      url: 'http://resolv.club'
    },
    {
      position: 'President (@ chs, tams)',
      organization: 'DFC',
      url: 'http://thedfcnetwork.com/'
    },
    {
      position: 'Vice President',
      organization: 'CSO',
      url: 'http://tamscompsci.com/'
    }
  ],

  now: function () {
    var output = 'positions:\n\n'
    this.positionsObj.forEach(function (item) {
      output += ('\t' +
				item.position +
				" of <a href='" +
				item.url +
				"'>" +
				item.organization +
				'</a>' +
				'\n\n')
    })

    output += 'type <\a>cv</\a> to get the boring version of my cv ' +
      '<\i>(last updated: 10/05/17)</\i> \n\n'

    return output
  },

  booksObj: [
    {
      title: 'Homo Deus: A Brief History of Tomorrow',
      author: 'Yuval Noah Harari',
      description: ' add something'
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      description: ' '
    },
    {
      title: 'The Master and Margarita',
      author: 'Mikhail Bulgakov',
      description: ' '
    },
    {
      title: 'The Elements of Style',
      author: 'Strunk Jr. William',
      description: ' '
    },
    {
      title: 'The Girl on the Train',
      author: 'Paula Hawkins ',
      description: ' '
    }
  ],

  books: function () {
    var output = "These are some of the books I've read in the recent years, some of them really opened my mind.\n\n"

    this.booksObj.forEach(function (item) {
      output += '\t' +
			"<a>" +
			item.title +
			"</a> - " +
        "<i>" +
        item.author +
        "</i> \n " +
			'\t  ' +
			item.description +
			'\n\n'
    })

    return output
  },

  eggs: function () {
    var eggs = [
      '<\a>flip</\a>',
      '<\a>destroy</\a>',
      '<\a>matrix</\a>',
      '<\a>&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a</\a>'
    ]

    var random = Math.floor((Math.random() * eggs.length))
    return 'Try typing... ' + eggs[random] + '\n'
  },

  thanks: "Thank you guys\n",

  contact: "I am currently based in <a>Edinburgh, UK</a>\n\n" +
  "\tmy github is <a href='https://github.com/mlrv'>this</a>\n" +
  "\tI write stupid things from <a href='https://twitter.com/marcLrv'>here</a>\n" +
  "\tor you can just send me an <a href='mailto:marco.levrero@gmail.com'>email</a>\n",

  notRight: "That doesn't do anything, type <\a>help</\a> for some... help\n"
}

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
		'\twhoareyou: curious?\n\n' +
		"\texp: previous experience and things I've built\n\n" +
		'\tnow: what I am doing right now\n\n' +
		'\tbooks: my personal recommendations\n\n' +
		'\tfun: fun fact\n\n' +
    '\tthanks: people\n\n' +
		'\tcontact: coffee, maybe?\n'
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

  whoareyou: 'Software engineer, wannabe writer, noob powerlifter, hopeful entrepreneur\n' +
             '@Stanford\n' +
             'Dallas --> SF | Boston\n' +
             "Check out my <a href='http://brandontruong.com'>blog</a>!\n" +
             "Follow me on <a href='https://www.instagram.com/btrooo/'>instagram</a>!\n\n" +
             "Check out my 'work' or 'projects' for more info on tech stuff.\n",

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

    return output
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
    return output
  },

  projObj: [
    {
      name: 'HelloToken',
      url: 'http://hellotoken.com',
      description: 'Designed the website and worked on building out backend infrastructure. (rails, js)'
    },
    {
      name: 'Bayesian Classification of Tweets During Natural Disasters',
      url: 'https://www.asis.org/asist2014/proceedings/submissions/posters/349poster.pdf',
      description: 'I led an NLP/ML research project with Dr. Caragea at UNT. (java, opennlp, bayes)'
    },
    {
      name: 'EnergyPal (Grand Prize in Energy at NTx Apps Challenge)',
      url: 'https://play.google.com/store/apps/details?id=com.ionicframework.energypal312399',
      description: 'Live appliance-by-appliance energy monitoring system. You can see how much your computer is using from your phone, live! (ionic, js, java-hardware code)'
    },
    {
      name: 'AdmitHub',
      url: 'https://admithub.com',
      description: 'Helping bridge the many gaps of knowledge in college admissions.'
    },
    {
      name: 'Byte',
      url: 'http://yhackbyte.herokuapp.com/',
      description: 'Goal: git for audio. Product: compile audio clips that you record. (built at YHack)'
    },
    {
      name: 'CLTR',
      url: 'https://github.com/btroo/CLTR',
      description: 'Actiony-puzzley game I couldn\'t finish because game dev causes carpal tunnel... (libgdx, java) (WIP).'
    },
    {
      name: 'Slacking',
      url: 'https://github.com/btroo/slacking',
      description: 'Slack integration to show you a random HN article'
    },
    {
      name: 'Akin Programming Language',
      url: 'https://github.com/btroo/Akin',
      description: 'NLP based programming language. (antlr, java/jvm)'
    },
    {
      name: 'Campus 2.0 (1st at Campus 2.0 Hackathon)',
      url: 'http://hello.brandontruong.com/campus',
      description: 'App to gamify the usage of campus resources. (cordova, web)'
    },
    {
      name: 'Hexal',
      url: 'http://hello.brandontruong.com/hexal/',
      description: 'Experimental color chooser. (web)'
    },
    {
      name: "Where's my car (2nd at Dallas 20 over 20 hackathon)",
      url: 'https://github.com/simplyianm/wheres-my-car',
      description: 'Helps you find your car in a parking lot. (phonegap)'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/btroo',
      description: 'Look at all my open source (some listed above)'
    }
  ],

  books: function () {
    var output = "Some stuff I've worked on (some are part of my work experience):\n\n"

    this.projObj.forEach(function (item) {
      output += '\t' +
			"<a href='" +
			item.url +
			"'>" +
			item.name +
			'</a>\n' +
			'\t  ' +
			item.description +
			'\n\n'
    })

    return output
  },

  fun: function () {
    var facts = [
      'I have a fairly substantial music library. (yes, I download my music still)',
      'I love pho.',
      "I don't like sweets (sometimes in moderation it's okay).",
      "I smile pretty much 100% of the time when I'm dancing. My friends knock me for it.",
      'C++ was my first programming language, but I barely remember anything regarding it now.',
      'A lot of my friends call me a bboy although I rarely bboy seriously.',
      "I lived in Texas for my entire life. Then I went to California... don't really want to go back to Texas.",
      "I walk around my dorm in boxers even when it's cold.",
      'I like to write short stories.',
      "I feel sad when I don't have my Kindle.",
      'Favorite book: Infinite Jest by David Foster Wallace',
      'Favorite music artists: LCD Soundsystem/James Murphy, Kanye West, Nujabes, Kendrick Lamar, Jai Paul (love/hate relationship)'
    ]

    var random = Math.floor((Math.random() * facts.length))
    return facts[random] + '\n'
  },

  thanks: "Thank you guys\n",

  contact: "say hey <a href='mailto:me@brandontruong.com'>here</a>\n",

  notRight: "Oops, that's not a valid command... try '?'\n"
}

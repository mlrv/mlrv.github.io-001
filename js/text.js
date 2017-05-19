var text = {

  help: function () {
    return 'Try one of these:\n\n' +
		'\t<\a>whoareyou</\a>: curious? 💬 \n\n' +
		"\t<\a>exp</\a>: previous experience 📃\n\n" +
		'\t<\a>now</\a>: what I am doing right now 🕒\n\n' +
    '\t<\a>music</\a>: need some company while browsing? 🎺\n\n' +
		'\t<\a>books</\a>: my personal recommendations 📚\n\n' +
		'\t<\a>eggs</\a>: easter eggs 🎲\n\n' +
    '\t<\a>thanks</\a>: people 🌟\n\n' +
		'\t<\a>contact</\a>: coffee, maybe? 👋\n\n'
  },

    // Need to clean this, but it works! Now use actual palettes
		// Problem: this only changes the existing lines, not the new ones!
  colors: function () {
    var random = Math.floor((Math.random() * 5) + 1);
    var randomOffSet = random - 1;

    function getRandomColor () {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }

    var backgroundColor = ['#002B36', '#000000', getRandomColor(), getRandomColor(), getRandomColor()];
    var consolePromptColor = ['#B58900', '#00DD00', getRandomColor(), getRandomColor(), getRandomColor()];
    var outputColor = ['#DC322F', '#ff3333', getRandomColor(), getRandomColor(), getRandomColor()];
    var oldPromptColor = ['#268BD2', '#00DD00', getRandomColor(), getRandomColor(), getRandomColor()];

    var background = document.querySelector('#console');
    var consolePrompt = document.querySelectorAll('.jqconsole-prompt');
    var oldPrompt = document.querySelectorAll('.jqconsole-old-prompt');
    var outputElements = document.querySelectorAll('.jqconsole-output');

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
             "web develppment 💻 artificial intelligence 💭 blockchain 🔑 pizza 🍕\n\n",

  workObj: [
    {
      name: 'Software Engineer',
      company: 'RBS',
      url: 'http://www.bankofapis.com/',
      time: 'May 2017 &rarr; Present'
    },
    {
      name: 'Developer',
      company: 'Pixey',
      url: 'http://www.pixey.io/',
      time: 'May 2017 &rarr; Present'
    },
    {
      name: 'Innovation Consultant',
      company: 'RBS',
      url: 'http://personal.rbs.co.uk/',
      time: 'Sep 2016 &rarr; May 2017'
    },
    {
      name: 'Project Manager',
      company: 'UoM (MACE)',
      url: 'http://www.mace.manchester.ac.uk/',
      time: 'Sep 2015 &rarr; Jun 2016'
    },
    {
      name: 'Engineer',
      company: 'Ansaldo Energia',
      url: 'http://www.ansaldoenergia.it/',
      time: 'Dec 2014 &rarr; Sep 2015'
    }
  ],

  exp: function () {
    var output = 'My work exp:\n\n';
    this.workObj.forEach(function (item) {
      output += ('\t' +
				item.name +
				" @ <a href='" +
				item.url +
				"'>" +
				item.company +
				'</a>' +
        ' &#9679; ' +
        "<i>" +
        item.time +
        "</i> \n " +
				'\n\n')
    });

    output += 'type <\a>cv</\a> to get the boring version of my cv ' +
      '<\i>(last updated: 10/05/17)</\i> \n\n';

    return output
  },

  cv: function () {
    var win = window.open('docs/Marco_Levrero_CV.pdf', '_blank');
    win.focus();
    return '\n'
  },



  now:
    "I am currently working as a software engineer in the innovation team of <\a>RBS</\a> \n" +
    "At the same time, I collaborate with <\a>Pixey</\a>, working as a fullstack web developer \n" +
    "If I'm not eating pizza or playing some sport, I spend my time learning about cool stuff and working on personal projects\n\n",

  booksObj: [
    {
      title: 'Homo Deus: A Brief History of Tomorrow',
      author: 'Yuval Noah Harari',
      description: 'What does our future hold?'
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      description: 'Planet Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it. Us.'
    },
    {
      title: 'The Master and Margarita',
      author: 'Mikhail Bulgakov',
      description: 'A dazzling masterpiece, probably my favourite book ever.'
    },
    {
      title: 'The Elements of Style',
      author: 'Strunk Jr. William',
      description: 'No book in shorter space, with fewer words, will help any writer more than this persistent little volume.'
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
    });

    return output
  },

  eggs: function () {
    var eggs = [
      '<\a>flip</\a>',
      '<\a>destroy</\a>',
      '<\a>matrix</\a>',
      '<\a>&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a</\a>'
    ];

    var random = Math.floor((Math.random() * eggs.length));
    return 'Try typing... ' + eggs[random] + '\n\n'
  },

  thanks: "This project is based on an idea of <a href='https://github.com/btroo'>btroo</a>, a big thanks goes to him. \n" +
  "These are some of the other people who made this possible: \n\n" +
  "&#9679; <a href='https://github.com/kolber/audiojs'>kolber</a> \n" +
  "&#9679; <a href='https://github.com/mattboldt/typed.js'>mattboldt</a> \n" +
  "&#9679; <a href='https://github.com/tapio/live-server'>tapio</a> \n" +
  "&#9679; <a href='http://thatmikeflynn.com/egg.js/'>thatmikeflynn</a> \n" +
  "&#9679; <a href='https://github.com/lvtr4n/lvtr4n.github.io'>lvtr4n</a> \n\n",

  contact: "I am currently based in <a>Edinburgh, UK</a>\n\n" +
  "\tmy github is <a href='https://github.com/mlrv'>this</a>\n" +
  "\tI write stupid things from <a href='https://twitter.com/marcLrv'>here</a>\n" +
  "\tor you can just send me an <a href='mailto:marco.levrero@gmail.com'>email</a>\n\n",

  notRight: "That doesn't do anything, type <\a>help</\a> for some... help\n\n"
};

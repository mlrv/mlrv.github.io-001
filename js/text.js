const modules = require('modules');

const text = {

  help: function () {
    return 'Try one of these:\n\n' +
      '\t<\a>whoareyou</\a>: curious? 💬 \n\n' +
      "\t<\a>exp</\a>: previous experience 📃\n\n" +
      '\t<\a>now</\a>: what I am doing right now 🕒\n\n' +
      '\t<\a>music</\a>: need some company while browsing? 🎺\n\n' +
      '\t<\a>books</\a>: my personal recommendations 📚\n\n' +
      '\t<\a>eggs</\a>: easter eggs 🎲\n\n' +
      '\t<\a>thanks</\a>: people 🌟\n\n' +
      '\t<\a>source</\a>: I believe in an open 🌎\n\n' +
      '\t<\a>contact</\a>: coffee, maybe? 👋\n\n'
  },

  whoareyou:
    'hi, I\'m Marco\n' +
    'I currently work as a Software Engineer in a Fintech company in the UK. \n' +
    'I strongly believe in the value of continuous learning; at the moment, I\'m mostly interested in functional programming, architectural patterns, and open source software.\n' +
    'Also, I play chess.',

  workObj: modules.workObject,

  exp: function () {
    let output = 'My work exp:\n\n';
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
    window.open('docs/Marco_Levrero_CV.pdf', '_blank').focus();
    return '\n'
  },

  source: function () {
    return `
      This website was built a long time ago unsing vanilla JS...
      If you are interested in the source code you can find it <a target='_blank' href='https://github.com/mlrv/mlrv.github.io'>here</a>
      \n`;
  },

  now: "I am currently working as a software engineer in the innovation team of <\a>Avaloq</\a> \n" +
    "If I'm not eating pizza, running, or riding my <\a>BMX</\a>, I spend my time learning about cool stuff and working on personal projects\n\n",

  booksObj: modules.booksObject,

  books: function () {
    let output = "These are some of the books I've read in the recent years, some of them really opened my mind.\n\n"

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
    const eggs = modules.eggsObject;
    const random = Math.floor((Math.random() * eggs.length));
    return 'Try typing... ' + eggs[random] + '\n\n'
  },

  thanks: modules.thanksObject,

  contact: modules.contactObject,

  notRight: "That doesn't do anything, type <\a>help</\a> for some... help\n\n"
};
var modules = require('modules');

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
            '\t<\a>source</\a>: I believe in an open 🌎\n\n' +
            '\t<\a>contact</\a>: coffee, maybe? 👋\n\n'
    },

    whoareyou: "hi, I'm Marco\n" +
    "software developer @RBS\n" +
    "Genoa (IT) &rarr; Manchester (UK) &rarr; Edinburgh (UK) &rarr; ?\n" +
    "web development 💻 artificial intelligence 💭 blockchain 🔑 pizza 🍕\n\n",

    workObj: modules.workObject,

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

    source: function () {
        var win = window.open('https://github.com/mlrv/mlrv.github.io', '_blank');
        win.focus();
        return '\n'
    },

    now: "I am currently working as a software engineer in the innovation team of <\a>RBS</\a> \n" +
    "At the same time, I collaborate with <\a>Pixey</\a>, working as a fullstack web developer \n" +
    "If I'm not eating pizza or playing some sport, I spend my time learning about cool stuff and working on personal projects\n\n",

    booksObj: modules.booksObject,

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
        var eggs = modules.eggsObject;
        var random = Math.floor((Math.random() * eggs.length));
        return 'Try typing... ' + eggs[random] + '\n\n'
    },

    thanks: modules.thanksObject,

    contact: modules.contactObject,

    notRight: "That doesn't do anything, type <\a>help</\a> for some... help\n\n"
};
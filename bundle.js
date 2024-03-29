require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    booksObjects: [{
        title: 'Shoe Dog',
        author: 'Phil Knight',
        description: 'The "Just Do It" every entrepreneur needs.'
    },
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
    }]
};
},{}],2:[function(require,module,exports){
module.exports = {
    contactText:
        "I am currently based in <a>Edinburgh, UK</a>\n\n" +
        "\tmy github is <a href='https://github.com/mlrv'>this</a>\n" +
        "\tI write stupid things from <a href='https://twitter.com/marcLrv'>here</a>\n" +
        "\tor you can just send me an <a href='mailto:marco.levrero@gmail.com'>email</a>\n\n"
};
},{}],3:[function(require,module,exports){
module.exports = {
    eggsCommands: [
        '<\a>flip</\a>',
        '<\a>destroy</\a>',
        '<\a>matrix</\a>',
        '<\a>&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a</\a>'
    ]
};
},{}],4:[function(require,module,exports){
module.exports = {
    thanksText: 
        "This project is powered by <a href='https://github.com/replit/jq-console'>jqconsole</a>, a big thanks goes to these guys. \n" +
        "These are some of the other people who made this possible: \n" +
            "&#9679; <a href='https://github.com/btroo'>btroo</a> \n" +
            "&#9679; <a href='https://github.com/kolber/audiojs'>kolber</a> \n" +
            "&#9679; <a href='https://github.com/mattboldt/typed.js'>mattboldt</a> \n" +
            "&#9679; <a href='https://github.com/tapio/live-server'>tapio</a> \n" +
            "&#9679; <a href='http://thatmikeflynn.com/egg.js/'>thatmikeflynn</a> \n" +
            "&#9679; <a href='https://github.com/lvtr4n/lvtr4n.github.io'>lvtr4n</a> \n\n"
};
},{}],5:[function(require,module,exports){
module.exports = {
    workObjects: [{
        name: 'Software Engineer',
        company: 'RBS',
        url: 'http://www.bankofapis.com/',
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
        name: 'R&D Engineer',
        company: 'Ansaldo Energia',
        url: 'http://www.ansaldoenergia.it/',
        time: 'Dec 2014 &rarr; Sep 2015'
    }]
};
},{}],"modules":[function(require,module,exports){
var work = require('./objects/work');
var books = require('./objects/books');
var eggs = require('./objects/eggs');
var thanks = require('./objects/thanks');
var contact = require('./objects/contact');

var modules = {
    workObject: work.workObjects,
    booksObject: books.booksObjects,
    eggsObject: eggs.eggsCommands,
    thanksObject: thanks.thanksText,
    contactObject: contact.contactText
};

module.exports = modules;
},{"./objects/books":1,"./objects/contact":2,"./objects/eggs":3,"./objects/thanks":4,"./objects/work":5}]},{},[]);

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
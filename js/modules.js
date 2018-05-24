const work = require('./objects/work');
const books = require('./objects/books');
const eggs = require('./objects/eggs');
const thanks = require('./objects/thanks');
const contact = require('./objects/contact');

const modules = {
    workObject: work.workObjects,
    booksObject: books.booksObjects,
    eggsObject: eggs.eggsCommands,
    thanksObject: thanks.thanksText,
    contactObject: contact.contactText
};

module.exports = modules;
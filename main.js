const unique = require('uniq');
const $ = require('jquery');
const PQueue = require('p-queue');
const delay = require('delay');

// Unique
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));

// jQuery
$('body').css('background-color', 'lightgrey');

// PQueue
const queue = new PQueue({concurrency: 1});
queue.add(() => console.log(Date.now()));
queue.add(() => delay(2000));
queue.add(() => delay(2000));
queue.add(() => console.log(Date.now()));


// Export for browser
global.jQuery = $;
global.$ = $;
global.unique = unique;
global.PQueue = PQueue;
global.queue = queue;
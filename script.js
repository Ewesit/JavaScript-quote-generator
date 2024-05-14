//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"I think the worst time to have a heart attack is during a game of charades"`,
    person: `Demetri Martin`
},

{
    quote: `"People who think they know everything are a great annoyance to those of us who do."`,
    person: `Isaac Asimov`
},

{
    quote: `"I was asked to name all the presidents. I thought they already had names."`,
    person: `Demetri Martin`
},

{
    quote: `"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That’s relativity."`,
    person: `Albert Einstein`
},

{
    quote: `"I’m not as think as you drunk I am."`,
    person: `Anonymous`
},

{
    quote: `"Get your facts first, then you can distort them as you please."`,
    person: `Mark Twain`
},

{
    quote: `"Nowadays people know the price of everything and the value of nothing."`,
    person: `Oscar Wilde`
},

{
    quote: `"You forget what you want to remember, and you remember what you want to forget."`,
    person: `Cormac McCarthy`
},

{
    quote: `"It's much better to do good in a way that no one knows anything about it."`,
    person: `Leo Tolstoy`
},

{
    quote: `"Anyone who ever gave you confidence, you owe them a lot."`,
    person: `Truman Capote`
},
    
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random()* quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
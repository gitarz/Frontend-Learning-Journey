

const arrayOfQuotes = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Frank Zappa',
        'quote': 'So many books, so little time.'
    },
    {
        'author': 'Marcus Tullius Cicero',
        'quote': 'A room without books is like a body without a soul.'
    },
    {
        'author': 'Bernard M. Baruch',
        'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'
    },
    {
        'author': 'Mae West',
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
];
// frequency array technique (●'◡'●) 
var num = 0;
var freqArray = [0, 0, 0, 0, 0, 0];
var random = undefined;
function quoteGenerator() {
    random = Number.parseInt(Math.random() * arrayOfQuotes.length);

    // if the freqarray value=1 reuse random function again to get another number cz the number that we got is used before
    while (freqArray[random]) {
        random = Number.parseInt(Math.random() * arrayOfQuotes.length)
    }


    document.querySelector('#quoteContent').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#quoteAuthor').textContent = `--${arrayOfQuotes[random].author}`;

    // elimnate the quote
    freqArray[random] = 1; num++;
    // when we loop them all we reset the freqarray
    if (num == 6) {
        freqArray = [0, 0, 0, 0, 0, 0];
        num = 0;
    }
}



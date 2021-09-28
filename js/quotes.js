const quotes = [
    {
        quote: "Politeness and consideration for others is like investing pennies and getting dollars back.",
        author: "Thomas Sowell",        
    },
    {
        quote: "No man is happy who does not think himself so.",
        author: "Publilius Syrus",
    },
    {
        quote: "All this will not be finished in the first 100 days. Nor will it be finished in the first 1,000 days, nor in the life of this administration, nor even perhaps in our lifetime on this planet. But let us begin.",
        author: "John F. Kennedy",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Never seem more learned than the people you are with. Wear your learning like a pocket watch and keep it hidden. Do not pull it out to count the hours, but give the time when you are asked.",
        author: "Lord Chesterfield",
    },
    {
        quote: "Knowledge is power.",
        author: "Sir Francis Bacon",
    },
    {
        quote: "When a man's knowledge is sufficient to attain, and his virtue is not sufficient to enable him to hold, whatever he may have gained, he will lose again.",
        author: "Confucius",
    },
    {
        quote: "It is impossible to go through life without trust: That is to be imprisoned in the worst cell of all, oneself.",
        author: "Graham Greene",
    },
    {
        quote: "Talents are best nurtured in solitude; but character is best formed in the stormy billows of the world.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "The dead cannot cry out for justice; it is a duty of the living to do so for them.",
        author: "Lois McMaster Bujold",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQute.quote}"`;
author.innerText = `- ${todaysQute.author}`;
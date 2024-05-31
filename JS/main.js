
// get a qoute
function getQoute(){

    var arrayOfQuotes= [
        {
            'quote': "Be yourself; everyone else is already taken.",
            'author': "-- Oscar Wilde"
        },
        {
            'quote': "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            'author': "-- Marilyn Monroe"
        },
        {
            'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            'author': "-- Albert Einstein"
        },
        {
            'quote': "A room without books is like a body without a soul.",
            'author': "-- Marcus Tullius Cicero"
        },
        {
            'quote': "In three words I can sum up everything I've learned about life: it goes on.",
            'author': "-- Robert Frost"
        },
        {
            'quote': "If you tell the truth, you don't have to remember anything.",
            'author': "-- Mark Twain"
        },
        {
            'quote': "Without music, life would be a mistake.",
            'author': "-- Friedrich Nietzsche, Twilight of the Idols"
        },
        {
            'quote': "I am so clever that sometimes I don't understand a single word of what I am saying.",
            'author': "-- Oscar Wilde, The Happy Prince and Other Stories"
        },
        {
            'quote': "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            'author': "-- Ralph Waldo Emerson"
        },
        {
            'quote': "It is better to be hated for what you are than to be loved for what you are not.",
            'author': "-- Andre Gide, Autumn Leaves"
        },
        {
            'quote': "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
            'author': "-- H. Jackson Brown Jr., P.S. I Love You "
        },
    ]

    
    var randomNum= getRandomQoutes(arrayOfQuotes.length);
    document.getElementById('quote').innerHTML = arrayOfQuotes[randomNum].quote;
    document.getElementById('author').innerHTML = arrayOfQuotes[randomNum].author;


}

// picking random array value
function getRandomQoutes(qoutesArray){
    return Math.floor(Math.random() * qoutesArray);

}







// Code your solutions in this file
function writeCards(names, thankYou) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${thankYou} gift!`)
    }
    return cards
}  
function countDown( starting ) {
    while ( starting > 0 ) {
      console.log( starting );
      starting -= 1;
    }
    console.log( starting );
  }


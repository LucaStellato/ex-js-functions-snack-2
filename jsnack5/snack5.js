/*Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio 
e lo stampa ogni secondo.*/



function stampaOgniSecondo(messaggio) {
    setInterval(() => {
        console.log(messaggio)
    }, 1000)
}
stampaOgniSecondo('ciao come stai')
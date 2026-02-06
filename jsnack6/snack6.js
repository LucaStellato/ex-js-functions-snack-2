/*Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che
 accetta un intervallo di tempo e restituisce
  una funzione che avvia un setInterval, 
  incrementando un contatore e stampandolo.*/

function creaContatoreAutomatico(tempo) {
    let contatore = 0
    return (
        setInterval(() => {
            console.log(contatore++)
        }, tempo)
    )
}

const timer10 = creaContatoreAutomatico(1000);
timer10();
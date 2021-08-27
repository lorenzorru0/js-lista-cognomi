function aggiungiCognome() {
    var cognomeAggiunto = document.getElementById("cognomeAggiunto").value;
    cognomeAggiunto[0].toUpperCase();

    var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
    cognomi.push(cognomeAggiunto);
    
    cognomi.sort();
    console.log(cognomi);
    var index = cognomi.indexOf(cognomeAggiunto) + 1;

    document.getElementById("arrayCognome").innerHTML = 'L array è composto da: ';
    for (var i = 0; i < cognomi.length; i++) {
        document.getElementById("arrayCognome").innerHTML += cognomi[i] + ',  ';
    }
    document.getElementById("posizioneCognome").innerHTML += 'Il cognome aggiunto è posizionato in ' + index + 'a posizione.';
}
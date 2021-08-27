function aggiungiCognome() {
    var cognomeAggiunto = document.getElementById("cognomeAggiunto").value;
    cognomeAggiunto = cognomeAggiunto[0].toUpperCase() + cognomeAggiunto.slice(1).toLowerCase();

    var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
    cognomi.push(cognomeAggiunto);
    
    cognomi.sort();
    console.log(cognomi);
    var index = cognomi.indexOf(cognomeAggiunto) + 1;

    document.getElementById("arrayCognome").innerHTML = "L' array è composto da: ";
    for (var i = 0; i < cognomi.length; i++) {
        var ul = document.getElementById("cognomiList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(cognomi[i]));
        ul.appendChild(li);
    }
    document.getElementById("posizioneCognome").innerHTML += 'Il cognome aggiunto è posizionato in ' + index + 'a posizione.';
}
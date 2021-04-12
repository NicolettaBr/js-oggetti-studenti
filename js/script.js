//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//oggetto studente

var studente = {
    'nome': 'Marco',
    'cognome': 'Rossi',
    'eta': 25
}

//console.log(studente);

//stampo a schermo con ciclo for-in chiave e valore dell'oggetto

for( var key in studente){
    console.log('chiave:', key);
    console.log('valore:', studente[key]);
}

//creo un array di oggetti studenti

arrayStudenti = [
    {
        'nome': 'Chiara',
        'cognome': 'Tini',
        'eta': 32
    },

    {
        'nome': 'Lucia',
        'cognome': 'Bianchi',
        'eta': 21
    },

    {
        'nome': 'Marco',
        'cognome': 'Napolitano',
        'eta': 36
    },

    {
        'nome': 'Beatrice',
        'cognome': 'Silocchi',
        'eta': 28
    }

];

//con prompt chiedo nuovi dati
//creo un nuovo oggetto i cui valori sono i dati inseriti dall' utente 
//pusho il nuovo oggetto nell' array studenti
var nuovoNome = prompt('Inserisci il tuo nome');
var nuovoCognome = prompt('Inserisci il tuo Cognome');
var nuovaEta = parseInt(prompt('Inserisci la tua età'));

var nuovoStudente = {
    'nome': nuovoNome,
    'cognome': nuovoCognome,
    'eta': nuovaEta
}

//console.log(nuovoStudente);

arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);

//ciclare su tutti gli studenti e stampare per ognuno di essi solo nome e cognome
//uso ciclo for per iterare l' array di oggetti

for (var i = 0; i < arrayStudenti.length; i++){
    //console.log(arrayStudenti[i]);
    var thisStudente = arrayStudenti[i];
    //console.log(thisStudente);

    //thisStudente sono gli oggetti
    //uso ciclo for-in per iterare gli oggetti

    for( var key in thisStudente){
        //console.log('chiave:', key);
        //console.log('valore:', thisStudente[key]);

        //se la chiave dell' oggetto è == nome stampo il valore del nome
        //se la chiave dell' oggetto è == cognome stampo il valore del cognome

        if(key == 'nome'){
            console.log(thisStudente[key]);
        }else if(key == 'cognome'){
            console.log(thisStudente[key]);
        }
    }
}


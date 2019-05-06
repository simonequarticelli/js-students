// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//creo oggetto con descrizione studente
var studente = {
  'nome': 'simone',
  'cognome': 'quarticelli',
  'età': 32,
}

//stampo attraverso il for le proprietà
for (var field in studente) {
  if (studente.hasOwnProperty(field)) {
    console.log(studente[field]);
  }
}

//creo array di oggetti di studenti
var lista_studenti = [
  {
    'nome': 'mario',
    'cognome': 'rossi',
    'età': 21,
  },
  {
    'nome': 'giacomo',
    'cognome': 'giallo',
    'età': 23,
  },
  {
    'nome': 'eleonora',
    'cognome': 'blu',
    'età': 29,
  },
  {
    'nome': 'maria',
    'cognome': 'verde',
    'età': 19,
  },
  {
    'nome': 'patrizia',
    'cognome': 'nero',
    'età': 17,
  },
];

//creo ciclo for per scorrere la lista di studenti e stampare il loro nome e cognome
for (var i = 0; i < lista_studenti.length; i++) {
  console.log(lista_studenti[i].nome, lista_studenti[i].cognome );
}

//creo oggetto vuoto
var nuovo_studente = {
  'nome': '',
  'cognome': '',
  'età': '',
};

console.log(nuovo_studente);

//creo prompt per nuovo studente
var nome = prompt('inserisci il tuo nome ', 'nome');
var cognome = prompt('inserisci il tuo cognome ', 'cognome');
var età = parseInt(prompt('inserisci la tua età ', 'età'));

//assegno le proprietà
nuovo_studente.nome = nome;
nuovo_studente.cognome = cognome;
nuovo_studente.età = età;

//aggiungo nuovo studente (oggetto) nella lista (array)
lista_studenti.push(nuovo_studente);

console.log(nuovo_studente);
console.log(lista_studenti);

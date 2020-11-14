var btnGenera = document.getElementById('genera');

btnGenera.addEventListener('click',
  function() {

      // chiedi nome
    var nomeCognome = document.getElementById('nome').value;
    console.log(nomeCognome);

      // chiedi numero di km
    var numeroKm = document.getElementById('km').value;
    console.log(numeroKm);

      // chiedi età
    var eta = document.getElementById('eta').value;
    console.log(eta);

      // prezzo viaggio senza sconti
    var prezzoKm = 0.21;
    var prezzoBase = numeroKm * prezzoKm;
    console.log(prezzoBase);

      // applicare sconto
    var messaggio = '';
    var sconto;
    if (eta == 'minorenne') {
      messaggio = 'Hai diritto ad uno sconto del 20%';
      sconto = prezzoBase * 0.2;

    } else if (eta == 'over65') {
      messaggio = 'Hai diritto ad uno sconto del 40%';
      sconto = prezzoBase * 0.4;
    } else {
      sconto = 0;
    }

    console.log('Sconto prima del toFixed: ', sconto);
    sconto = parseFloat(sconto.toFixed(2));
    console.log('Sconto dopo il toFixed: ', sconto);
    var prezzoFinale = prezzoBase - sconto;
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log('Prezzo base', prezzoBase);
    console.log('Prezzo finale', prezzoFinale);
      // stampa in console
    console.log('Messaggio prima: ', messaggio);
    messaggio = messaggio + 'Il prezzo del tuo biglietto è: ' + prezzoFinale + ' €';
    console.log('Messaggio dopo: ', messaggio);
  }
);

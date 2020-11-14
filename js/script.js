var btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click',
  function() {

      // chiedi nome
    var nomeCognome = document.getElementById('nome').value;
    // console.log(nomeCognome);

      // chiedi numero di km
    var numeroKm = document.getElementById('km').value;
    // console.log(numeroKm);

      // chiedi età
    var eta = document.getElementById('eta').value;
    // console.log(eta);

      // prezzo viaggio senza sconti
    var prezzoKm = 0.21;
    var prezzoBase = numeroKm * prezzoKm;
    // console.log(prezzoBase);

      // applicare sconto
    var messaggio = 'Biglietto standard';
    var sconto;
    if (eta == 'minorenne') {
      messaggio = 'Sconto minorenne';
      sconto = prezzoBase * 0.2;

    } else if (eta == 'over65') {
      messaggio = 'Sconto silver';
      sconto = prezzoBase * 0.4;

    } else {
      sconto = 0;
    }

    // console.log('Sconto prima del toFixed: ', sconto);
    sconto = parseFloat(sconto.toFixed(2));
    // console.log('Sconto dopo il toFixed: ', sconto);
    var prezzoFinale = prezzoBase - sconto;
    prezzoFinale = prezzoFinale.toFixed(2);
    // console.log('Prezzo base', prezzoBase);
    // console.log('Prezzo finale', prezzoFinale);
      // stampa in console
    // console.log('Messaggio prima: ', messaggio);
    // messaggio = messaggio + 'Il prezzo del tuo biglietto è: ' + prezzoFinale + ' €';
    // console.log('Messaggio dopo: ', messaggio);

    var nomeUtente = document.getElementById('nome').value;
    document.getElementById('nome-passeggero').innerHTML = nomeUtente;

    document.getElementById('biglietto_offerta').innerHTML = messaggio;

    var numeroCarrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('biglietto_carrozza').innerHTML = numeroCarrozza;

    var numeroCP = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById('biglietto_codiceCP').innerHTML = numeroCP;

    document.getElementById('biglietto_costo').innerHTML = prezzoFinale + ' €';

    var bigliettoId = document.getElementById('biglietto');
    bigliettoId.classList.remove('hidden');
    bigliettoId.classList.add('show');

  }
);

var btnAnnulla = document.getElementById('annulla');
btnAnnulla.addEventListener('click',
  function() {

    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';

    document.getElementById('nome-passeggero').innerHTML = '';
    document.getElementById('biglietto_offerta').innerHTML = '';
    document.getElementById('biglietto_carrozza').innerHTML = '';
    document.getElementById('biglietto_codiceCP').innerHTML = '';
    document.getElementById('biglietto_costo').innerHTML = '';

    var bigliettoId = document.getElementById('biglietto');
    bigliettoId.className = 'hidden';
  }
);

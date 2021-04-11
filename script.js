//Sezione per inserire dinamicamente gli elementi

const sezione = document.querySelector('#lista');

for(let i=0; i<contenuti.length;i++){
        nome= contenuti[i].nome;
        image = contenuti[i].immagine;
        descrizione = contenuti[i].descrizione;

        const h1 = document.createElement('h1');
        h1.textContent = nome;
        const icona = document.createElement('img');
        icona.src = 'img/add.png';
        icona.classList.add('icona');
        const titolo = document.createElement('div');
        titolo.classList.add('titolo');
        const img = document.createElement('img');
        img.src = image;
        
        const dettagli = document.createElement('div');
        dettagli.classList.add('details');

        const pulsante = document.createElement('div');
        pulsante.textContent="Mostra dettagli";

        const desc = document.createElement('h3');
        desc.textContent = descrizione;
        desc.classList.add('hidden');

        const oggetto = document.createElement('div');
        oggetto.classList.add('oggetto');

        sezione.appendChild(oggetto);
        titolo.appendChild(icona);
        titolo.appendChild(h1); 
        oggetto.appendChild(titolo);
        oggetto.appendChild(img);
        oggetto.appendChild(dettagli);
        dettagli.appendChild(pulsante);
        dettagli.appendChild(desc);

        dettagli.addEventListener('click', mostraDettagli);
}

//Sezione per la ricerca

function aggiornaElementi(e)
{
        const nomiProdotti = document.querySelectorAll('.oggetto .titolo h1');
        const prodotti = document.querySelectorAll('.oggetto');

        for(let i=0; i<prodotti.length;i++){
                prodotti[i].classList.remove('hidden');
        }

        for(let i=0; i<prodotti.length;i++)
        {
                a=nomiProdotti[i].textContent.toLowerCase();
                b=e.target.value.toLowerCase();
                var count=0;
                if(a.includes(b)){
                        count++;
                }
                if(count == 0){
                        prodotti[i].classList.add('hidden');
                }
        }
}

const input = document.querySelector('input');

input.addEventListener('input', aggiornaElementi);

//Sezione preferiti

function selezionaPreferito(e){
        classePreferiti.classList.remove('hidden');
        contatorePreferiti++;

        const elementi = document.querySelectorAll('.oggetto');
        for(let i=0;i<elementi.length;i++){
                children =elementi[i].childNodes;
                if(children[0].textContent == e.target.parentNode.textContent){
                        index1 = i;
                        children[0].childNodes[0].removeEventListener('click', selezionaPreferito);
                }
        }

        nome= contenuti[index1].nome;
        image = contenuti[index1].immagine;

        const h1 = document.createElement('h1');
        h1.textContent = nome;
        const icona = document.createElement('img');
        icona.src = 'img/remove.png';
        icona.classList.add('icona');

        const titolo = document.createElement('div');
        titolo.classList.add('titolo');
        const img = document.createElement('img');
        img.src = image;

        const oggetto = document.createElement('div');
        oggetto.classList.add('oggettoPref');

        sezionePreferiti.appendChild(oggetto);
        titolo.appendChild(icona);
        titolo.appendChild(h1);
        oggetto.appendChild(titolo);
        oggetto.appendChild(img);

        icona.addEventListener('click', rimuoviPreferito);
}

function rimuoviPreferito(e){
        const elementi = document.querySelectorAll('.oggettoPref');
        for(let i=0;i<elementi.length;i++){
                children =elementi[i].childNodes;
                if(children[0].textContent == e.target.parentNode.textContent){
                        index2 = i;
                        nomeOggetto=children[0].textContent;
                }
        }
        contatorePreferiti--;

        //Per rimettere l'event listener nell'altro gruppo di oggetti
        const oggetti = document.querySelectorAll('.oggetto');
        for(let i=0; i<oggetti.length;i++){
               if(oggetti[i].childNodes[0].textContent==nomeOggetto){
                       oggetti[i].childNodes[0].childNodes[0].addEventListener('click', selezionaPreferito);
               }
        }
        //

        elementi[index2].classList.add('hidden');
        if(contatorePreferiti==0){
                classePreferiti.classList.add('hidden');
        }
}

var contatorePreferiti =0;

const iconeAdd = document.querySelectorAll('.titolo .icona');
const classePreferiti = document.querySelector('.preferiti');
const sezionePreferiti = document.querySelector('#listaPref');

for(icons of iconeAdd){
        icons.addEventListener('click', selezionaPreferito);
}

//Dettagli prodotti

function mostraDettagli(e){

       flag = e.currentTarget.querySelector('.hidden');
       
       if(flag){
                e.currentTarget.querySelector('h3').classList.remove('hidden');
                e.currentTarget.querySelector('div').textContent="Nascondi dettagli";
       }
       else{
                e.currentTarget.querySelector('h3').classList.add('hidden');
                e.currentTarget.querySelector('div').textContent="Mostra dettagli";
       }
}





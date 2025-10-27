## Consegna

💡 **_Premessa:_** Stai costruendo una pagina per visualizzare una lista di politici. Tuttavia, vuoi evitare calcoli inutili e ottimizzare la performance del tuo componente. Segui le milestone per migliorare progressivamente il codice

```js
Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare l'url base:
http://localhost:3333
al posto di:
https://freetestapi.com/api/v1
Ad esempio:
http://localhost:3333/users
per chiamare l'endpoint /users
Clicca qui per la guida su come installare il Server API Locale!
```

## 📌 Milestone 1: Recuperare e visualizzare i dati

1. Effettua una chiamata API a
   http://localhost:3333/politicians

2. Salva la risposta in uno **_stato React (useState)_**.

3. Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

- **_Nome (name)_**
- **_Immagine (image)_**
- **_Posizione (position)_**
- **_Breve biografia (biography)_**

**_Obiettivo:_** Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

## 📌 Milestone 2: Implementare la ricerca ottimizzata

1. Aggiungi un **_campo di ricerca_** `(<input type="text">)` sopra la lista dei politici.

2. Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso).

   **_Suggerimento:_** Creare un array derivato filtrato, che viene aggiornato **_solo quando cambia la lista di politici o il valore della ricerca._**

3. ❌ **_Non usare useEffect per aggiornare l’array filtrato._**

**_Obiettivo:_** Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

## 📌 Milestone 3: Ottimizzare il rendering delle card con <span style="color:red">React.memo</span>

1. Attualmente, ogni volta che l’utente digita nella barra di ricerca, **_tutte le card vengono ri-renderizzate_**, anche quelle che non sono cambiate.

2. Usa **_React.memo()_** per evitare il ri-render delle card quando le loro **_props non cambiano_**.

3. Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

**_Obiettivo:_** Se la lista filtrata cambia, **_solo le nuove card devono essere renderizzate_**, mentre le altre rimangono in memoria senza essere ridisegnate.

🎯 Bonus: Filtrare anche per posizione politica (position)

1. Creare un array derivato che contiene **_tutte le posizioni politiche (position) disponibili_**, ma **_senza duplicati_**.

2. Aggiungere un `<select>` sopra la lista che permette di filtrare i politici anche in base alla loro posizione.

3. Modificare l’array filtrato per tenere conto **_sia della stringa di ricerca, sia della posizione selezionata._**

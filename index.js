document.getElementById("anno").textContent = new Date().getFullYear();
// Funzione per creare il paragrafo in "About us"
document.getElementById("aboutus").addEventListener("click", function () {
  createParagraph("Il Gruppo2 è una classe di Develhope", "output-aboutus");
});

// Funzione per creare il paragrafo in "Artwork"
document.getElementById("artwork").addEventListener("click", function () {
  createParagraph("Contenuto di Artwork", "output-artwork");
});

// Funzione per creare il paragrafo in "API"
document.getElementById("api").addEventListener("click", function () {
  createParagraph("Informazioni sulle API", "output-api");
});

// Funzione per creare il paragrafo in "Licenza"
document.getElementById("licenza").addEventListener("click", function () {
  createParagraph("Dettagli sulla licenza", "output-licenza");
});

// Funzione generica per creare il paragrafo e il bottone di chiusura
function createParagraph(text, outputId) {
  const container = document.getElementById(outputId);

  // Se l'elemento di output non è trovato, termina la funzione
  if (!container) {
    console.error(`Elemento #${outputId} non trovato!`);
    return;
  }

  // Se esiste già un paragrafo dentro il container, non ne aggiunge un altro
  if (container.querySelector(".elemento-creato")) {
    return;
  }

  // Crea il paragrafo
  const paragraph = document.createElement("p");
  paragraph.classList.add("elemento-creato");
  paragraph.innerText = text;

  // Crea il bottone di chiusura
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.innerText = "X";

  // Aggiunge il bottone al paragrafo
  paragraph.appendChild(button);

  // Aggiunge il paragrafo al container corrispondente
  container.appendChild(paragraph);

  // Evento per rimuovere il paragrafo quando si clicca sul bottone
  button.addEventListener("click", function () {
    console.log("Bottone premuto! Rimuovo il paragrafo...");
    paragraph.remove(); // Rimuove il paragrafo
  });
}

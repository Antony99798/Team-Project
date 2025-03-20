//data dinamica
document.getElementById("anno").textContent = new Date().getFullYear();

// Funzione per creare il paragrafo in "About us"
document.getElementById("aboutus").addEventListener("click", function () {
  createParagraph("Il Gruppo2 è una classe di Develhope", "output-aboutus");
});

// Funzione per creare immagini in "Artwork"
document.getElementById("artwork").addEventListener("click", function () {
  createImageGallery("output-artwork");
});

// Funzione per creare il paragrafo in "API"
document.getElementById("api").addEventListener("click", function () {
  createParagraph("Link API: https://www.dnd5eapi.co", "output-api");
});

// Funzione per creare il paragrafo in "Licenza"
document.getElementById("licenza").addEventListener("click", function () {
  createParagraph(
    "Tutti i contenuti del nostro sito, dei nostri podcast e dei nostri giochi sono rilasciati con licenza",
    "output-licenza"
  );
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

  // Crea il bottone di chiusura
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.innerText = "X";

  // Crea il paragrafo
  const paragraph = document.createElement("p");
  paragraph.classList.add("elemento-creato");
  paragraph.innerText = text;

  // Aggiunge il bottone prima del paragrafo
  container.appendChild(button);
  container.appendChild(paragraph);

  // Evento per rimuovere il paragrafo e il bottone quando si clicca sul bottone
  button.addEventListener("click", function () {
    console.log("Bottone premuto! Rimuovo il paragrafo...");
    button.remove(); // Rimuove il bottone
    paragraph.remove(); // Rimuove il paragrafo
  });
}
// Funzione per creare una galleria di immagini
function createImageGallery(outputId) {
  const container = document.getElementById(outputId);

  if (!container) {
    console.error(`Elemento #${outputId} non trovato!`);
    return;
  }

  if (container.querySelector(".gallery")) {
    return; // Evita di creare la galleria più volte
  }

  const galleryDiv = document.createElement("div");
  galleryDiv.classList.add("gallery");

  // Array con i percorsi delle immagini
  const images = [
    "assets./copertina.jpg",
    "assets./descrizione-gioco.jpeg",
    "assets./footer-background.jpeg",
    "assets./negozio-gioco.jpeg",
  ];

  // Bottone per chiudere la galleria
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.innerText = "X";
  galleryDiv.appendChild(button);

  container.appendChild(galleryDiv);

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Artwork Image";
    img.classList.add("gallery-image");
    galleryDiv.appendChild(img);
  });

  button.addEventListener("click", function () {
    console.log("Bottone premuto! Rimuovo la galleria...");
    galleryDiv.remove();
  });
}

document.getElementById("anno").textContent = new Date().getFullYear();

//aboutus
const elementop = document.createElement("p");
elementop.innerText = "Il Gruppo2 è una classe di Develhope";
elementop.setAttribute("class", "elemento-creato");

function aboutus() {
  const prendi = document.getElementById("aboutus");

  // Controlla se il paragrafo esiste già per non duplicarlo
  if (!prendi.contains(elementop)) {
    prendi.appendChild(elementop);
    elementop.appendChild(bottone);
  }
}

const bottone = document.createElement("button");
bottone.innerText = "X";
bottone.setAttribute("id", "btn");
bottone.addEventListener("click", reset); // Assegna la funzione correttamente

//
function artwork() {
  const prendi = document.getElementById("artwork");
  const elementop = document.createElement("p");
  elementop.innerText = "vasffanculo";
  prendi.appendChild(elementop);
  elementop.setAttribute("class", "elemento-creato");

  // Controlla se il paragrafo esiste già per non duplicarlo
  if (!prendi.contains(elementop)) {
    prendi.appendChild(elementop);
    elementop.appendChild(bottone);
  }
  }

function api() {
  const prendi = document.getElementById("api");
  const elementop = document.createElement("p");
  elementop.innerText = "stronzo";
  prendi.appendChild(elementop);
  elementop.setAttribute("class", "elemento-creato");

  // Controlla se il paragrafo esiste già per non duplicarlo
  if (!prendi.contains(elementop)) {
    prendi.appendChild(elementop);
    elementop.appendChild(bottone);
  }
}
function licenza() {
  const prendi = document.getElementById("licenza");
  const elementop = document.createElement("p");
  elementop.innerText = "cornuto";
  prendi.appendChild(elementop);
  elementop.setAttribute("class", "elemento-creato");

  // Controlla se il paragrafo esiste già per non duplicarlo
  if (!prendi.contains(elementop)) {
    prendi.appendChild(elementop);
    elementop.appendChild(bottone);
  }
}


function reset() {
  const elementop = document.querySelector(".elemento-creato")
      elementop.innerHTML=""
}


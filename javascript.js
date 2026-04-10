const eventData = {
  nameHe: "Rosario",
  nameShe: "Esteban",
  dateDay: "06",
  dateMonth: "Jun",
  dateMonthComplete: "Junio",
  dateYear: "2026",
  ticketsNumber: "1",
  fatherShe: "Esteban Alfredo Jácome Ávila",
  motherShe: "María de Lourdes Márquez González",
  fatherHe: "Juan de Dios Ponce Salguero ",
  motherHe: "María del Rosario Dávila Barrientos",
  firstHour: "13:00",
  misaHour: "13:00hrs",
  misaName: "Parroquia San Pío X",
  misaDirection:
    "Av. Araucarias 75, Indeco Animas, 91190 Xalapa-Enríquez, Ver.",
  misaMaps: "https://maps.app.goo.gl/DyXTeXeXy61atTLf9",
  receptionHour: "14:00hrs",
  receptionName: "Salón Campestre 'La Fuente'",
  receptionDirection:
    "Carretera Antigua Coatepec- Xalapa Km. 1, La Florida, 91517 Coatepec, Ver.",
  receptionMaps: "https://maps.app.goo.gl/dhWKqm3XCnScoKPy9",
  itinerary: [
    {
      name: "Ceremonia religiosa",
      hour: "1:00pm",
      img: "./assets/img/iglesia.png",
      animation: "animate__pulse animate__repeat-2 animate__slower",
    },
    {
      name: "Recepción",
      hour: "2:00pm",
      img: "./assets/img/Recepcion (1).png",
      animation: "animate__rotateInDownLeft",
    },
    {
      name: "Ceremonia Civil",
      hour: "2:30pm",
      img: "./assets/img/civil.png",
      animation: "animate__rotateInDownRight",
    },
    {
      name: "Cocktail",
      hour: "3:00pm",
      img: "./assets/img/cocktail.png",
      animation: "animate__swing animate__repeat-2",
    },
    {
      name: "Comida",
      hour: "4:00pm",
      img: "./assets/img/comida.png",
      animation: "animate__swing animate__repeat-2",
    },
    {
      name: "Fiesta",
      hour: "5:00pm",
      img: "./assets/img/fiesta.png",
      animation: "animate__swing animate__repeat-2",
    },
  ],
  mesasDeRegalo: [
    {
      name: "liverpool",
      href: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51963267",
      img: "./assets/img/LIVERPOOL-logo.png",
    },
    // {
    //   name: "palacio de hierro",
    //   href: "https://www.elpalaciodehierro.com",
    //   img: "./assets/img/palacio-logo.png",
    // },
  ],
  datosBancarios: {
    name: "Arturo Jiménez Díaz",
    count: "4027 6653 0576 7718",
    bank: "BBVA",
  },
  codeGalery: "MX8adf83b4adb",
  linkGalery: "https://www.wedshoots.com/mx?albumId=MX883b4adb",
  dressCodeImg: "./assets/img/nueva-imagen.png",
  limitConfirmation: "20 de Abril",
  linkConfirmation:
    "https://wa.me/522281505318?text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda%20de%20Rosario%20y%20Esteban.%20Recibí%201%20pase.",
  linkDeny:
    "https://wa.me/522281505318?text=Hola!%20Lamentablemente%20no%20podré%20asistir%20a%20la%20boda%20de%20Rosario%20y%20Esteban.%20Recibí%201%20pase.",
};

// Helper para asignar texto
const setText = (id, text) => {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
};

// Título
document.title = `${eventData.nameHe} y ${eventData.nameShe}`;

// Nombres portada
setText("heName1", eventData.nameHe);
setText("sheName1", eventData.nameShe);

// Fecha
setText("day1", eventData.dateDay);
setText("month1", eventData.dateMonthComplete);
setText("year1", eventData.dateYear);

// Tickets
["ticketNumber", "ticketNumber1"].forEach((id) =>
  setText(id, eventData.ticketsNumber)
);

// Padres
setText("fatherShe", eventData.fatherShe);
setText("motherShe", eventData.motherShe);
setText("fatherHe", eventData.fatherHe);
setText("motherHe", eventData.motherHe);

// Ubicación
setText("misaHour", eventData.misaHour);
setText("misaName", eventData.misaName);
setText("misaDirection", eventData.misaDirection);
setText("receptionHour", eventData.receptionHour);
setText("receptionName", eventData.receptionName);
setText("receptionDirection", eventData.receptionDirection);

const misaLink = document.getElementById("misaLink");
if (misaLink) misaLink.href = eventData.misaMaps;
const receptionLink = document.getElementById("receptionLink");
if (receptionLink) receptionLink.href = eventData.receptionMaps;

// Itinerario
const itineraryContainer = document.getElementById("itineraryContainer");
if (itineraryContainer) {
  eventData.itinerary.forEach((item, index) => {
    const isActive = index === 0 ? "active" : "";
    itineraryContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="carousel-item ${isActive}">
        <div class="card d-flex justify-content-center align-items-center">
          <div class="w-50">
            <div class="d-flex align-items-center justify-content-center">
              <img class="card-img animate__animated ${item.animation}" src="${item.img}" alt="${item.name}" />
            </div>
            <p class="card-text text-white text-center font-paris display-5">${item.name}</p>
            <p class="card-text text-shadow text-white font-weight-bold text-center display-5">${item.hour}</p>
          </div>
        </div>
      </div>
    `
    );
  });
}
const mesasDeRegaloContainer = document.getElementById("mesaDeRegalos");
if (mesasDeRegaloContainer) {
  eventData.mesasDeRegalo.forEach((item) => {
    mesasDeRegaloContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-md-6">
        <div class="d-flex flex-column pt-4 justify-content-center align-items-center">
          <img class="logo-liverpool" src="${item.img}" alt="logo ${item.name}" />
          <p>5 1 9 6 3 2 6 7 </p> 
        </div>
        <div class="d-flex justify-content-center">
          <a href="${item.href}" class="w-75 d-flex justify-content-center" target="_blank">
            <button class="btn btn-light display-6 text-center my-3 p-2 animate__animated animate__pulse animate__infinite">
              Ir a mesa de regalos <i class="bi bi-box-arrow-up-right"></i>
            </button>
          </a>
        </div>
      </div>
    `
    );
  });
}

setText("bankCount", eventData.datosBancarios.count);
setText("bankName", eventData.datosBancarios.bank);
setText("bankPropietary", eventData.datosBancarios.name);

setText("codeGalery", eventData.codeGalery);

const linkGalery = document.getElementById("wedshootsLink");
if (linkGalery) {
  linkGalery.href = eventData.linkGalery;
}
setText("limitConfirmation", eventData.limitConfirmation);

const linkConfirmation = document.getElementById("linkConfirmation");
if (linkConfirmation) {
  linkConfirmation.href = eventData.linkConfirmation;
}
const linkDeny = document.getElementById("linkDeny");
if (linkDeny) {
  linkDeny.href = eventData.linkDeny;
}

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

function abrir() {
  document.getElementById("sobre-arriba").classList.add("animate__fadeOutUp");
  document.getElementById("sobre-abajo").classList.add("animate__slideOutDown");
  document.getElementById("logo").classList.remove("animate__infinite");

  document.getElementById("parent-div").classList.remove("test-class");
  document.getElementsByTagName("body")[0].classList.remove("avoiding-scroll");

  window.scrollTo(0, 0);
  setTimeout(function () {
    document.getElementById("logo").classList.add("hide");
    document.getElementById("hoja-principal").classList.add("hide");
    document.getElementById("invitacion").classList.remove("hide");
    audio.play();
  }, 2500);

  setTimeout(function () {
    document.getElementById("names").classList.remove("hide");
    document.getElementById("names").classList.add("animate__zoomIn");
  }, 3000);
}

// auidio

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("d-none");
    playPause.querySelector(".play-btn").classList.toggle("d-none");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("d-none");
    playPause.querySelector(".play-btn").classList.toggle("d-none");
  }
});

// Cuenta regresiva -------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date(
  `${eventData.dateMonth} ${eventData.dateDay}, ${eventData.dateYear} ${eventData.firstHour}`
).getTime();
console.log(countDownDate, "countDown");
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="cuenta px-4 pb-4" >
  <span>${days} días</span>
  <span class="ml-2 mr-2"> : </span>  
  <span>${hours} hrs</span> 
  <span class="ml-2 mr-2"> : </span>   
  <span>${minutes} min</span>
  <span class="ml-2 mr-2"> : </span>  
  <span>${seconds} seg</span> 
    </div>
  </div>
    `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// carousel

const video = document.getElementById("miVideo");
let isPlaying = false;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isPlaying) {
        video
          .play()
          .then(() => {
            isPlaying = true;
          })
          .catch(() => {});
      } else if (!entry.isIntersecting && isPlaying) {
        video.pause();
        isPlaying = false;
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(video);

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         video.play().catch((error) => {
//           console.log("Autoplay bloqueado:", error);
//         });
//       } else {
//         video.pause();
//       }
//     });
//   },
//   {
//     threshold: 0.3,
//   }
// );

// observer.observe(video);

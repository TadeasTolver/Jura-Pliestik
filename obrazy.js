const pastelCon = document.querySelector("#obrazy-1");
const aquaprintCon = document.querySelector("#obrazy-2");
const vojnaCon = document.querySelector("#obrazy-3");

const pageId = document.body.id;

export const paintings = [
  {
    img: "obrazy/pastel 1.JPG",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 2.JPG",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 3.JPG",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 4.JPG",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 5.JPG",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 6.JPG",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 7.png",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 8.png",
    subTopic: "pastel",
  }, {
    img: "obrazy/pastel 9.png",
    subTopic: "pastel",
  }, {
    img: "obrazy/aqua 1.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 2.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 3.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 4.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 5.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 6.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 7.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 8.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 9.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 10.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 12.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/aqua 13.jpg",
    subTopic: "aquaprint",
  }, {
    img: "obrazy/krava.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/krava 2.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/krava 3.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/krava 4.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 1.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 2.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 3.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 4.jpg",
    subTopic: "vojna",
  },  {
    img: "obrazy/vojna 5.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 6.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 7.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 8.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 9.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 10.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 11.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 12.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 13.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 14.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 15.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 16.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 17.jpg",
    subTopic: "vojna",
  }, {
    img: "obrazy/vojna 18.jpg",
    subTopic: "vojna",
  },
];


const renderPaintings = () => {
    pastelCon.innerHTML = "";
    aquaprintCon.innerHTML = "";
    vojnaCon.innerHTML = "";
    let numOfPastel = 0;
    let numOfAquaprint = 0;

    paintings.forEach((painting, index) => {
      const html = `
        <div class="artwork">
          <img src="${painting.img}" id="img-${String(index).padStart(3,"0")}" loading="lazy"></img>
          <h4 id="h-${String(index).padStart(3,"0")}">${(painting.czHeading) ? (localStorage.getItem("lang") === "en") ? painting.enHeading : painting.czHeading : ""}</h4>
          <p id="p-${String(index).padStart(3,"0")}">${(painting.czText) ? (localStorage.getItem("lang") === "en") ? painting.enText : painting.czText : ""}</p>
        </div>`;

    if (painting.subTopic === "pastel") {
      pastelCon.innerHTML += html;
      numOfPastel ++;

      const img = document.querySelectorAll("#obrazy-1 img")[paintings.indexOf(painting)];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#obrazy-1 .artwork")[paintings.indexOf(painting)].classList.add("wide");
      }
    } else if (painting.subTopic === "aquaprint") {
      aquaprintCon.innerHTML += html;
      numOfAquaprint ++;   
      
      const img = document.querySelectorAll("#obrazy-2 img")[paintings.indexOf(painting) - numOfPastel];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#obrazy-2 .artwork")[paintings.indexOf(painting) - numOfPastel].classList.add("wide");
      }
    } else if (painting.subTopic === "vojna") {
      vojnaCon.innerHTML += html; 

      const img = document.querySelectorAll("#obrazy-3 img")[paintings.indexOf(painting) - numOfPastel - numOfAquaprint];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#obrazy-3 .artwork")[paintings.indexOf(painting) - numOfPastel - numOfAquaprint].classList.add("wide");
      }
    }

  });
}

if (pageId === "obrazy") {
  renderPaintings();
}

window.changePaintingsToCz = () => {
  document.querySelector(".heading").innerText = "Pictures";
  document.querySelector("#sub-topic-links :nth-child(1)").innerText = "Malby pastelem ↓";
  document.querySelector("#sub-topic-links :nth-child(2)").innerText = "Aquaprinty ↓";
  document.querySelector("#sub-topic-links :nth-child(3)").innerText = "Kresby z vojny ↓";

  document.querySelector("#paintings-1-heading").innerText = "Malby pastelem";
  document.querySelector("#paintings-2-heading").innerText = "Aquaprinty";
  document.querySelector("#paintings-3-heading").innerText = "resby z vojny, před studiem na AVU";

  renderPaintings();
}

window.changePaintingsToEn = () => {
  document.querySelector(".heading").innerText = "Pictures";
  document.querySelector("#sub-topic-links :nth-child(1)").innerText = "Pastel paintings ↓";
  document.querySelector("#sub-topic-links :nth-child(2)").innerText = "Aquaprints ↓";
  document.querySelector("#sub-topic-links :nth-child(3)").innerText = "Drawings from the military service ↓";

  document.querySelector("#paintings-1-heading").innerText = "Pastel paintings";
  document.querySelector("#paintings-2-heading").innerText = "Aquaprints";
  document.querySelector("#paintings-3-heading").innerText = "Drawings from the military service, before studying at AVU";

  renderPaintings();
}

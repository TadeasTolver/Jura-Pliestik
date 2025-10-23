const sculptures1Con = document.querySelector("#sculptures-1");
const portretyCon = document.querySelector("#sculptures-2");
const predAvuCon = document.querySelector("#sculptures-3");

const pageId = document.body.id;

export const sculptures = [
  {
    img: "sochy/bojovnikum.png",
    enHeading: "Memorial to soldiers who fought abroad during World War II",
    enText: "Dejvické náměstí, Prague 6.",
    czHeading: "Památnik bojovnímkům v zahraničí za II. sv. války",
    czText: "Dejvické náměstí, Praha 6.",
  }, {
    img: "sochy/bojovnikum 2.jpg",
    enHeading: "Memorial to soldiers who fought abroad during World War II",
    enText: "Dejvické náměstí, Prague 6.",
    czHeading: "Památnik bojovnímkům v zahraničí za II. sv. války",
    czText: "Dejvické náměstí, Praha 6.",
  }, {
    img: "sochy/kolektivizace.jpg",
    enHeading: "Memorial to victims in agriculture under communistic dictatorship",
    enText: "Prague 1.",
    czHeading: "Památník objetem kolektivizace v zemědělství v domě komunismu",
    czText: "Praha 1.",
  }, {
    img: "sochy/nehmatatelna nmnm.jpg",
    enHeading: "Untouchable posture",
    enText: "Nové Město na Moravě.",
    czHeading: "Nehmatatelná postava",
    czText: "Nové Město na Moravě.",
  }, {
    img: "sochy/nehmatatelna detajl.jpg",
    enHeading: "Untouchable posture",
    enText: "",
    czHeading: "Nehmatatelná postava",
    czText: "",
  }, {
    img: "sochy/orel 1.jpg",
    enHeading: "Eagle",
    enText: "Orlová.",
    czHeading: "Orel",
    czText: "Orlová. ",
  }, {
    img: "sochy/orel 2.jpg",
    enHeading: "Eagle",
    enText: "Orlová.",
    czHeading: "Orel",
    czText: "Orlová.",
  }, {
    img: "sochy/kutna hora.jpg",
    enHeading: "In The Dimm",
    enText: "Kutná hora",
    czHeading: "V přísvitu",
    czText: "Kutná hora",
  }, {
    img: "sochy/prazsky hrad.jpg",
    enHeading: "In The Dimm",
    enText: "",
    czHeading: "V přísvitu",
    czText: "",
  }, {
    img: "sochy/konjukce andela 1.jpg",
    enHeading: "Conjunction of the angle with the Moon",
    enText: "Ulička Václava Havla, Brno.",
    czHeading: "Konjunkce anděla s Měsícem",
    czText: "Ulička Václava Havla, Brno.",
  }, {
    img: "sochy/konjukce andela 2.jpg",
    enHeading: "Conjunction of the angle with the Moon",
    enText: "Ulička Václava Havla, Brno.",
    czHeading: "Konjunkce anděla s Měsícem",
    czText: "Ulička Václava Havla, Brno.",
  }, {
    img: "sochy/konjukce andela 3.jpg",
    enHeading: "Conjunction of the angle with the Moon, glass",
    enText: "",
    czHeading: "Konjunkce anděla s Měsícem, sklo",
    czText: "",
  }, {
    img: "sochy/konjukce andela 4.jpg",
    enHeading: "Conjunction of the angle with the Moon, bronze",
    enText: "",
    czHeading: "Konjunkce anděla s Měsícem, bronz.",
    czText: "",
  }, {
    img: "sochy/ptace.jpg",
    enHeading: "The Hatching Bird",
    enText: "",
    czHeading: "Klubajicí se ptáče",
    czText: "",
  }, {
    img: "sochy/pohanka a koule.jpg",
    enHeading: "The Buckwheat and the Ball",
    enText: "",
    czHeading: "Pohanka a koule",
    czText: "",
  }, {
    img: "sochy/portugal marble.jpg",
    enHeading: "The Posture, Portuguese marble",
    enText: "",
    czHeading: "Postava, portugalský mramor",
    czText: "",
  }, {
    img: "sochy/povedoma postava.jpg",
    enHeading: "Familiar posture, glass",
    enText: "",
    czHeading: "Povědomá postava, sklo",
    czText: "",
  }, {
    img: "sochy/postava zdar.jpg",
    enHeading: "Familiar posture",
    enText: "Žďár n. Sázavou.",
    czHeading: "Povědomá postava",
    czText: "Žďár n. Sázavou.",
  }, {
    img: "sochy/socha praha.jpg",
    enHeading: "No title",
    enText: "",
    czHeading: "Bez názvu",
    czText: "",
  }, {
    img: "sochy/vysoka.jpeg",
    enHeading: "Familiar Posture",
    enText: "",
    czHeading: "Povědomá postava",
    czText: "",
  }, {
    img: "sochy/no title.jpg",
    enHeading: "No title, steel",
    enText: "Samsø, Denmark.",
    czHeading: "Bez názvu, železo",
    czText: "Samsø, Dánsko.",
  }, {
    img: "sochy/interference.jpg",
    enHeading: "Interference",
    enText: "Germany",
    czHeading: "Interference",
    czText: "Německo",
  }, {
    img: "sochy/homage.jpg",
    enHeading: "Hommage à Suzanne Renaud",
    enText: "",
    czHeading: "Hommage à Suzanne Renaud",
    czText: "",
  }, {
    img: "sochy/beroun.jpg",
    enHeading: "Beroun",
    enText: "",
    czHeading: "Beroun",
    czText: "",
  }, {
    img: "sochy/ze zaseri.jpg",
    enHeading: "From The Dimm",
    enText: "",
    czHeading: "Ze zášeří",
    czText: "",
  }, {
    img: "sochy/jan karnik nmnm.jpg",
    enHeading: "Portrait of Jan Karník",
    enText: "Nové Město na Moravě.",
    czHeading: "Portrét Jana Karníka",
    czText: "Nové Město na Moravě.",
  }, {
    img: "sochy/bronzove sochy 2.jpg",
    enHeading: "Peter Parléř's prize",
    enText: "",
    czHeading: "Cena Petra Parléře",
    czText: "",
  }, {
    img: "sochy/zlata.jpg",
    enHeading: "Model for a sculpture",
    enText: "",
    czHeading: "Model pro sochu",
    czText: "",
  }, {
    img: "sochy/sitovka.jpg",
    enHeading: "Memorial to the inventor of the net bag",
    enText: "Žďár n. Sázavou.",
    czHeading: "Pomník pro vynálezce síťovky",
    czText: "Žďár n. Sázavou.",
  },  {
    img: "sochy/trumpetak.jpg",
    enHeading: "School work: Trumpet player",
    enText: "",
    czHeading: "Školní práce: Trumpeťák",
    czText: "",
    subTopic: ""
  }, {
    img: "sochy/muz bez budoucnosti.jpg",
    enHeading: "School work: Still standing man",
    enText: "",
    czHeading: "Školní práce: Muž bez budoucnosti",
    czText: "",
  }, {
    img: "sochy/vytrubovany.jpg",
    enHeading: "School work: Trumpet player",
    enText: "",
    czHeading: "Školní práce: Trumpeťák",
    czText: "",
  }, {
    img: "sochy/zachrana.jpg",
    enHeading: "School work: Helping man",
    enText: "",
    czHeading: "Školní práce: Záchrana",
    czText: "",
  }, {
    img: "sochy/neznamemu.jpg",
    enHeading: "Memorial to an unknown poet.",
    enText: "",
    czHeading: "Pomník neznámému básníku",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/neznamemu 2.jpeg",
    enHeading: "Prometheus",
    enText: "",
    czHeading: "Prometheus",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/karl gustav jung.jpg",
    enHeading: "Carl Gustav Jung",
    enText: "",
    czHeading: "Carl Gustav Jung",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/pavel haas 1.jpg",
    enHeading: "Pavel Haas",
    enText: "",
    czHeading: "Pavel Haas",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/pavel haas 2.jpg",
    enHeading: "Pavel Haas",
    enText: "",
    czHeading: "Pavel Haas",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/satchmo.jpg",
    enHeading: "Luis Armstrong, allias Satchmo",
    enText: "Wax sculpture.",
    czHeading: "Luis Armstrong, allias Satchmo",
    czText: "Vosková socha.",
    subTopic: "portrety"
  }, {
    img: "sochy/dve hlavy.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/dve hlavy 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/hlava.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "portrety"
  }, {
    img: "sochy/vojna 1.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 3.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 4.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 5.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 6.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 7.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 8.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 9.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 10.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 11.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 12.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 13.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 14.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 15.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 16.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 17.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/vojna 18.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/krava.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/krava 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/krava 3.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }, {
    img: "sochy/krava 4.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "predAVU"
  }
];


const renderSculptures = () => {
    sculptures1Con.innerHTML = '';
    portretyCon.innerHTML = '';
    predAvuCon.innerHTML = '';
    let numOfSculptures1 = 0;
    let numOfPortrety = 0;

    sculptures.forEach((sculpture, index) => {
      const html = `
        <div class="artwork">
          <img src="${sculpture.img}" id="img-${String(index).padStart(2,"0")}"></img>
          <h4 id="h-${String(index).padStart(2,"0")}">${(localStorage.getItem("lang") === "en") ? sculpture.enHeading : sculpture.czHeading}</h4>
          <p id="p-${String(index).padStart(2,"0")}">${(localStorage.getItem("lang") === "en") ? sculpture.enText : sculpture.czText}</p>
        </div>`;

      if (sculpture.subTopic !== "portrety" && sculpture.subTopic !== "predAVU") {
        sculptures1Con.innerHTML += html; 
        numOfSculptures1 ++;

        const img = document.querySelectorAll("#sculptures-1 img")[sculptures.indexOf(sculpture)];
        if (img.naturalWidth > img.naturalHeight) {
          document.querySelectorAll("#sculptures-1 .artwork")[sculptures.indexOf(sculpture)].classList.add("wide");
        }
      } else if (sculpture.subTopic == "portrety") {
        portretyCon.innerHTML += html;
        numOfPortrety ++;

        const img = document.querySelectorAll("#sculptures-2 img")[sculptures.indexOf(sculpture) - numOfSculptures1];
        if (img.naturalWidth > img.naturalHeight) {
          document.querySelectorAll("#sculptures-2 .artwork")[sculptures.indexOf(sculpture) - numOfSculptures1].classList.add("wide");
        }
      } else {
        predAvuCon.innerHTML += html;
        
        const img = document.querySelectorAll("#sculptures-3 img")[sculptures.indexOf(sculpture) - numOfSculptures1 - numOfPortrety];
        if (img.naturalWidth > img.naturalHeight) {
          document.querySelectorAll("#sculptures-3 .artwork")[sculptures.indexOf(sculpture) - numOfSculptures1 - numOfPortrety].classList.add("wide");
        }
      }
  });
}

if (pageId === "sochy") {
  renderSculptures();
}

window.changeSculpturesToCz = () => {
  document.querySelector(".heading").innerText = "Sochy";
  document.querySelector("#sub-topic-links :nth-child(1)").innerText = "Sochy ↓";
  document.querySelector("#sub-topic-links :nth-child(2)").innerText = "Portréty ↓";
  document.querySelector("#sub-topic-links :nth-child(3)").innerText = "Kresby před studiu na AVU ↓";
  document.querySelector("#sculptures-2-heading").innerText = "Portréty";
  document.querySelector("#sculptures-3-heading").innerText = "Kresby před studiu na AVU";
  renderSculptures();
}

window.changeSculpturesToEn = () => {
  document.querySelector(".heading").innerText = "Sculptures";
  document.querySelector("#sub-topic-links :nth-child(1)").innerText = "Sculptures ↓";
  document.querySelector("#sub-topic-links :nth-child(2)").innerText = "Portraits ↓";
  document.querySelector("#sub-topic-links :nth-child(3)").innerText = "Drawings from before AVU ↓";
  document.querySelector("#sculptures-2-heading").innerText = "Portraits";
  document.querySelector("#sculptures-3-heading").innerText = "Drawings from before AVU";


  renderSculptures();
}
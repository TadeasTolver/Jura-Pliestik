const tvarearuceCon = document.querySelector("#photos-1");
const zatisiCon = document.querySelector("#photos-2");
const krajinyCon = document.querySelector("#photos-3");
const hudbaCon = document.querySelector("#photos-4");

const pageId = document.body.id;

export const photos = [
  {
    img: "fotky/orel.jpg",
    enHeading: "Jakub Orel Tomáš",
    enText: "Czech artist and curator.",
    czHeading: "Jakub Orel Tomáš",
    czText: "Český umělec a kurátor.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/orel 2.JPG",
    enHeading: "Jakub Orel, Marienka, and Matyáš",
    enText: "",
    czHeading: "Jakub Orel, Marienka a Matyáš",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/svarec.jpg",
    enHeading: "Welder",
    enText: "",
    czHeading: "Svářeč",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/rohde.JPG",
    enHeading: "",
    enText: "Danish collector of prehistoric tools.",
    czHeading: "",
    czText: "Dánský sběratel prehistorických nástrojů.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/malene.JPG",
    enHeading: "",
    enText: "Danish photographer.",
    czHeading: "",
    czText: "Dánská fotografka.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/panayi.jpg",
    enHeading: "Nicholas Panayi",
    enText: "Cypriot painter and educator.",
    czHeading: "Nicholas Panayi",
    czText: "Malír a pedagog z Kypru.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/vopalenska.jpg",
    enHeading: "Lucie Vopálenská",
    enText: "Journalist and moderator.",
    czHeading: "Lucie Vopálenská",
    czText: "Novinářka a moderátorka.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/stourac.jpg",
    enHeading: "Jiří Štourač",
    enText: "Czech painter.",
    czHeading: "Jiří Štourač",
    czText: "Český malíř.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/chirico.JPG",
    enHeading: "David Chirico",
    enText: "English lawyer.",
    czHeading: "David Chirico",
    czText: "Anglický advokát potřebných.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/fiala.jpg",
    enHeading: "Jiří Fiala",
    enText: "Czech mathematician and phylosopher.",
    czHeading: "Jiří Fiala",
    czText: "Český matematik a filozof.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/michael - lucia.JPG",
    enHeading: "Michael and Lucia",
    enText: "Italian photographer and his wife.",
    czHeading: "Michael a Lucia",
    czText: "Italský fotograf a jeho žena.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/jiricna.jpg",
    enHeading: "Eva Jiřičná",
    enText: "Czech architect.",
    czHeading: "Eva Jiřičná",
    czText: "Česká architektka.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/hank - jaime.JPG",
    enHeading: "Hank and Jaime Pascual",
    enText: "Dutch translator, Hank, and Spanish car mechanic, Jaime Pascual.",
    czHeading: "Hank a Jaime Pascual",
    czText: "Holandská překladatelka, Hank, a Španělský automechanik, Jaime Pascual.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/lavan.png",
    enHeading: "Lavan",
    enText: "British bank consultant.",
    czHeading: "Lavan",
    czText: "Britský bankovní poradce.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/gynekolove z londyna.JPG",
    enHeading: "My friend's parents, gynecologists from London.",
    enText: "",
    czHeading: "Rodiče mé kamarádky, gynekologové z Londýna.",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/kuzmack.JPG",
    enHeading: "Mark Kuzmack",
    enText: "American Search Engine Optimization Consultant, investor, and writer.",
    czHeading: "Mark Kuzmack",
    czText: "Americký konzultant pro optimalizaci vyhledávání, investor a spisovatel.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/snezana - vychrena.JPG",
    enHeading: "Bulgarian sisters Sněžana and Vichrena.",
    enText: "",
    czHeading: "Bulharské sestry Sněžana a Vichrena.",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/spotishwood.JPG",
    enHeading: "Tracy Spotishwood",
    enText: "Welsh actress, film director, and script writer.",
    czHeading: "Tracy Spotishwood",
    czText: "Velšská herečka, režisérka a scénáristka.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/kardio.jpg",
    enHeading: "Cardiologist with his fiancée.",
    enText: "",
    czHeading: "Kardiolog se svojí snoubenkou",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/moravec.JPG",
    enHeading: "Dan Moravec",
    enText: "Czech journalist.",
    czHeading: "Dan Moravec",
    czText: "Český novinář.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/zarsky.jpg",
    enHeading: "Jakub Žárský",
    enText: "Czech artic biologist.",
    czHeading: "Jakub Žárský",
    czText: "Český arktický biolog.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/ungrova - unger.jpg",
    enHeading: "Jan Unger and Bára Ungrová",
    enText: 'Frontmen of "Zrní" and "Duo" band.',
    czHeading: "Jan Unger a Bára Ungrová",
    czText: "Frontmani kapely Zrní a kapely Duo.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/slivova.jpg",
    enHeading: "Hana Slívová",
    enText: "Czech administrator, moderator, and drawer.",
    czHeading: "Hana Slívová",
    czText: "Česká administratorka, moderátorka a kreslířka.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/slivova - kyspersky.jpg",
    enHeading: "Hana Slívová and Martin Kyšperský",
    enText: "Czech singer, Martin Kyšperský, and Czech administrator, moderator, and drawer, Hana Slívová.",
    czHeading: "Český zpěvák, Martin Kyšperský a česká administratorka, moderátorka a kreslířka, Hana Slívová.",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/sonntag.jpg",
    enHeading: "Tom Sonntag",
    enText: "Finnish pianist, experimenter and composer.",
    czHeading: "Tom Sonntag",
    czText: "Finský pianista, experimentátor a skladatel.",
    subTopic: "tvarearuce"
  },
  {
    img: "fotky/sklo.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 3.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 4.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 5.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 6.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 7.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 8.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 9.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 10.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/kytka.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/blyzna.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/kytka 2.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/okno.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/okno 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/letadlo.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/letadlo 2.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/letadlo 3.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "zatisi"
  }, {
    img: "fotky/krajina.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 2.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 3.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 4.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 5.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 6.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 8.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 9.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 10.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 11.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 12.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 13.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 14.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "krajiny"
  }, {
    img: "fotky/divadlo.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 3.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 4.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 5.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 6.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"    
  },
  {
    img: "fotky/koncert.jpg",
    enHeading: "",
    enText: "",
    czHeading: "John Abercombie a Rudi Linka",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 2.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 3.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 4.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 5.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 6.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 7.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 8.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 11.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 12.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 13.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 14.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck.jpg",
    enHeading: "",
    enText: "British duo: The Fuck Buttons, festival Roskilde, Denmark.",
    czHeading: "Britské duo: The Fuck Buttons, festival Roskilde, Dánsko.",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 3.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 4.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 5.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 6.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 7.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 8.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 9.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/kalendar 1.png",
    enHeading: "",
    enText: "",
    czHeading: "Parafráze univerzálního hudebního kalendáře",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/leden.png",
    enHeading: "Censored by the administrator",
    enText: "",
    czHeading: "Cenzurováno administrátorem",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/unor.png",
    enHeading: "Censored by the administrator",
    enText: "",
    czHeading: "Cenzurováno administrátorem",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/brezen.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/duben.png",
    enHeading: "Censored by the administrator",
    enText: "",
    czHeading: "Cenzurováno administrátorem",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/kveten.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/cerven.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/cervenec.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/srpen.png",
    enHeading: "Censored by the administrator",
    enText: "",
    czHeading: "Cenzurováno administrátorem",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/zari.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/rijen.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }, {
    img: "fotky/listopad.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
    subTopic: "hudba"
  }
]

const renderPhotos = () => {
  tvarearuceCon.innerHTML = '';
  let numOfTvarearuce = 0;
  zatisiCon.innerHTML = '';
  let numOfZatisi = 0;
  krajinyCon.innerHTML = '';
  let numOfKrajiny = 0;
  hudbaCon.innerHTML = '';

  photos.forEach((photo, index) => {
    const html = `
      <div class="artwork">
        <img src="${photo.img}" id="img-${String(index).padStart(2,"0")}" loading="lazy"></img>
        <h4 id="h-${String(index).padStart(2,"0")}">${(localStorage.getItem("lang") === "en") ? photo.enHeading : photo.czHeading}</h4>
        <p id="p-${String(index).padStart(2,"0")}">${(localStorage.getItem("lang") === "en") ? photo.enText : photo.czText}</p>
      </div>`;
    if (photo.subTopic === "tvarearuce") {
      tvarearuceCon.innerHTML += html;
      numOfTvarearuce ++;

      const img = document.querySelectorAll("#photos-1 img")[photos.indexOf(photo)];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#photos-1 .artwork")[photos.indexOf(photo)].classList.add("wide");
      }
    } else if (photo.subTopic === "zatisi") {
      zatisiCon.innerHTML += html;
      numOfZatisi ++;   
      
      const img = document.querySelectorAll("#photos-2 img")[photos.indexOf(photo) - numOfTvarearuce];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#photos-2 .artwork")[photos.indexOf(photo) - numOfTvarearuce].classList.add("wide");
      }
    } else if (photo.subTopic === "krajiny") {
      krajinyCon.innerHTML += html;
      numOfKrajiny ++; 
      
      const img = document.querySelectorAll("#photos-3 img")[photos.indexOf(photo) - numOfTvarearuce - numOfZatisi];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#photos-3 .artwork")[photos.indexOf(photo) - numOfTvarearuce - numOfZatisi].classList.add("wide");
      }
    } else {
      hudbaCon.innerHTML += html;

      const img = document.querySelectorAll("#photos-4 img")[photos.indexOf(photo) - numOfTvarearuce - numOfZatisi - numOfKrajiny];
      if (img.naturalWidth > img.naturalHeight) {
        document.querySelectorAll("#photos-4 .artwork")[photos.indexOf(photo) - numOfTvarearuce - numOfZatisi - numOfKrajiny].classList.add("wide");
      }
    }
  });

  
}

if (pageId === "fotky")
renderPhotos();

window.changephotosToCz = () => {
  document.querySelector(".heading").innerText = "Fotografie";
  document.querySelector("#sub-topic-links :nth-child(1)").innerText = "Tváře a ruce - portréty ↓";
  document.querySelector("#sub-topic-links :nth-child(2)").innerText = "Zátiší ↓";
  document.querySelector("#sub-topic-links :nth-child(3)").innerText = "Krajiny ↓";
  document.querySelector("#sub-topic-links :nth-child(4)").innerText = "Hudba a divadlo ↓";

  document.querySelector("#photos-1-heading").innerText = "Tváře a ruce";
  document.querySelector("#photos-2-heading").innerText = "Zátiší";
  document.querySelector("#photos-3-heading").innerText = "Krajiny";
  document.querySelector("#photos-4-heading").innerText = "Hudba a divadlo";

  renderPhotos();
}

window.changephotosToEn = () => {
  document.querySelector(".heading").innerText = "Photographs";
  document.querySelector("#sub-topic-links :nth-child(1)").innerText = "Hands and faces - portraits ↓";
  document.querySelector("#sub-topic-links :nth-child(2)").innerText = "Still life ↓";
  document.querySelector("#sub-topic-links :nth-child(3)").innerText = "Landscapes ↓";
  document.querySelector("#sub-topic-links :nth-child(4)").innerText = "Music and theatre ↓";

  document.querySelector("#photos-1-heading").innerText = "Hands and faces - portraits";
  document.querySelector("#photos-2-heading").innerText = "Still life";
  document.querySelector("#photos-3-heading").innerText = "Landscapes";
  document.querySelector("#photos-4-heading").innerText = "Music and theatre";

  renderPhotos();
}

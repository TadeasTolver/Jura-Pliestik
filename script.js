const tvarearuceCon = document.querySelector("#photos-1");
const zatisiCon = document.querySelector("#photos-2");
const krajinyCon = document.querySelector("#photos-3");
const hudbaCon = document.querySelector("#photos-4");

const pageId = document.body.id;

export const photos = [
  {
    img: "fotky/jessica aue.jpg",
    enHeading: "Jessica Aue",
    enText: "American song writer",
    czHeading: "Jessica Aue",
    czText: "Americká skladatelka",
    subTopic: "tvarearuce"
  },  {
    img: "fotky/tomas ruzicka.jpg",
    enHeading: "Tomáš Růžička",
    enText: "Czech writer",
    czHeading: "Tomáš Růžička",
    czText: "Český spisovatel",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/politi.jpg",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/elena pliestikova.jpg",
    enHeading: "Elena Plieštiková",
    czHeading: "Elena Plieštiková",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/tine psychyologist.jpg",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/torkild grosbøll.jpg",
    enHeading: "Torkild Grosbøll",
    czHeading: "Torkild Grosbøll",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/ukul miro.jpg",
    enHeading: "Ukul Miro",
    czHeading: "Ukul Miro",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/vincenc koutnik.jpg",
    enHeading: "Vincenc Koutník",
    czHeading: "Vincenc Koutník",
    subTopic: "tvarearuce"
  },   {
    img: "fotky/vladimir herak.jpg",
    enHeading: "Vladimír Herák",
    czHeading: "Vladimír Herák",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/justin sparks.jpg",
    enHeading: "Justin Sparks",
    czHeading: "Justin sparks",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/derek paton.jpg",
    enHeading: "Derek Paton",
    enText: "",
    czHeading: "Derek Paton",
    czText: "",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/eliska zdarv sestra.jpg",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/elizaveta doktorka ukrajna.jpg",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/hana a martin jelinkovy.jpg",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/honza mayer architekt.jpg",
    enHeading: "Honza Mayer",
    enText: "Czech architect",
    czHeading: "Honza Mayer",
    czText: "Český architekt",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/irena h.jpg",
    enHeading: "Irena H.",
    czHeading: "Irena H.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/jan sedmidubsky.jpg",
    enHeading: "Jan Sedmidubský",
    czHeading: "Jan Sedmidubský",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/jana skalicka umelkyne.jpg",
    enHeading: "Jana Skalická",
    enText: "Czech artist",
    czHeading: "Jana Skalická",
    czText: "Česká umělkyně",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/olga.jpg",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/stryc a neter inde.jpg",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/tomas rusin.jpg",
    enHeading: "Tomáš Rusín",
    enText: "Czech architect",
    czHeading: "Tomáš Rusín",
    czText: "Český architekt",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/orel.jpg",
    enHeading: "Jakub Orel Tomáš",
    enText: "Czech artist and curator.",
    czHeading: "Jakub Orel Tomáš",
    czText: "Český umělec a kurátor.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/orel 2.JPG",
    enHeading: "Jakub Orel, Marienka, and Matyáš",
    czHeading: "Jakub Orel, Marienka a Matyáš",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/svarec.jpg",
    enHeading: "Welder",
    czHeading: "Svářeč",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/rohde.JPG",
    enText: "Danish collector of prehistoric tools.",
    czText: "Dánský sběratel prehistorických nástrojů.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/malene.JPG",
    enText: "Danish photographer.",
    czText: "Dánská fotografka.",
    subTopic: "tvarearuce"
  }, {
    img: "fotky/panayi.jpg",
    enHeading: "Nicholas Panayi",
    enText: "Cypriot painter and educator.",
    czHeading: "Nicholas Panayi",
    czText: "Malíř a pedagog z Kypru.",
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
    czHeading: "Rodiče mé kamarádky, gynekologové z Londýna.",
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
    czHeading: "Bulharské sestry Sněžana a Vichrena.",
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
    czHeading: "Kardiolog se svojí snoubenkou",
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
    enText: "Czech singer, Martin Kyšperský, and Czech editor, moderator, and drawer, Hana Slívová.",
    czHeading: "Hana Slívová a Martin Kyšperský",
    czText: "Český zpěvák, Martin Kyšperský a česká editorka, moderátorka a kreslířka, Hana Slívová.",
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
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 3.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 4.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 5.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 6.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 7.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 8.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 9.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/sklo 10.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/kytka.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/blyzna.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/kytka 2.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/okno.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/okno 2.jpg",
    subTopic: "zatisi"
  }, {
    img: "fotky/letadlo.JPG",
    subTopic: "zatisi"
  }, {
    img: "fotky/letadlo 2.png",
    subTopic: "zatisi"
  }, {
    img: "fotky/letadlo 3.png",
    subTopic: "zatisi"
  }, {
    img: "fotky/krajina.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 2.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 3.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 4.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 5.JPG",

    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 6.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 8.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 9.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 10.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 11.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 12.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 13.JPG",
    subTopic: "krajiny"
  }, {
    img: "fotky/krajina 14.jpg",
    subTopic: "krajiny"
  }, {
    img: "fotky/divadlo.jpg",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 2.jpg",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 3.jpg",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 4.JPG",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 5.jpg",
    subTopic: "hudba"    
  }, {
    img: "fotky/divadlo 6.jpg",
    subTopic: "hudba"    
  },{
    img: "fotky/koncert.jpg",
    czHeading: "John Abercombie a Rudi Linka",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 2.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 3.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 4.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 5.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 6.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 7.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 8.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 11.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 12.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 13.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/koncert 14.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck.jpg",
    enText: "British duo: The Fuck Buttons, festival Roskilde, Denmark.",
    czHeading: "Britské duo: The Fuck Buttons, festival Roskilde, Dánsko.",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 2.jpg",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 3.jpg",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 4.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 5.JPG",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 6.jpg",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 7.jpg",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 8.jpg",
    subTopic: "hudba"
  }, {
    img: "fotky/fuck 9.jpg",
    subTopic: "hudba"
  }, {
    img: "fotky/kalendar 1.png",
    czHeading: "Parafráze univerzálního hudebního kalendáře",
    subTopic: "hudba"
  }, {
    img: "fotky/leden.png",
    enHeading: "Censored by the administrator",
    czHeading: "Cenzurováno administrátorem",
    subTopic: "hudba"
  }, {
    img: "fotky/unor.png",
    enHeading: "Censored by the administrator",
    czHeading: "Cenzurováno administrátorem",
    subTopic: "hudba"
  }, {
    img: "fotky/brezen.png",
    subTopic: "hudba"
  }, {
    img: "fotky/duben.png",
    enHeading: "Censored by the administrator",
    czHeading: "Cenzurováno administrátorem",
    subTopic: "hudba"
  }, {
    img: "fotky/kveten.png",
    subTopic: "hudba"
  }, {
    img: "fotky/cerven.png",
    subTopic: "hudba"
  }, {
    img: "fotky/cervenec.png",
    subTopic: "hudba"
  }, {
    img: "fotky/srpen.png",
    enHeading: "Censored by the administrator",
    czHeading: "Cenzurováno administrátorem",
    subTopic: "hudba"
  }, {
    img: "fotky/zari.png",
    subTopic: "hudba"
  }, {
    img: "fotky/rijen.png",
    subTopic: "hudba"
  }, {
    img: "fotky/listopad.png",
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
        <h4 id="h-${String(index).padStart(2,"0")}">${(photo.czHeading) ? (localStorage.getItem("lang") === "en") ? photo.enHeading : photo.czHeading : ""}</h4>
        <p id="p-${String(index).padStart(2,"0")}">${(photo.czText) ? (localStorage.getItem("lang") === "en") ? photo.enText : photo.czText : ""}</p>
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

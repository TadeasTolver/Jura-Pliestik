const designCon = document.querySelector("#designs");

const pageId = document.body.id;

export const designs = [
  {
    img: "designy/bystrice.jpg",
    enHeading: "Lighting of sv. Vavřinec church, Bystřice n. P.",
    enText: "Opal glass. In collaboration with Zdeněk Lhotský Glassworks. 2004.",
    czHeading: "Osvětlení kostela sv. Vavřince, Bystřice n. P.",
    czText: "Opálové sklo. Ve spolupráci se sklárnou Zdeňka Lhotského. 2004.",
  }, {
    img: "designy/bystrice 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/hg modra.jpg",
    enHeading: "High grass bookcase",
    enText: "Glued plywood, 2014. Bronze winner A'DESIGN AWARD.",
    czHeading: "Knihovna vysoká tráva.",
    czText: "Lepená překlyška, 2014. Bronze winner A'DESIGN AWARD.",
  }, {
    img: "designy/hg cerna.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/mriz skica.JPG",
    enHeading: "Sketch of gate",
    enText: "",
    czHeading: "Skica brány",
    czText: "",
  }, {
    img: "designy/mriz.JPG",
    enHeading: "High grass gate",
    enText: "Wrought iron.",
    czHeading: "Brána vysoká tráva",
    czText: "Kované železo.",
  }, {
    img: "designy/trencin 1.JPEG",
    enHeading: "Fountain in Trenčín",
    enText: "2018. Bronze. 4m x 8m.",
    czHeading: "Kašna v Trenčíně.",
    czText: "2018. Bronz. 4m x 8m.",
  }, {
    img: "designy/trencin 2.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/trencin 3.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/vize 97 1.jpg",
    enHeading: "Sketch for the VIZE 97 prize",
    enText: "",
    czHeading: "Skica k ceně VIZE 97",
    czText: "",
  }, {
    img: "designy/vize 97 2.JPEG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/pitko sv petr.jpg",
    enHeading: "Drinking fountain sv. Petr",
    enText: "Brno",
    czHeading: "Pítko sv. Petr",
    czText: "Brno",
  }, {
    img: "designy/ambasada.jpg",
    enHeading: "Czech embassy in Luxembourg",
    enText: "",
    czHeading: "Českě velvyslanectví v Lucembursku.",
    czText: "",
  }, {
    img: "designy/ostrava 5.JPG",
    enHeading: "Fountain on Masarykovo náměstí, Ostrava",
    enText: "Bronze. 0.5m x 25m.",
    czHeading: "Fontána Masarykovo náměstí, Ostrava",
    czText: "Bronz. 0.5m x 25m.",
  }, {
    img: "designy/ostrava 1.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/ostrava 4.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/keramicke modely.JPG",
    enHeading: "Sketches for fountain",
    enText: "Fired ceramics.",
    czHeading: "Skicy k fontáně",
    czText: "Pálená keramika.",
  }, {
    img: "designy/hrob.jpg",
    enHeading: "Design for a friend's grave.",
    enText: "Vinohradský hřbitov, Prague.",
    czHeading: "Návrh hrobu pro kamaráda.",
    czText: "Vinohradský hřbitov, Praha.",
  }, {
    img: "designy/hrob 2.png",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/hrob 3.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/hrob 4.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/hrob 5.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/hrob 6.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/hrob 7.jpg",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/sklo na desce.jpg",
    enHeading: "Heart in glass",
    enText: "",
    czHeading: "Srdce ve sklu",
    czText: "",
  }, {
    img: "designy/hodonin navrh.jpg",
    enHeading: "Model of the fountain for Hodonín.",
    enText: "20m x 2.5m. Bronze.",
    czHeading: "Model fontány pro Hodonín.",
    czText: "20m x 2.5m. Bronz.",
  }, {
    img: "designy/bila skica.jpg",
    enHeading: "Untouchable posture",
    enText: "Sketch for a statue. Drypoint.",
    czHeading: "Nehmatatelná postava",
    czText: "Skica k soše. Suchá jehla.",
  }, {
    img: "designy/skicy.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }, {
    img: "designy/vizualizace.jpg",
    enHeading: "Visualization",
    enText: "",
    czHeading: "Vizualizace",
    czText: "",
  }, {
    img: "designy/novy jimramov.JPG",
    enHeading: "Playground for kids",
    enText: "Branches and jute. Height: 3 m. Nový Jimramov 2023.",
    czHeading: "Lezení pro děti.",
    czText: "Větve a juta. V: 3m. Nový Jimramov 2023.",
  }, {
    img: "designy/slavnikovec.JPG",
    enHeading: "",
    enText: "",
    czHeading: "",
    czText: "",
  }
];

window.renderDesigns = () => {
  designCon.innerHTML = '';
  
  designs.forEach((design, index) => {
    designCon.innerHTML += `
      <div class="artwork">
        <img src="${design.img}" id="img-${String(index).padStart(2,"0")}" loading="lazy"></img>
        <h4 id="h-${String(index).padStart(2,"0")}">${(localStorage.getItem("lang") === "en") ? design.enHeading : design.czHeading}</h4>
        <p id="p-${String(index).padStart(2,"0")}">${(localStorage.getItem("lang") === "en") ? design.enText : design.czText}</p>
      </div>`;

    const img = document.querySelectorAll("#designs img")[designs.indexOf(design)];
    if (img.naturalWidth > img.naturalHeight) {
      document.querySelectorAll("#designs .artwork")[designs.indexOf(design)].classList.add("wide");
    }
  });
}

if (pageId === "design") {
  renderDesigns();
}


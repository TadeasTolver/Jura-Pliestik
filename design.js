const designCon = document.querySelector("#designs");

const pageId = document.body.id;

export const designs = [
  {
    img: "designy/bystrice.jpg",
    enHeading: "Lighting of st. Vavřinec church, Bystřice n. P.",
    enText: "Opal glass. In collaboration with Zdeněk Lhotský Glassworks. 2004.",
    czHeading: "Osvětlení kostela sv. Vavřince, Bystřice n. P.",
    czText: "Opálové sklo. Ve spolupráci se sklárnou Zdeňka Lhotského. 2004.",
  }, {
    img: "designy/bystrice 2.jpg",
  }, {
    img: "designy/hg modra.jpg",
    enHeading: "High grass bookcase",
    enText: `Glued plywood, 2014. Bronze winner <a href="https://competition.adesignaward.com/ada-winner-design.php?ID=34200" target="_blank" class="artwork-link">A'DESIGN AWARD</a>.`,
    czHeading: "Knihovna vysoká tráva.",
    czText: `Lepená překliška, 2014. Bronze winner <a href="https://competition.adesignaward.com/ada-winner-design.php?ID=34200" target="_blank" class="artwork-link">A'DESIGN AWARD</a>.`,
  }, {
    img: "designy/hg cerna.jpg",
  }, {
    img: "designy/mriz skica.JPG",
    enHeading: "Sketch of a gate",
    czHeading: "Skica brány",
  }, {
    img: "designy/mriz.JPG",
    enHeading: "High grass gate",
    enText: "Wrought iron.",
    czHeading: "Brána Vysoká tráva",
    czText: "Kované železo.",
  }, {
    img: "designy/brana.jpg",
    enHeading: "Sketch for a gate",
    czHeading: "Skica pro bránu",
  }, {
    img: "designy/brana 2.gif",
    enHeading: "Sketch for a gate",
    czHeading: "Skica pro bránu",
  }, {
    img: "designy/brana 3.JPG",
    enHeading: "High grass gate",
    czHeading: "Brána Vysoká tráva",
  }, {
    img: "designy/brana 4.JPG",
  }, {
    img: "designy/trencin 1.JPEG",
    enHeading: "Fountain in Trenčín, Slovakia",
    enText: "2018. Bronze. 4m x 8m.",
    czHeading: "Kašna v Trenčíně, Slovensko.",
    czText: "2018. Bronz. 4m x 8m.",
  }, {
    img: "designy/trencin 2.jpg",
  }, {
    img: "designy/trencin 3.JPG",
  }, {
    img: "designy/vize 97 1.jpg",
    enHeading: "Sketch for the VIZE 97 prize",
    czHeading: "Skica k ceně VIZE 97",
  }, {
    img: "designy/vize 97 2.JPEG",
  }, {
    img: "designy/pitko sv petr.jpg",
    enHeading: "Drinking fountain",
    enText: "Brno, st. Peter's catedral. Granite",
    czHeading: "Pítko",
    czText: "Brno, chrám sv. Petra. Granit.",
  }, {
    img: "designy/ambasada.jpg",
    enHeading: "Czech embassy in Luxembourg",
    enText: "",
    czHeading: "Českě velvyslanectví v Lucembursku.",
    czText: "",
  }, {
    img: "designy/ostrava 5.JPG",
    enHeading: "Fountain on Masaryk's náměstí, Ostrava",
    enText: "Bronze. 0.5m x 25m.",
    czHeading: "Fontána Masarykovo náměstí, Ostrava",
    czText: "Bronz. 0.5m x 25m.",
  }, {
    img: "designy/ostrava 1.JPG",
  }, {
    img: "designy/ostrava 4.JPG",
  }, {
    img: "designy/keramicke modely.JPG",
    enHeading: "Sketches for a fountain",
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
    enHeading: "Grave for Inge",
    enText: "Hrob pro Inge",
  }, {
    img: "designy/hrob 3.JPG",
    enHeading: "Grave for a British sailor from WWII",
    czHeading: "Hrob pro britského náámořníka z II. svět. války",
  }, {
    img: "designy/hrob 4.jpg",
    enHeading: "Grave for Kaj",
    enText: "Náhrobek pro Kaje",
  }, {
    img: "designy/hrob 5.jpg",
  }, {
    img: "designy/hrob 6.jpg",
  }, {
    img: "designy/hrob 7.jpg",
  }, {
    img: "designy/sklo na desce.jpg",
    enHeading: "The heart in glass",
    czHeading: "Srdce ve sklu",
  }, {
    img: "designy/hodonin navrh.jpg",
    enHeading: "Model of the fountain for Hodonín",
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
  }, {
    img: "designy/vizualizace.jpg",
    enHeading: "Visualization",
    czHeading: "Vizualizace",
  }, {
    img: "designy/novy jimramov.JPG",
    enHeading: "Playground for kids",
    enText: "Branches and jute. Height: 3 m. Nový Jimramov 2023.",
    czHeading: "Lezení pro děti.",
    czText: "Větve a juta. V: 3m. Nový Jimramov 2023.",
  }, {
    img: "designy/slavnikovec.JPG",
    enHeading: "Reliquary of st. Adalbert",
    enText: "Prague, cathedral of st. Vítus, Wenceslas and Adalbert",
    czHeading: "Relikviář sv. Vojtěch",
    czText: "Praha, chrám sv. Víta, Václava a Vojtěcha.",
  }
];

window.renderDesigns = () => {
  designCon.innerHTML = '';
  
  designs.forEach((design, index) => {
    designCon.innerHTML += `
      <div class="artwork">
        <img src="${design.img}" id="img-${String(index).padStart(3,"0")}" loading="lazy"></img>
        <h4 id="h-${String(index).padStart(3,"0")}">${(design.czHeading) ? (localStorage.getItem("lang") === "en") ? design.enHeading : design.czHeading : ""}</h4>
        <p id="p-${String(index).padStart(3,"0")}">${(design.czText) ? (localStorage.getItem("lang") === "en") ? design.enText : design.czText : ""}</p>
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

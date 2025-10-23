import { sculptures } from "./sochy.js";
import { designs } from "./design.js";
import { photos } from "./fotky.js";

const pageId = document.body.id;

if (visualViewport.width < 655) {
    if (pageId === "index") {
        console.log("hello")
        document.querySelector("#main-img").src = "main photo small.jpg";
    }
}

let imgViewerImgId;

const renderImgViewer = () => {
    document.querySelector("#img-viewer img").src = document.querySelector(`#img-${imgViewerImgId}`).src;
    document.querySelector("#img-viewer h3").innerText = document.querySelector(`#h-${imgViewerImgId}`).innerHTML;
    document.querySelector("#img-viewer p").innerText = document.querySelector(`#p-${imgViewerImgId}`).innerHTML;
    document.body.style.overflow = "hidden";
}

const setEventListeners = () => {
    document.querySelectorAll(".artwork img").forEach((image) => {
        image.addEventListener("click", () => {
            document.querySelector("#img-viewer").style.display = "flex";
            document.querySelector("#img-viewer img").src = image.src;

            imgViewerImgId = image.id.slice(-2);
            renderImgViewer();
        });
    });
}

setEventListeners();

window.previousImg = () => {
    if (imgViewerImgId > 0) {
        imgViewerImgId = String(Number(imgViewerImgId) - 1).padStart(2, "0");
        renderImgViewer();
    }
}

window.nextImg = () => {
    let artworksArray
    if (pageId === "sochy") {
        artworksArray = sculptures;
    } else if (pageId === "design") {
        artworksArray = designs;
    } else {
        artworksArray = photos;
    }

    if (imgViewerImgId < artworksArray.length - 1) {
        imgViewerImgId = String(Number(imgViewerImgId) + 1).padStart(2, "0");
        renderImgViewer();
    }
}


document.querySelector("#menu-btn").addEventListener("click", () => { // expand or close menu when clicked on menu button,
    if (document.querySelector("#menu-btn").innerText === "☰") {
        document.querySelector("#name-heading").style.display = "none";
        document.querySelector("#site-links").style.display = "flex";
        document.querySelector("#language-btns").style.display = "flex";
        document.querySelector("#menu-btn").innerText = "×";
    } else {
        document.querySelector("#name-heading").style.display = "block";
        document.querySelector("#site-links").style.display = "none";
        document.querySelector("#language-btns").style.display = "none";
        document.querySelector("#menu-btn").innerText = "☰";
    }
});

window.changeToCz = () => {
    localStorage.setItem("lang", "cz");

    document.querySelector("#en-btn").style.border = "2px solid black";
    document.querySelector("#cz-btn").style.border = "2px solid #32a87f";
    document.querySelector("#cz-btn").style.outline = "0.5px solid black";
    document.querySelector("#en-btn").style.outline = "none";
    document.querySelector("#site-links :nth-child(1)").innerText = `Sochy, `;
    document.querySelector("#site-links :nth-child(3)").innerText = `fotografie, `;
    document.querySelector("#site-links :nth-child(4)").innerText = `texty.`;

    if (pageId === "index") {
        document.querySelector("#bio-link").innerHTML = "↗ &nbsp;O MĚ";
        document.querySelector("#about-me h3").innerHTML = "O mě";
        document.querySelector("#about-me p").innerHTML = "Jiří Plieštik (nar. 28. června 1956 v Novém Městě na Moravě) je český sochař, fotograf, designer, básník a pedagog. Studoval na AVU (1981–87), působil na AVU a na Samsø Højskole v Dánsku. Od roku 2000 je nezávislým umělcem s řadou realizací v ČR i zahraničí.";
        document.querySelector("#signature").innerHTML = '<span id="circle"></span>&nbspSTRÁNKY VYTVOŘIL: &nbsp<span id="name">TADEÁŠ PLIEŠTIK</span>';
    } else if (pageId === "sochy") {
        changeSculpturesToCz();
    } else if (pageId === "design") {
        renderDesigns();
    } else if (pageId === "fotky") {
        changephotosToCz();
    } else if (pageId === "texty") {
        renderTexts();
        document.querySelector(".heading").innerHTML = "Texty";
    }

    setEventListeners();
}

window.changeToEn = () => {
    localStorage.setItem("lang", "en");
    
    document.querySelector("#cz-btn").style.border = "2px solid black";
    document.querySelector("#en-btn").style.border = "2px solid #32a87f";
    document.querySelector("#en-btn").style.outline = "0.5px solid black";
    document.querySelector("#cz-btn").style.outline = "none";
    document.querySelector("#site-links :nth-child(1)").innerText = `Sculptures, `;
    document.querySelector("#site-links :nth-child(3)").innerText = `photographs, `;
    document.querySelector("#site-links :nth-child(4)").innerText = `texts.`;

    if (pageId === "index") {
        document.querySelector("#bio-link").innerHTML = "↗ &nbsp;ABOUT ME";
        document.querySelector("#about-me h3").innerHTML = "About me";
        document.querySelector("#about-me p").innerHTML = "Jiří Plieštik (born June 28, 1956 in Nové Město na Moravě) is a Czech sculptor, photographer, designer, poet, and educator. He studied at the Academy of Fine Arts (1981–87) and worked at the Academy and at Samsø Højskole, Denmark. Since 2000, he has been an independent artist with a number of projects in Czechia and abroad.";
        document.querySelector("#signature").innerHTML = '<span id="circle"></span>&nbspTHE SITE WAS MADE BY: &nbsp<span id="name">TADEÁŠ PLIEŠTIK</span>';
    } else if (pageId === "sochy") {
        changeSculpturesToEn();
    } else if (pageId === "design") {
        renderDesigns();
    } else if (pageId === "fotky") {
        changephotosToEn();
    } else if (pageId === "texty") {
        renderTexts();
        document.querySelector(".heading").innerHTML = "Texts (only in Czech)";
    }
    
    setEventListeners();
}

if (localStorage.getItem("lang") === "en") {
    changeToEn();
}

window.openBio = () => {
    document.querySelector("#about-me").style.display = "block";
    document.querySelector("#main-img").style.filter = "blur(2px)";
}

document.querySelector("body").addEventListener("click", (event) => {
    if (pageId === "index") {
        if (event.target !== document.querySelector("#bio-link")) {
            document.querySelector("#about-me").style.display = "none";
            document.querySelector("#main-img").style.filter = "blur(0)";
        }
    } else if (pageId === "sochy" || pageId === "design" || pageId === "fotky") {
        if (event.target === document.querySelector("#img-viewer img") || event.target.tagName !== "IMG" && event.target.tagName !== "BUTTON") {
            document.querySelector("#img-viewer").style.display = "none";
            document.body.style.overflow = "";
        }
    }
});
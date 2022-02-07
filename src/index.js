const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');

/* Helper functions */
function fillTextContent (nodeObject, index, fillObj) {
  const textContent = nodeObject.querySelector(`.text-content:nth-of-type(${index})`);
  textContent.querySelector("h4").textContent = fillObj.h4;
  textContent.querySelector("p").textContent = fillObj.p;
}

/* Declare variables */
/* Helper data variables */
const mainContent = siteContent["main-content"];
const contact = siteContent.contact;
const footer = siteContent.footer;
const images = siteContent.images;

/* Query Selector Variables */
const navLinks = document.querySelectorAll("header nav a");

const ctaTitle = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");

const mainContTop = document.querySelector(".main-content .top-content");
const mainContBottom = document.querySelector(".main-content .bottom-content");

/* Add text contents */
// loop through nav links to insert link text
navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
})

ctaTitle.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

fillTextContent(mainContTop, 1, {
    h4: mainContent["features-h4"], 
    p: mainContent["features-content"]
});

fillTextContent(mainContTop, 2, {
  h4: mainContent["about-h4"],
  p: mainContent["about-content"]
});

fillTextContent(mainContBottom, 1, {
  h4: mainContent["services-h4"],
  p: mainContent["services-content"]
});

fillTextContent(mainContBottom, 2, {
  h4: mainContent["product-h4"],
  p: mainContent["product-content"]
});

fillTextContent(mainContBottom, 3, {
  h4: mainContent["vision-h4"],
  p: mainContent["vision-content"]
});

document.querySelector(".contact h4").textContent = contact["contact-h4"];
document.querySelector(".contact p:nth-of-type(1)").textContent = contact.address;
document.querySelector(".contact p:nth-of-type(2)").textContent = contact.phone;
document.querySelector(".contact p:nth-of-type(3)").textContent = contact.email;

document.querySelector("footer a").textContent = footer.copyright;

/* Add class names */

const italicLinks = Array.from(navLinks);
italicLinks.map(link => {
  link.classList.add("italic");
})

document.querySelector("footer a").classList.add("bold");

/* Add image sources */

document.querySelector("#logo-img").setAttribute('src', images["logo-img"]);
document.querySelector("#cta-img").setAttribute('src', images["cta-img"]);
document.querySelector("#middle-img").setAttribute('src', images["accent-img"]);


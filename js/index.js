const siteContent = {
  "nav": {
    "nav-item-0": "Sign-In",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Blog",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation

//Nav Links
let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
})

//Changed Nav text color
selectedNavLinks.forEach((link) => {
  link.style.color = "green";
})

//Added Two Items 
selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
// selectedNavLinks.prepend(createNewNode("Sign-In"));
// selectedNavLinks.appendChild(createNewNode("Blog"));

const navItem1 = document.createElement("a");
navItem1.textContent = "Prepend";
navItem1.setAttribute("style", "color: green;");
document.queryCommandEnabled("nav").prepend(navItem1);

const navItem7 = document.createElement("a");
navItem7.textContent = "Append";
navItem7.setAttribute("style, color: green;");
document.queryCommandEnabled("nav").append(navItem7);

//CTA
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
// console.log(document.getElementsByClassName("cta")[0])

let ctaText = document.getElementsByClassName("cta-text")[0];
ctaText.getElementsByClassName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByClassName("button")[0].innerHTML = siteContent["cta"]["button"];


//Main
let textContentList = document.querySelectorAll(".text-content");

textContentList[0] = document.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0] = document.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1] = document.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1] = document.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2] = document.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2] = document.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3] = document.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3] = document.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4] = document.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4] = document.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact

let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

//Footer
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

// document.body.style.backgroundImage="url('https://i.ibb.co/3NW1BMx/markus-spiske-iar-af-B0-QQw-unsplash.jpg')";

document.addEventListener('mouseover'), function(){

}
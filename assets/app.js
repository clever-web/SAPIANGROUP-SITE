function smoothscroll(hash) {

  $("html, body").animate({
      scrollTop: $(hash).offset().top,
    },
    800,
  );
}

function closeProfile() {
  let pop = document.getElementById("company-profile");
  pop.style.animation = "pop-down 0.6s ease-in-out forwards";
}
var pages = [{
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603377434/sapian-group/FlashWallet_flashgroup_slider-_sapian-group_fhgnhb.png",
    heading: "Flashwallet",
    text: "All-in-one crypto and fiat wallet",
    a_link: "#",
    a_text: "Coming Soon",
    a_class: "coming-soon"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603377433/sapian-group/FlashXchanger_flashgroup_slider-_sapian-group_kitsq5.png",
    heading: "FlashXchanger",
    text: "Omnichannel exchange for trading derivatives and digital currency",
    a_link: "https://www.flashxchanger.com/",
    a_text: "Visit",
    a_class: "visit"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603377435/sapian-group/oztcard_flashgroup_slider-_sapian-group_amvmer.png",
    heading: "OZT card",
    text: "Unique biometric all-in-one smart card with onboard encrypted cold storage",
    a_link: "https://oztcard.com/",
    a_text: "Visit",
    a_class: "visit"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603377435/sapian-group/masternode-2_flashgroup_slider-_sapian-group_ekvruy.png",
    heading: "OZTG Core Wallet",
    text: "Masternode and Staking rewards wallet for wealth creation and passive income",
    a_link: "https://ozeety.com/",
    a_text: "Visit",
    a_class: "visit"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603377433/sapian-group/cryptostation_flashgroup_slider-_sapian-group_vytb17.png",
    heading: "Cryptostation",
    text: "An all-in-one information station in various models, providing Blockchain based educational information. It also has full ATM-style functionality, with the capability to dispense your own OZTGcard and the possibility to buy crypto directly from the Cryptostation. ",
    a_link: "https://blog.flashmoni.io/cryptostation-by-flashgroup-3dfb6c218d77",
    a_text: "Lern More",
    a_class: "visit"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603378148/Flashcom__flashgroup_slider-_sapian-group_t2vysj.svg",
    heading: "Flashcom",
    text: "A dedicated team to design all graphics and user interfaces for corporate branding and image across the whole group of companies",
    a_link: "#",
    a_text: "Learn More",
    a_class: "visit"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603377433/sapian-group/FlashAdchain_flashgroup_slider-_sapian-group_sywwow.png",
    heading: "Adchain",
    text: "A targeted ad service across all our platforms, to provide the user with information and promo offers on their interested areas and location. The revenue from this will be shared with the clients and also contribute towards our charity foundation.",
    a_link: "https://blog.flashmoni.io/what-is-flashadchain-8bdd6abacd8e",
    a_text: "Lern More",
    a_class: "visit"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/q_auto/v1603290401/sapian-group/handshake_sapian-group.svg",
    heading: "Flashcare",
    text: "An independently managed foundation through which the group of companies will contribute towards helping our chosen projects and causes. Self-sustainable humanity is our  mission and we will work hard in collaboration with other NGOs and government bodies to bring this to reality",
    a_link: "https://flashcare.org/",
    a_text: "Visit",
    a_class: "visit"
  },
];


var idx = 0;


function next() {
  if (idx > 8 || idx < 0) return;

  var new_left_data = pages[idx + 1];
  if (idx != 7) {
    idx = idx + 1;
  } else {
    idx = 0;
    new_left_data = pages[idx];
  }

  // changing link
  setTimeout(() => {

    let aLink = document.getElementById("comp_link");

    aLink.innerHTML = new_left_data.a_text;
    aLink.setAttribute('href', new_left_data.a_link);
    aLink.setAttribute('target', '_BLANK');
    aLink.className = new_left_data.a_class;
  }, 1500);

  // changing image
  setTimeout(() => {
    document.getElementById("slid_img").src = new_left_data.img;
  }, 2250);

  // changing header
  setTimeout(() => {
    document.getElementById("flashgroup-heading").innerHTML = new_left_data.heading;
  }, 2000);

  // changing text
  setTimeout(() => {
    document.getElementById("side-text-p").innerHTML = new_left_data.text;
  }, 2500);

  document.getElementById('next-btn').removeAttribute("onclick");
  document.getElementById('prev-btn').removeAttribute("onclick");

  let slider = document.querySelector('.slider');
  setTimeout(slide, 300);
  slider.removeAttribute("style");


  let slideText = document.querySelector('#slide-text');
  let slideImage = document.querySelector('#slide-image');
  let heading = document.querySelector('#flashgroup-heading');
  let comp_link = document.querySelector('#comp_link');

  setTimeout(() => {
    slideText.removeAttribute('style');
    slideImage.removeAttribute('style');
    heading.removeAttribute('style');
    comp_link.removeAttribute('style');
  }, 4500);
  heading.style.animation = "flip-right 4s ease";
  slideImage.style.animation = "flip-right 4.5s ease";
  slideText.style.animation = "flip-right 5s ease";
  comp_link.style.animation = "flip-right 3s ease";


  let btn_next = document.querySelector('.next-btn');
  setTimeout(() => {
    btn_next.removeAttribute('style');
  }, 4500);
  btn_next.style.animation = "go-ease-right ease-in-out 4.5s forwards";
  setTimeout(() => {
    document.getElementById('prev-btn').setAttribute('onclick', "prev();");
    document.getElementById('next-btn').setAttribute('onclick', "next();");
  }, 5000);
}

function prev() {

  if (idx < 0) return;

  var new_left_data = pages[idx - 1];
  if (idx != 0) {
    idx = idx - 1;
  } else {
    idx = 7;
    new_left_data = pages[7];
  }

  // changing link
  setTimeout(() => {
    let aLink = document.getElementById("comp_link");

    aLink.innerHTML = new_left_data.a_text;
    aLink.setAttribute('href', new_left_data.a_link);
    aLink.setAttribute('target', '_BLANK');
    aLink.className = new_left_data.a_class;
  }, 1500);

  // changing image
  setTimeout(() => {
    document.getElementById("slid_img").src = new_left_data.img;
  }, 2250);

  // changing header
  setTimeout(() => {
    document.getElementById("flashgroup-heading").innerHTML = new_left_data.heading;
  }, 2000);

  // changing text
  setTimeout(() => {
    document.getElementById("side-text-p").innerHTML = new_left_data.text;
  }, 2500);

  setTimeout(() => {
    document.getElementById("comp_link").innerHTML = new_left_data.a_text;
  }, 1500);
  document.getElementById('next-btn').removeAttribute("onclick");
  document.getElementById('prev-btn').removeAttribute("onclick");
  let slider = document.querySelector('.slider');
  setTimeout(slide, 300);
  slider.removeAttribute("style");


  let slideText = document.querySelector('#slide-text');
  let slideImage = document.querySelector('#slide-image');
  let heading = document.querySelector('#flashgroup-heading');
  let comp_link = document.querySelector('#comp_link');

  setTimeout(() => {
    slideText.removeAttribute('style');
    slideImage.removeAttribute('style');
    heading.removeAttribute('style');
    comp_link.removeAttribute('style');
  }, 4500);
  heading.style.animation = "flip-left 4s ease";
  slideImage.style.animation = "flip-left 4.5s ease";
  slideText.style.animation = "flip-left 5s ease";
  comp_link.style.animation = "flip-left 3s ease";



  let btn_prev = document.querySelector('.prev-btn');
  setTimeout(() => {
    btn_prev.removeAttribute('style');
  }, 4500);
  btn_prev.style.animation = "go-ease-left ease-in-out 4.5s forwards";
  setTimeout(() => {
    document.getElementById('prev-btn').setAttribute('onclick', "prev();");
    document.getElementById('next-btn').setAttribute('onclick', "next();");
  }, 5000);
}



function slide() {
  let slider = document.querySelector('.slider');
  slider.style.animation = "flip 3s ease";
}

function closeDiv(compPage) {

  let parent = document.querySelector('#what-we-do');
  parent.style.transition = "max-height .3 !important";
  parent.style.minHeight = "0";

  let companyPage = document.getElementById(compPage);
  companyPage.style.animation = "close .6s ease-in-out forwards"

  setTimeout(() => {
    companyPage.style.zIndex = "991";
  }, 600);

  let logo = companyPage.querySelector('.comp-logo');
  let paragraph = companyPage.querySelector('.comp-p');

  if (logo !== null && paragraph !== null) {
    paragraph.removeAttribute('style');
    logo.removeAttribute('style');
  }

}

function showCompanyData(company, page) {

  let parent = document.querySelector('#what-we-do');

  parent.style.transition = "max-height .3 !important";
  parent.style.minHeight = "120vh";
  smoothscroll('#' + page);


  let elem = document.getElementById(company);
  let rect = elem.getBoundingClientRect();

  let x = rect.left + 40;
  let y = rect.top + 40;

  let companyPage = document.getElementById(page);

  let logo = companyPage.querySelector('.comp-logo');
  let paragraph = companyPage.querySelector('.comp-p');

  if (logo !== null && paragraph !== null) {
    logo.style.animation = "fade-up 1s ease-in-out forwards";
    paragraph.style.animation = "fade-up 1.5s ease-in-out forwards 1s";
  }
  companyPage.style.zIndex = "999";
  companyPage.style.clipPath = "circle(0% at " + x + "px " + y + "px)";
  companyPage.style.animation = "open .6s ease-in-out forwards";
  setTimeout(() => {
    companyPage.style.clipPath = "circle(100% at " + x + "px " + y + "px)";
  }, 600);
}

let fun = document.querySelector('.fun');
setInterval(() => {
  fun.classList.toggle('flip');
}, 6000);

let sec = document.getElementsByClassName('sec-1');
let duration = 4;
// setInterval(shootStart, 1000);

function shootStart() {

  let dot = document.createElement('div');
  dot.className = 'dot';

  sec.innerHTML += dot.innerHTML;

  var t = Math.floor(Math.random() * (98 - 1)) + 1;
  var l = Math.floor(Math.random() * (98 - 1)) + 1;
  var delay = Math.floor(Math.random() * (5 - 1)) + 1;

  dot.style.left = l + "%";
  dot.style.top = t + "%";

  dot.style.animation = "blink";
  dot.style.animationDuration = duration + "s";
  dot.style.animationIterationCount = "forwards";
  dot.style.animationDelay = delay + "s";
  setTimeout(() => {
    dot.removeAttribute('style');
  }, duration);
}


function showFounders() {

  let page = document.querySelector('#founders');
  let btn = document.querySelector('#founders-btn');

  let x = 100;
  let y = 100;

  console.log(x);

  page.style.clipPath = "circle(0% at " + x + "% " + y + "%";
  page.style.animation = "open .6s ease-in-out forwards";
  setTimeout(() => {
    page.style.clipPath = "circle(100% at " + x + "% " + y + "%)";
  }, 600);
}
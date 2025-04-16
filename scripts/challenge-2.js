const skillsArray = [
  {
    name: "HTML",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2016",
    type: "frontend",
  },
  {
    name: "Redux",
    experience: "2017",
    type: "frontend",
  },
  {
    name: "React Testing Library",
    experience: "2020",
    type: "frontend",
  },
  {
    name: "Node.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Express.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Mongodb",
    experience: "2020",
    type: "backend",
  },
];

// Add skills dynamically

//---------------------------------------------------------------------------------//
const creatElement = (className, dataType, dataName, tageName = "li", text) => {
  const newElement = document.createElement(tageName);
  newElement.classList.add(className);
  if (dataType !== undefined) newElement.dataset.type = dataType;
  if (dataName !== undefined) newElement.dataset.name = dataName;
  if (text !== undefined) newElement.innerText = text;
  return newElement;
};

const year = new Date().getFullYear();

const liHtml = creatElement(
  "skills__iteme",
  skillsArray[0].type,
  skillsArray[0].name,
  "li",
  undefined
);
const h2Html = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[0].name
);

const spanHtml = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[0].experience + " Years"
);
liHtml.appendChild(h2Html);
liHtml.appendChild(spanHtml);
//-----------------------------------------
const liCss = creatElement(
  "skills__iteme",
  skillsArray[1].type,
  skillsArray[1].name,
  "li",
  undefined
);

const h2Css = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[1].name
);

const spanCss = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[1].experience + " Years"
);

liCss.appendChild(h2Css);
liCss.appendChild(spanCss);

//---------------------------------------

const liJS = creatElement(
  "skills__iteme",
  skillsArray[2].type,
  skillsArray[2].name
);

const h2Js = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[2].name
);

const spanJs = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[2].experience + " Years"
);

liJS.appendChild(h2Js);
liJS.appendChild(spanJs);

//----------------------------------------------

const liReact = creatElement(
  "skills__iteme",
  skillsArray[3].type,
  skillsArray[3].name,
  "li",
  undefined
);

const h2React = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[3].name
);

const spanReact = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[3].experience + " Years"
);

liReact.appendChild(h2React);
liReact.appendChild(spanReact);

// ----------------------------
const liRdeux = creatElement(
  "skills__iteme",
  skillsArray[4].type,
  skillsArray[4].name,
  "li",
  undefined
);

const h2Redux = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[4].name
);

const spanRedux = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[4].experience + " Years"
);

liRdeux.appendChild(h2Redux);
liRdeux.appendChild(spanRedux);
//----------------------------
const liReactTestingLibrary = creatElement(
  "skills__iteme",
  skillsArray[5].type,
  skillsArray[5].name,
  "li",
  undefined
);

const h2ReactTestingLibrary = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[5].name
);

const spanReactTestingLibrary = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[5].experience + " Years"
);

liReactTestingLibrary.appendChild(h2ReactTestingLibrary);
liReactTestingLibrary.appendChild(spanReactTestingLibrary);

// ----------------------------

const liNodejs = creatElement(
  "skills__iteme",
  skillsArray[6].type,
  skillsArray[6].name,
  "li",
  undefined
);

const h2Node = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[6].name
);

const spanNode = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[6].experience + " Years"
);

liNodejs.appendChild(h2Node);
liNodejs.appendChild(spanNode);

// ----------------------------

const liExpressjs = creatElement(
  "skills__iteme",
  skillsArray[7].type,
  skillsArray[7].name,
  "li",
  undefined
);

const h2Express = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[7].name
);

const spanExpress = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[7].experience + " Years"
);

liExpressjs.appendChild(h2Express);
liExpressjs.appendChild(spanExpress);
// ----------------------------

const liMongodb = creatElement(
  "skills__iteme",
  skillsArray[8].type,
  skillsArray[8].name,
  "li",
  undefined
);

const h2Mongo = creatElement(
  "skills__tittle",
  undefined,
  undefined,
  "h2",
  skillsArray[8].name
);

const spanMongo = creatElement(
  "skills__years",
  undefined,
  undefined,
  "span",
  year - skillsArray[8].experience + " Years"
);

liMongodb.appendChild(h2Mongo);
liMongodb.appendChild(spanMongo);
//---------------------------------------
const skillsList = document.querySelector(".skills__list");
skillsList.appendChild(liHtml);
skillsList.appendChild(liCss);
skillsList.appendChild(liJS);
skillsList.appendChild(liReact);
skillsList.appendChild(liRdeux);
skillsList.appendChild(liReactTestingLibrary);
skillsList.appendChild(liNodejs);
skillsList.appendChild(liExpressjs);
skillsList.appendChild(liMongodb);

// Calculate years of experience automatically

/* ✨ Bonus ✨ */
// Add filters to skills section
const activeButton = document.querySelectorAll(".skills__button");

const activeFunction = (event, item) => {
  const activeElement = document.querySelector(".skills__button--isActive");
  if (activeElement) {
    activeElement.classList.remove("skills__button--isActive");
  }
  item.classList.add("skills__button--isActive");
  document.querySelector(
    ".skills__list"
  ).classList = `skills__list ${item.dataset.type}`;
};

activeButton.forEach((item) => {
  item.addEventListener("click", (event) => activeFunction(event, item));
});

/*
important variables used throughout
*/
var backgroundColors = [
  "#615073",
  "#005E7A",
  "#ADCAD6",
  "#320E3B",
  "#615073",
  "#005E7A",
  "#ADCAD6",
  "#320E3B",
  "#615073"
];
var backgroundColor = "#FFF1EB";
var linkColor = "#B1B8E4";
var gridBorderRadius = "10px";
var divBorderRadius = "10px";
var parSideMargin = "30px";

/*
set background color
*/
document.body.style["background-color"] = backgroundColor;

/*
create section divs
*/
var homeDiv = document.createElement("div");
var aboutDiv = document.createElement("div");
var researchDiv = document.createElement("div");
var programmingProjectsDiv = document.createElement("div");
var hireMeDiv = document.createElement("div");
var hobbiesDiv = document.createElement("div");
var divIds = ["Home", "About", "Research", "Programming_Projects", "Hire_Me", "Hobbies"];
var mainDivs = [homeDiv, aboutDiv, researchDiv, programmingProjectsDiv, hireMeDiv, hobbiesDiv]
for (var i = 0; i < mainDivs.length; i ++){
  var div = mainDivs[i];
  div.style["margin-bottom"] = "5px";
  div.id = divIds[i];
  document.body.appendChild(div);
}

/*
size homeDiv and add grid divs
*/
homeDiv.style["width"] = document.body.clientWidth;
homeDiv.style["height"] = "98vh";
var divsInHomeDiv = [];
var rows = [];
for (var i = 0; i < 3; i ++){ //rows
  var row = document.createElement("div");
  row.style["display"] = "flex";
  row.style["flex-direction"] = "row";
  row.style["flex-wrap"] = "wrap";
  for (var j = 0; j < 3; j ++){ //cols
    var div = document.createElement("div");
    div.style["margin"] = "2px";
    div.style["border-radius"] = gridBorderRadius;
    div.style["width"] = ((document.body.clientWidth / 3) - 10) + "px";
    div.style["height"] = "32vh";
    divsInHomeDiv.push(div);
    row.appendChild(div)
  }
  homeDiv.appendChild(row);
}

/*
add content to homeDiv grid divs
*/
var gridDivTexts = ["Home", "About", "Pic1", "Research", "Hannah Fisher", "Programming Projects", "Pic2", "Hire Me", "Hobbies"];
var gridDivLinks = ["#Home", "#About","", "#Research","", "#Programming_Projects","", "#Hire_Me","#Hobbies"];
for (var i = 0; i < 9; i ++){
  var div = divsInHomeDiv[i];
  div.style["background-color"] = backgroundColors[i];
  var a = document.createElement("a");
  a.innerHTML = gridDivTexts[i];
  a.href = gridDivLinks[i];
  a.style["width"] = "100%";
  a.style["height"] = "100%";
  a.style["text-decoration"] = "none";
  a.style["color"] = backgroundColor;
  a.style["font-size"] = "2vw";
  a.style["display"] = "flex";
  a.style["justify-content"] = "center";
  a.style["align-items"] = "center";
  div.appendChild(a);
}

/*
change the content of the central grid box in home div
*/
divsInHomeDiv[4].innerHTML = "";
divsInHomeDiv[4].style["color"] = backgroundColor;
var textHannah = document.createElement("div");
var textFisher = document.createElement("div");
textHannah.innerHTML = "Hannah";
textFisher.innerHTML = "Fisher";
textHannah.style["text-align"] = "left";
textFisher.style["text-align"] = "right";
textHannah.style["margin-top"] = "0px";
textHannah.style["margin-left"] = "5px";
textFisher.style["margin-bottom"] = "15px";
textFisher.style["margin-right"] = "10px";
resizeHannahFisher();
divsInHomeDiv[4].appendChild(textHannah);
divsInHomeDiv[4].appendChild(textFisher);

/*
function to resize the Hannah Fisher text in the middle box
*/
function resizeHannahFisher(){
  var rect = divsInHomeDiv[4].getBoundingClientRect();
  if (rect.width / rect.height > 1.45){
    textHannah.style["font-size"] = (rect.height / 2.2) + "px";
    textFisher.style["font-size"] = (rect.height / 2.2) + "px";
  }
  else{
    textHannah.style["font-size"] = (rect.width / 3.4) + "px";
    textFisher.style["font-size"] = (rect.width / 3.4) + "px";
  }
}

/*
add content to about div
*/
var aboutPar = document.createElement("p");
aboutPar.innerHTML += "<br><b>About</b><br><br>I'm Hannah! <br>I am a \
sophomore at the California Institute of Technology double majoring in \
Mechanical Engineering and Computer Science. <br>This Spring, I am taking time \
away from classes to pursue an internship at the NASA Johnson Space Center.\
<br> My academic and career interests include robotics, outer space, and \
automation. <br>In my spare time, I also enjoy baking bread, crocheting, and \
taking longs walks. <br>I am currently living in Portland, Oregon.<br><br>";
aboutPar.style["font-size"] = "1.5vw";
aboutPar.style["margin-left"] = parSideMargin;
aboutPar.style["margin-right"] = parSideMargin;
aboutPar.style["margin-top"] = "0px";
aboutPar.style["margin-bottom"] = "0px";
aboutPar.style["color"] = backgroundColor;
aboutDiv.style["background-color"] = backgroundColors[1];
aboutDiv.style["border-radius"] = divBorderRadius;
aboutDiv.appendChild(aboutPar);

/*
add content to research div
*/
var researchTitlePar = document.createElement("p");
researchTitlePar.style["margin-left"] = parSideMargin;
researchTitlePar.style["margin-right"] = parSideMargin;
researchTitlePar.style["margin-top"] = "0px";
researchTitlePar.style["margin-bottom"] = "0px";
researchTitlePar.innerHTML = "<br><b>Research</b><br><br>";
researchSurf2020Par = document.createElement("p");
researchSurf2020Par.style["margin-left"] = parSideMargin;
researchSurf2020Par.style["margin-right"] = parSideMargin;
researchSurf2020Par.style["margin-top"] = "0px";
researchSurf2020Par.style["margin-bottom"] = "0px";
researchSurf2020Par.innerHTML += "Caltech Summer Undergraduate Research Fellowship (SURF) 2020<br><br>";
researchSurf2020Par.innerHTML += "I worked with Dr. Niema Moshiri at UC San \
Diego to create a website to build and visualize single-linkage hiearchical \
clustering trees of viral sequences based on pairwise distances between the \
sequences and a user-chosen clustering threshold.<br><br>Abstract:";
var surfLink1 = document.createElement("a");
surfLink1.href = "https://moshiri-lab.github.io/TreeN93/";
surfLink1.innerHTML = "https://moshiri-lab.github.io/TreeN93/";
surfLink1.target = "_blank";
surfLink1.style["color"] = linkColor;
var surfLink2 = document.createElement("a");
surfLink2.href = "https://github.com/Moshiri-Lab/TreeN93";
surfLink2.innerHTML = "https://github.com/Moshiri-Lab/TreeN93";
surfLink2.target = "_blank";
surfLink2.style["color"] = linkColor;
researchSurf2020AbstractPar = document.createElement("p");
researchSurf2020AbstractPar.style["margin-right"] = parSideMargin;
researchSurf2020AbstractPar.style["margin-left"] = "60px";
researchSurf2020AbstractPar.style["margin-top"] = "0px";
researchSurf2020AbstractPar.style["margin-bottom"] = "0px";
researchSurf2020AbstractPar.style["font-size"] = "1.2vw";
researchSurf2020AbstractPar.innerHTML += "<br>Epidemiologists use transmission \
clustering based on genetic sequences to analyze the spread of disease. As the \
collection of viral sequences has become easier and less expensive, molecular \
epidemiology efforts are rapidly increasing in scale. HIV-TRACE, a standard \
tool in viral molecular epidemiology, performs transmission clustering by \
estimating pairwise distances between viral sequences under the TN93 model of \
evolution and linking individuals whose pairwise distances are below a chosen \
distance threshold. The choice of distance threshold is challenging; it varies \
between viruses, populations, and regions of the viral genome. As a result, \
epidemiologists often perform transmission clustering using multiple distance \
thresholds, but it is unclear what specific thresholds should be selected. \
Here, we present TreeN93, a web-based tool that enables studying transmission \
clustering results across all possible thresholds. Given pairwise distances, \
TreeN93 constructs an ultrametric single-linkage hierarchical clustering tree; \
cutting the resulting tree d distance above the leaves yields the transmission \
clusters obtained using threshold d. TreeN93 allows the user to visualize and \
interact with the clustering tree, and users can easily view and export \
clusters at any selected distance threshold. TreeN93 is available at ";
researchSurf2020AbstractPar.appendChild(surfLink1);
researchSurf2020AbstractPar.innerHTML += ", and the code is available at ";
researchSurf2020AbstractPar.appendChild(surfLink2);
researchSurf2020AbstractPar.innerHTML += ".<br><br>";
var researchSurf2020PosterPar = document.createElement("p");
researchSurf2020PosterPar.style["margin-left"] = parSideMargin;
researchSurf2020PosterPar.style["margin-right"] = parSideMargin;
researchSurf2020PosterPar.style["margin-top"] = "0px";
researchSurf2020PosterPar.style["margin-bottom"] = "0px";
researchSurf2020PosterPar.innerHTML = "Poster:<br><br>";
var surf2020PosterFrame = document.createElement("iframe");
surf2020PosterFrame.src = "documents/SURF_2020_Poster_Hannah_Fisher.pdf#view=FitH";
surf2020PosterFrame.style["width"] = "80vw";
surf2020PosterFrame.style["height"] = "80vh";
surf2020PosterFrame.style["margin-left"] = "60px";
surf2020PosterFrame.style["margin-right"] = parSideMargin;
surf2020PosterFrame.style["margin-top"] = "0px";
surf2020PosterFrame.style["margin-bottom"] = "0px";
var surf2020PosterCaption = document.createElement("p");
surf2020PosterCaption.style["margin-left"] = "60px";
surf2020PosterCaption.style["margin-right"] = parSideMargin;
surf2020PosterCaption.style["margin-top"] = "0px";
surf2020PosterCaption.style["margin-bottom"] = "0px";
surf2020PosterCaption.style["font-size"] = "1vw";
surf2020PosterCaption.innerHTML = "1st Place in the Vodopia-Hasson Poster Competition<br><br><br>";
researchDiv.style["font-size"] = "1.5vw";
researchDiv.style["color"] = backgroundColor;
researchDiv.style["background-color"] = backgroundColors[3];
researchDiv.style["border-radius"] = divBorderRadius;
researchDiv.appendChild(researchTitlePar);
researchDiv.appendChild(researchSurf2020Par);
researchDiv.appendChild(researchSurf2020AbstractPar);
researchDiv.appendChild(researchSurf2020PosterPar);
researchDiv.appendChild(surf2020PosterFrame);
researchDiv.appendChild(surf2020PosterCaption);

/*
add content to programming projects div
*/
ppIntroDiv = document.createElement("div");
ppIntroDiv.style["margin-left"] = parSideMargin;
ppIntroDiv.style["margin-right"] = parSideMargin;
ppIntroDiv.style["margin-top"] = "0px";
ppIntroDiv.style["margin-bottom"] = "0px";
ppIntroDiv.innerHTML = "<br><b>Programming Projects</b><br><br> I have worked on a \
variety of programming projects, both for school and for fun. View all of my projects at ";
var githubLink = document.createElement("a");
githubLink.href = "https://github.com/hannah-fisher";
githubLink.innerHTML = "github.com/hannah-fisher";
githubLink.target = "_blank";
githubLink.style["color"] = linkColor;
ppIntroDiv.appendChild(githubLink);
ppIntroDiv.innerHTML += ".<br><br>";
ppListDiv = document.createElement("div");
ppListDiv.style["margin-left"] = parSideMargin;
ppListDiv.style["margin-right"] = parSideMargin;
ppListDiv.style["margin-top"] = "0px";
ppListDiv.style["margin-bottom"] = "0px";
ppListDiv.innerHTML = "Here is a selection of some of my favorite and most recent projects:";
var ppul = document.createElement("ul");
ppul.style["font-size"] = "1.2vw";
pplis = [];
for (var i = 0; i < 4; i ++){
  var li = document.createElement("li");
  pplis.push(li);
  ppul.appendChild(li);
}
pplis[0].innerHTML = "This entire personal website, which I coded in HTML and \
JavaScript. The code can be found here: ";
personalWebsiteLink = document.createElement("a");
personalWebsiteLink.href = "https://github.com/hannah-fisher/hannah-fisher.github.io";
personalWebsiteLink.innerHTML = "hannah-fisher.github.io";
personalWebsiteLink.target = "_blank";
personalWebsiteLink.style["color"] = linkColor;
pplis[0].appendChild(personalWebsiteLink);
pplis[0].innerHTML += "<br><br>"
pplis[1].innerHTML = "An implementation of several sorting algorithms (bubble \
  sort, selection sort, merge sort, and quick sort) written in Java. The code \
  can be found here: ";
sortingLink = document.createElement("a");
sortingLink.href = "https://github.com/hannah-fisher/SortingImplementationJava";
sortingLink.innerHTML = "SortingImplementationJava";
sortingLink.target = "_blank";
sortingLink.style["color"] = linkColor;
pplis[1].appendChild(sortingLink);
pplis[1].innerHTML += "<br><br>";
pplis[2].innerHTML = "An implementation of the ID3 Decision Tree algorithm \
written in Python. The code can be found here: ";
id3Link = document.createElement("a");
id3Link.href = "https://github.com/hannah-fisher/ID3DecisionTreePython";
id3Link.innerHTML = "ID3DecisionTreePython";
id3Link.target = "_blank";
id3Link.style["color"] = linkColor;
pplis[2].appendChild(id3Link);
pplis[2].innerHTML += "<br><br>";
pplis[3].innerHTML = "A navigation program using Dijkstra's algorithm, with a \
GUI to visualize the shortest path between two points, and the option to output \
and view the path in Google Earth. This project was written in Java. The code \
can be found here: ";
navigationLink = document.createElement("a");
navigationLink.href = "https://github.com/hannah-fisher/NavigationJava"
navigationLink.innerHTML = "NavigationJava";
navigationLink.target = "_blank";
navigationLink.style["color"] = linkColor;
pplis[3].appendChild(navigationLink);
ppListDiv.appendChild(ppul);
ppListDiv.innerHTML += "<br>";
programmingProjectsDiv.style["font-size"] = "1.5vw";
programmingProjectsDiv.style["color"] = backgroundColor;
programmingProjectsDiv.style["background-color"] = backgroundColors[5];
programmingProjectsDiv.style["border-radius"] = divBorderRadius;
programmingProjectsDiv.appendChild(ppIntroDiv);
programmingProjectsDiv.appendChild(ppListDiv);

/*
add content to the hire me div
*/
var hireMePar = document.createElement("p");
hireMePar.innerHTML = "<br><b>Hire Me<b><br><br>";
hireMePar.innerHTML += "Resume:<br>";
var resumeFrame = document.createElement("iframe");
resumeFrame.src = "documents/resume.pdf";
resumeFrame.style["width"] = "80%";
resumeFrame.style["height"] = "70vh";
hireMePar.appendChild(resumeFrame);
hireMePar.innerHTML += "<br><br>Connect with me on LinkedIn at ";
var linkedinLink = document.createElement("a");
linkedinLink.href = "https://www.linkedin.com/in/hannah-m-fisher/";
linkedinLink.innerHTML = "https://www.linkedin.com/in/hannah-m-fisher/";
linkedinLink.target = "_blank";
linkedinLink.style["color"] = linkColor;
hireMePar.appendChild(linkedinLink);
hireMePar.innerHTML += "<br><br>Email me at ";
var emailLink = document.createElement("a");
emailLink.href = "mailto:hannahmaryfisher@gmail.com";
emailLink.innerHTML = "hannahmaryfisher@gmail.com";
emailLink.style["color"] = linkColor;
hireMePar.appendChild(emailLink);
hireMePar.innerHTML += "<br><br>";
hireMePar.style["font-size"] = "1.5vw";
hireMePar.style["margin-left"] = parSideMargin;
hireMePar.style["margin-right"] = parSideMargin;
hireMePar.style["margin-top"] = "0px";
hireMePar.style["margin-bottom"] = "0px";
hireMePar.style["color"] = backgroundColor;
hireMeDiv.style["background-color"] = backgroundColors[7];
hireMeDiv.style["border-radius"] = divBorderRadius;
hireMeDiv.appendChild(hireMePar);

/*
add content to the hobbies div
*/
var hobbiesPar = document.createElement("p");
hobbiesPar.innerHTML = "<br><b>Hobbies</b><br>";
hobbiesPar.style["font-size"] = "1.5vw";
hobbiesPar.style["margin-left"] = parSideMargin;
hobbiesPar.style["margin-right"] = parSideMargin;
hobbiesPar.style["margin-top"] = "0px";
hobbiesPar.style["margin-bottom"] = "0px";
hobbiesPar.style["color"] = backgroundColor;
hobbiesDiv.style["background-color"] = backgroundColors[8];
hobbiesDiv.style["border-radius"] = divBorderRadius;
var runningDiv = document.createElement("div");
runningDiv.style["display"] = "flex";
var runningNames = document.createElement("p");
var runningTimes = document.createElement("p");
var runningCities = document.createElement("p");
var runningDates = document.createElement("p");
runningNames.innerHTML = "<u>Long Distance Running</u><br>Surf City Marathon<br>Bridge of the Goddess Half Marathon<br>Holiday Half Marathon<br>Newport Marathon<br>Holiday Half Marathon<br>Holiday Half Marathon<br>Hippie Chick Half Marathon";
runningTimes.innerHTML = "<br>4:47:39<br>2:12:23<br>2:08:53<br>4:53:38<br>2:19:54<br>2:09:55<br>2:40:33";
runningCities.innerHTML = "<br>Huntington Beach CA<br>Cascade Locks OR<br>Portland OR<br>Newport OR<br>Portland OR<br>Portland OR<br>Hillsboro OR";
runningDates.innerHTML = "<br>2/2/2020<br>9/14/2019<br>12/9/2018<br>6/2/2018<br>12/10/2017<br>12/11/2016<br>5/7/2016";
for (var p of [runningNames, runningTimes, runningCities, runningDates]){
  runningDiv.appendChild(p);
  p.style["padding-right"] = "20px";
}
runningDiv.style["font-size"] = "1.5vw";
runningDiv.style["margin-left"] = parSideMargin;
runningDiv.style["margin-right"] = parSideMargin;
runningDiv.style["margin-top"] = "0px";
runningDiv.style["margin-bottom"] = "0px";
runningDiv.style["color"] = backgroundColor;
runningDiv.style["line-height"] = "2vw";
var bakingDiv = document.createElement("div");
var bakingPar = document.createElement("p");
bakingPar.innerHTML = "<u>Baking</u><br>I enjoy baking breads, both from \
sourdough starter and commercial yeast.<br>";
bakingPar.style["font-size"] = "1.5vw";
bakingPar.style["margin-left"] = parSideMargin;
bakingPar.style["margin-right"] = parSideMargin;
bakingPar.style["margin-top"] = "0px";
bakingPar.style["margin-bottom"] = "0px";
bakingPar.style["color"] = backgroundColor;
bakingPar.style["line-height"] = "2vw";
var bakingPicsDiv = document.createElement("div");
bakingPicsDiv.style["margin-left"] = parSideMargin;
bakingPicsDiv.style["margin-right"] = parSideMargin;
bakingPicsDiv.style["margin-top"] = "0px";
bakingPicsDiv.style["margin-bottom"] = "0px";
bakingPicsDiv.style["display"] = "flex";
bakingPicsDiv.style["flex-wrap"] = "wrap";
for (var picName of ["1", "2", "3", "4", "6", "7", "8"]){
  var pic = document.createElement("img");
  pic.src = "documents/bread/" + picName + ".jpg";
  pic.style["width"] = "15%";
  pic.style["height"] = "15%";
  pic.style["border-radius"] = "10px";
  pic.style["margin"] = "5px";
  bakingPicsDiv.appendChild(pic);
}
bakingDiv.appendChild(bakingPar);
bakingDiv.appendChild(bakingPicsDiv);
hobbiesDiv.appendChild(hobbiesPar);
hobbiesDiv.appendChild(runningDiv);
hobbiesDiv.appendChild(bakingDiv);

/*
add pictures to the pic1 and pic2 grid boxes in the home div
*/
var img1 = document.createElement("img");
img1.src = "documents/pic1.JPG";
img1.alt = "Hannah Fisher";
img1.style["border-radius"] = "10px";
sizeImages(2, img1);
divsInHomeDiv[2].style.display = "flex";
divsInHomeDiv[2].style["justify-content"] = "center";
divsInHomeDiv[2].style["align-items"] = "center";
divsInHomeDiv[2].innerHTML = "";
divsInHomeDiv[2].appendChild(img1);
var img2 = document.createElement("img");
img2.src = "documents/pic2.jpg";
img2.alt = "Hannah Fisher";
img2.style["border-radius"] = "10px";
sizeImages(6, img2);
divsInHomeDiv[6].style.display = "flex";
divsInHomeDiv[6].style["justify-content"] = "center";
divsInHomeDiv[6].style["align-items"] = "center";
divsInHomeDiv[6].innerHTML = "";
divsInHomeDiv[6].appendChild(img2);

/*
function to size an image in a div
*/
function sizeImages(divNumber, img){
  var w = divsInHomeDiv[divNumber].clientWidth;
  var h = divsInHomeDiv[divNumber].clientHeight;
  if (w < h){
    img.width = w;
    img.height = w;
  }
  else{
    img.width = h;
    img.height = h;
  }
}

/*
resize listener
*/
window.addEventListener("resize", function(){
  for (var div of divsInHomeDiv){
    div.style["width"] = ((document.body.clientWidth / 3) - 6) + "px";
    sizeImages(2, img1);
    sizeImages(6, img2);
  }
  resizeHannahFisher();
})

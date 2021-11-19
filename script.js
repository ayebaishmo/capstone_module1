// Side mobile menu
const openMenu = document.querySelector('.sideMenu');
const headP = document.querySelector('.headParaDiv');
const mobileNav = document.querySelector('.mobileNav');

function openMobileMenu() {
  mobileNav.style.display = 'block';
  openMenu.style.display = 'none';
  headP.style.display = 'none';
}
openMobileMenu();

function closeMobileMenu() {
  mobileNav.style.display = 'none';
  openMenu.style.display = 'block';
  headP.style.display = 'block';
}
closeMobileMenu();

// team Object
const team = [{
  img: 'img/avatar1.png',
  name: 'Ayebazibwe Ishmael',
  title: 'Full stackWeb developer', 
  desc: 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function',
},
{
  img: 'img/avatar2.jpg',
  name: 'Natweta Edmon',
  title: 'Grapphics Designer',
  desc: 'Edmond heads the graphic department, He is responisible for the brand look of our clients that are need of that service',
},
{
  img: 'img/avatar5.jpg',
  name: 'Masaba Johhn',
  title: 'Producer',
  desc: 'John is the best producer around town, for all our  clients production are readily produced by John Masaba the man',
},
{
  img: 'img/avatar3.jpg',
  name: 'Apio Sheillah',
  title: 'Video Director',
  desc: 'Sheillah is in charge of video and audio commercials for our clients that run on both television and radios plus social media',
},
{
  img: 'img/avatar4.jpg',
  name: 'Nazziwa Jane',
  title: 'Marketier',
  desc: 'Jane dose not only market for My plug but also  my plug store creators who sell and and create products on my plug store',
},
{
  img: 'img/avatar6.jpg',
  name: 'Richard Nabende',
  title: 'Program cordinator',
  desc: 'Each year we handle diffrent kinds of project for our clients, Richard makes sure that projects are managed effeciently.',
},
];

// Heading of the part
const teamBack = document.querySelector('.teamBack');
const headFour = document.createElement('h4');
headFour.className = 'ourTeam';
headFour.innerHTML = 'Our team';
teamBack.appendChild(headFour);
const ourHr = document.createElement('hr');
ourHr.className = 'ourHr';
teamBack.appendChild(ourHr);

// Background of team grid
const teamGrid = document.createElement('div');
teamGrid.className = 'teamGrid';
teamBack.appendChild(teamGrid);

// Team Description divs
for (let i = 0; i < team.length; i += 1) {
  const teamDec = document.createElement('div');
  teamDec.className = 'teamDec';
  teamGrid.appendChild(teamDec);

  // img div
  const imgDiv = document.createElement('div');
  teamDec.appendChild(imgDiv);
  const teamImg = document.createElement('img');
  teamImg.setAttribute('src', team[i].img);
  teamImg.className = 'avatar1';
  imgDiv.appendChild(teamImg);

  // team ul
  const ulDiv = document.createElement('div');
  teamDec.appendChild(ulDiv);
  const teamDet = document.createElement('ul');
  teamDet.className = 'teamDet';
  ulDiv.appendChild(teamDet);

  // team li
  const liteam = document.createElement('li');
  teamDet.appendChild(liteam);
  liteam.innerHTML = team[i].name;

  const liteamo = document.createElement('li');
  teamDet.appendChild(liteamo);
  liteamo.className = 'titleT';
  liteamo.innerHTML = team[i].title;

  const teamHr = document.createElement('hr');
  teamHr.className = 'teamHr';
  liteamo.appendChild(teamHr);

  const liteamt = document.createElement('li');
  teamDet.appendChild(liteamt);
  liteamt.innerHTML = team[i].title;
  liteamt.innerHTML = team[i].desc;
}
// Side mobile menu
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.sideMenu');
const mobileNav = document.querySelector('.mobileNav');

function closeMobileMenu() {
    mobileNav.style.display = 'none';
    openMenu.style.display = 'block'
}

function openMobileMenu() {
    mobileNav.style.display = 'block';
    openMenu.style.display = 'none';
}

// team Object

const team = [{
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
},
  {
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
},{
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
},{
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
},{
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
},{
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
},{
  img: 'img/avatar1.png',
  desc: ['Ayebazibwe Ishmael', 'Full stackWeb developer', 'Ishmael is CEO My plug, who has experience in innovating through technology and sftware, for he has enabled the plug store to function'],
}
]

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
  teamImg.setAttribute('src', team[0].img);
  teamImg.className = 'avatar1';
  imgDiv.appendChild(teamImg);

// team ul
  const  ulDiv = document.createElement('div');
  teamDec.appendChild(ulDiv);
  const teamDet = document.createElement('ul');
  teamDet.className = 'teamDet';
  ulDiv.appendChild(teamDet);

// team li
  for (let j = 0; j < team[i].desc.length; j += 1) {
    const liteam = document.createElement('li');
    teamDet.appendChild(liteam);
    liteam.innerHTML = team[i].desc[j];
}
}
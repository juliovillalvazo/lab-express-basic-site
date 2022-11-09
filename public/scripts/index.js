const works = [
    {
        name: 'From the Earth to the Moon',
        year: 1865,
    },

    {
        name: 'Five Weeks in a Balloon',
        year: 1863,
    },
    {
        name: 'Around the World in Eighty Days',
        year: 1872,
    },
    {
        name: 'Journey to the Center of the Earth',
        year: 1864,
    },
    {
        name: 'The Mysterious Island',
        year: 1875,
    },
    {
        name: 'An Antarctic Mystery',
        year: 1897,
    },
    {
        name: 'The Purchase of the North Pole',
        year: 1889,
    },
];

const workslist = document.querySelector('.workslist');

works.forEach(({ name, year }) => {
    workslist.innerHTML += `<li class="worksitem">${name} - ${year}</li>`;
});

const FIXED_FILMS = [
  {
    id: 1,
    name: 'Brazil', director: 'Terry Gilliam', year: 1985, genre: 'Fantasía',
    mainActors: ['Jonathan Pryce', 'Kim Greist', 'Robert de Niro', 'Michael Palin']
  },
  {
    id: 2,
    name: 'The Matrix', director: 'Lana & Lilly Wachowski', year: 1999, genre: 'Ciencia Ficción',
    mainActors: ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne', 'Hugo Weaving']
  },
];

export async function getAllFilms() {
  return getAllFilmsFake();
}

async function getAllFilmsFake() {
  return Promise.resolve(FIXED_FILMS);
}
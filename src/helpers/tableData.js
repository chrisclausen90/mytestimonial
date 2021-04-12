const teams = [
  { position: 4, name: 'Holstein Kiel', games: 26, points: 46, wins: 13, draws: 7, precipitation: 6, goals: '39:25', diff: '+14' },
  { position: 8, name: 'FC St. Pauli', games: 28, points: 41, wins: 11, draws: 8, precipitation: 9, goals: '44:44', diff: '0' },
  { position: 5, name: 'Fortuna Düsseldorf', games: 27, points: 43, wins: 12, draws: 7, precipitation: 8, goals: '39:37', diff: '+2' },
  { position: 7, name: '1. FC Heidenheim 1846', games: 27, points: 42, wins: 12, draws: 6, precipitation: 9, goals: '38:35', diff: '+3' },
  { position: 16, name: 'Eintracht Braunschweig', games: 27, points: 26, wins: 6, draws: 8, precipitation: 13, goals: '23:46', diff: '-23' },
  { position: 1, name: 'VFL Bochum 1848', games: 28, points: 54, wins: 17, draws: 3, precipitation: 8, goals: '50:30', diff: '+20' },
  { position: 6, name: 'Karlsruher SC', games: 27, points: 42, wins: 12, draws: 6, precipitation: 9, goals: '39:33', diff: '+6' },
  { position: 9, name: 'SC Paderborn 07', games: 28, points: 38, wins: 10, draws: 8, precipitation: 10, goals: '38:34', diff: '+4' },
  { position: 13, name: '1. FC Nürnberg', games: 27, points: 32, wins: 8, draws: 8, precipitation: 11, goals: '35:41', diff: '-6' },
  { position: 3, name: 'SpVgg Greuther Fürth', games: 27, points: 50, wins: 14, draws: 8, precipitation: 5, goals: '51:32', diff: '+19' },
  { position: 11, name: 'Hannover 96', games: 26, points: 36, wins: 10, draws: 6, precipitation: 10, goals: '40:33', diff: '+7' },
  { position: 18, name: 'FC Würzburger Kickers', games: 27, points: 19, wins: 5, draws: 4, precipitation: 18, goals: '29:54', diff: '-25' },
  { position: 14, name: 'SSV Jahn Regensburg', games: 26, points: 31, wins: 7, draws: 10, precipitation: 9, goals: '28:33', diff: '-5' },
  { position: 10, name: 'FC Erzgebirge Aue', games: 28, points: 37, wins: 10, draws: 7, precipitation: 11, goals: '37:40', diff: '-3' },
  { position: 12, name: 'SV Darmstadt 98', games: 28, points: 35, wins: 10, draws: 5, precipitation: 13, goals: '45:47', diff: '-2' },
  { position: 17, name: 'SV Sandhausen', games: 27, points: 25, wins: 7, draws: 4, precipitation: 16, goals: '57:35', diff: '-18' },
  { position: 15, name: 'VFL Osnabrück', games: 26, points: 26, wins: 7, draws: 5, precipitation: 14, goals: '57:35', diff: '-15' },
  { position: 2, name: 'Hamburger SV', games: 28, points: 50, wins: 14, draws: 8, precipitation: 6, goals: '57:35', diff: '+22' },
]

export default function makeData() {
  const result = [];

  for (let i = 0; i < teams.length; i++) {
    result.push(teams[i]);
  }

  return result;
}

import jsonfile from 'jsonfile';
import { Player } from '../models/player';

const DATA_FILE = '../players.json';

export const saveToPlayers = (players: Player[]): void => {
    jsonfile.writeFileSync(DATA_FILE, players);
}

let players: Player[] = [];

let player1: Player = {
    id: '123',
    playerName: 'John',
    passwordHash: '123456',
    games: []
}

let player2: Player = {
    id: '123',
    playerName: 'ghgfhghffh',
    passwordHash: '123456',
    games: []
}

players.push(player1);
players.push(player2);

saveToPlayers(players);
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _playerOne: Fighter;
  private _enemies: Monster[] | Fighter[] | SimpleFighter[];
  constructor(
    player: Fighter,
    enemies: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._playerOne = player;
    this._enemies = enemies;
  }

  get playerOne(): Fighter {
    return this._playerOne;
  }

  get enemies(): Monster[] | Fighter[] | SimpleFighter[] {
    return this._enemies;
  }

  static battle(
    playerOne: Fighter,
    enemies: (Monster | Fighter | SimpleFighter),
  ): number {
    let maxLimit = 0;

    while ((playerOne.lifePoints > 0 && enemies.lifePoints > 0) 
    && maxLimit < 100) {
      playerOne.attack(enemies);
      enemies.attack(playerOne);
      
      maxLimit += 1;
    }
    const resultFight = playerOne.lifePoints === -1 ? -1 : 1;
    return resultFight;
  }

  fight(): number {
    const winners = this._enemies.map((enemy) =>
      PVE.battle(this.playerOne, enemy));
    return winners.every((result: number) => result === -1) ? -1 : 1;
  }
} 
import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(player: Fighter, protected player2: Fighter) {
    super(player);
  }

  public fight(): number {
    const characterThatStarts = [this.player, this.player2]
      .sort(() => Math.random() - 0.5);

    const character = characterThatStarts;

    let maxLimit = 0;
    
    while (
      (this.player.lifePoints > 0 || this.player2.lifePoints > 0)
        && maxLimit < 100) {
      character[0].attack(character[1]);
      character[1].attack(character[0]);
      maxLimit += 1;
    }

    return this.player.lifePoints > 0 ? 1 : -1;
  }
}

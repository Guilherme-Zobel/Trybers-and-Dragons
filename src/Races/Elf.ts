import Race from './Race';

export default class Elf extends Race {
  private static _count = 0;
  private _maxLifePoints:number;

  constructor(
    _name: string,
    _dexterity: number,
    
  ) { super(_name, _dexterity); Elf._count += 1; this._maxLifePoints = 99; }

  static createdRacesInstances():number {
    return Elf._count;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}
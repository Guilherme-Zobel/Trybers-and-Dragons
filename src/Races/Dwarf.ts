import Race from './Race';

export default class Dwarf extends Race {
  private static _count = 0;
  private _maxLifePoints:number;

  constructor(
    _name: string,
    _dexterity: number,
    
  ) { super(_name, _dexterity); Dwarf._count += 1; this._maxLifePoints = 80; }

  static createdRacesInstances():number {
    return Dwarf._count;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

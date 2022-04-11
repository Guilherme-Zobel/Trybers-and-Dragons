import Race from './Race';

export default class Orc extends Race {
  private static _count = 0;
  private _maxLifePoints:number;

  constructor(
    _name: string,
    _dexterity: number,
    
  ) { super(_name, _dexterity); Orc._count += 1; this._maxLifePoints = 74; }

  static createdRacesInstances():number {
    return Orc._count;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}
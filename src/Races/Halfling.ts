import Race from './Race';

export default class Halfling extends Race {
  private static _count = 0;
  private _maxLifePoints:number;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Halfling._count += 1; this._maxLifePoints = 60; 
  }

  static createdRacesInstances():number {
    return Halfling._count;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}
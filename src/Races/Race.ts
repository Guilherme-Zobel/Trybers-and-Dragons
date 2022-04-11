export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {}

  get name() { return this._name; }
  get dexterity() { return this._dexterity; }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}

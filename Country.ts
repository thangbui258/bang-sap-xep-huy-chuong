export class Country {
    name: string;
    gold: number;
    sliver: number;
    bronze: number;

    constructor(_name: string, gold: number, sliver: number, bronze: number) {
        this.name = _name;
        this.gold = gold;
        this.sliver = sliver;
        this.bronze = bronze;
    }
}
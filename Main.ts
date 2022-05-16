import {Country} from "./Country";
import {Sort} from "./Sort";

let bxh = new Sort();
let vn = new Country('vn',7,6,5)
let thai = new Country('thai',6,4,3)
let lao = new Country('lao',6,5,3)
let sing = new Country('sing',6,4,12)
bxh.add(vn)
bxh.add(thai);
bxh.add(lao);
bxh.add(sing);

bxh.bubbleSort()

console.log(Sort.list)
import {Country} from "./Country";

export class Sort {
    static list = [];

    constructor() {
    }

    add(country) {
        Sort.list.push(country);
    }

    swap(arr: number[], a: number, b: number) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    bubbleSort() {
        for (let i = 0; i < Sort.list.length; i++) {
            for (let j = Sort.list.length - 1; i < j; j--) {
                if (Sort.list[j].gold > Sort.list[j - 1].gold) {
                    this.swap(Sort.list, j - 1, j)
                } else if (Sort.list[j].gold == Sort.list[j - 1].gold) {
                    if (Sort.list[j].sliver > Sort.list[j - 1].sliver) {
                        this.swap(Sort.list, j - 1, j)
                    } else if (Sort.list[j].sliver == Sort.list[j - 1].sliver) {
                        if (Sort.list[j].bronze > Sort.list[j - 1].bronze) {
                            this.swap(Sort.list, j - 1, j)
                        }
                    }
                }
            }
        }
    }
}









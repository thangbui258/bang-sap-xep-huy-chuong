"use strict";
exports.__esModule = true;
exports.Sort = void 0;
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.add = function (country) {
        Sort.list.push(country);
    };
    Sort.prototype.swap = function (arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    Sort.prototype.bubbleSort = function () {
        for (var i = 0; i < Sort.list.length; i++) {
            for (var j = Sort.list.length - 1; i < j; j--) {
                if (Sort.list[j].gold > Sort.list[j - 1].gold) {
                    this.swap(Sort.list, j - 1, j);
                }
                else if (Sort.list[j].gold == Sort.list[j - 1].gold) {
                    if (Sort.list[j].sliver > Sort.list[j - 1].sliver) {
                        this.swap(Sort.list, j - 1, j);
                    }
                    else if (Sort.list[j].sliver == Sort.list[j - 1].sliver) {
                        if (Sort.list[j].bronze > Sort.list[j - 1].bronze) {
                            this.swap(Sort.list, j - 1, j);
                        }
                    }
                }
            }
        }
    };
    Sort.list = [];
    return Sort;
}());
exports.Sort = Sort;

const assert = require('assert');

const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

const list1 = {bir:'one', ikki: 'two', uch:'third'}
const list2 = {bir:'onae', ikki: 'two', uch:'third'}
const error_message = "Error sorry corry"

assert.deepEqual(arr1, arr2, "Error: this both thing not equal");
assert.deepEqual(list1, list2, [error_message])
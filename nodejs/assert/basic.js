const assert = require('assert');

function add(a,b){

    return a+b;
}

const result = add(3,4);

assert(result == 4, "Error: its not common")
assert.ok(result == 5, "Error: assert ok used")
assert.equal(result, 6, "Sorry your result not equal 3")
assert.notEqual(result,4, 'Error: Not equal both thing yeah')
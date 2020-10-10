// allows the exported function to be called in test file
const { TestScheduler } = require('jest')
let {repeater} = require('../anotherjsproject')

// first test for this function
test("Name for an example test", () => {
    expect("this is a truthy string").toBeTruthy();
})

// second test for the imported test which should come out correct
test("repeater", () => {
    expect(repeater("hi",3)).toEqual("hihihihi")
})

// second test for the imported test which should come out as fail
test("repeater", () => {
    expect(repeater("hi",3)).toEqual("wrong one")
})
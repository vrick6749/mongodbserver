const { TestScheduler } = require('jest')
let {repeater} = require('../anotherjsproject')

test("Name for an example test", () => {
    expect("this is a truthy string").toBeTruthy();
})

test("repeater", () => {
    expect(repeater("hi",3)).toEqual("hihihihi")
})
test("repeater", () => {
    expect(repeater("hi",3)).toEqual("wrong one")
})
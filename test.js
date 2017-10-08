let expect = require('chai').expect
let mapMany = require('./index.js')
let testArray = [{foo: 'b', stuff: [1,2]},{foo: 'c', stuff: [3,4]}]
let expectedOutput = [ { foo: 'b', thing: 1 },
                       { foo: 'b', thing: 2 },
                       { foo: 'c', thing: 3 },
                       { foo: 'c', thing: 4 } ]

it('Basic function works',()=>{
    let out = mapMany(testArray,(item)=>{
        return item['stuff'].map((stuff)=>{
            let obj = {}

            obj['foo'] = item['foo']
            obj['thing'] = stuff
            return obj
        })
    })

    expect(out).to.deep.equal(expectedOutput)
})

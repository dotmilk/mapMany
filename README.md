# mapMany

just a simple function to achieve results like so:

```
let data = [{foo: 'b', stuff: [1,2]},{foo: 'c', stuff: [3,4]}]
let mappedData = mapMany(data,(item)=>{
    return item['stuff'].map((stuff)=>{
        let obj = {}
        obj['foo'] = item['foo']
        obj['thing'] = stuff
        return obj
    })
})
```

mappedData now looks like this:

```
[ { foo: 'b', thing: 1 },
  { foo: 'b', thing: 2 },
  { foo: 'c', thing: 3 },
  { foo: 'c', thing: 4 } ]
```

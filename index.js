function mapMany(from,using) {
    let toConcat = []
    from.forEach( item =>{
        toConcat.push(using(item))
    })
    return [].concat(...toConcat)
}

module.exports = mapMany

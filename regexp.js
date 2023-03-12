const a='b'
const p=new RegExp(`${a}bc`)
console.log(p.test('abc')) //false
console.log(p.test('bbc')) //true
console.log(p.test('bbcb'))
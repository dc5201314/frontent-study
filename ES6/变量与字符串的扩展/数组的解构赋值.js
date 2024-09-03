// const foods = ['炸鸡','烧烤','啤酒']
// let[a,b,c]=foods
// console.log(a)
// console.log(b)
// console.log(c)

const foods = ['炸鸡',['烧烤','啤酒',['烤鸡腿']],'烤羊肉']
let [a,[b,c,[d]],e] = foods
console.log(a)
console.log(b)
console.log(c)
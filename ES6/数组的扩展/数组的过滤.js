var generals = [
    { id: 1, name: '吕布' },
    { id: 2, name: '关⽻' },
    { id: 3, name: '⻢超' },
    { id: 4, name: '邢道荣' },
   ]
   var flarr = generals.filter((row) => row.id >= 3)
   console.log(flarr) // [ { id: 3, name: '⻢超' }, { id: 4, name: '邢道荣' } 

   var flarr = generals.slice(1, 3)
console.log(flarr) //[ { id: 2, name: '关⽻' }, { id: 3, name: '⻢超' } ]


var arrs = ['张环', '李朗', '杨⽅', '任阔']
console.log(arrs.includes('张环')) // true
console.log(arrs.includes('魔灵')) // false
console.log(arrs.includes('李朗')) // true
console.log(arrs.includes('李朗', 2)) // false
// 等同于 arrs.slice(2).includes('李朗'） // false
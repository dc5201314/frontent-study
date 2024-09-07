// let obj = {
//     0:'a',
//     1:'b',
//     length:2,
        
// }

// let arrs = Array.from(obj)
// console.log(arrs)


// let arrs = [1, 2, [3, 4, [5]]];  // 正确的数组定义，嵌套数组用方括号包裹
// let flattened = arrs.flat(2); // 参数 2 表示扁平化到深度 2
// console.log(flattened); // 输出: [1, 2, 3, 4, 5]


let arrs = [3,4,1,8,7]
 let res = arrs.sort((e1,e2)=> {
    return e1 - e2
}) 
console.log(res)

var arrss = ['萧炎', '美杜莎', '云韵', '海波东']
arrs.sort((row1, row2) => {
 return row1.localeCompare(row2) ? 1 : -1
})
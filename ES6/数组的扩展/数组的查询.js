const colors = [
    { name: 'aaa', color: '红色' },
    { name: 'bbb', color: '绿色' },
    { name: 'ccc', color: '红色' },
    { name: 'ddd', color: '#绿色' },
    { name: 'eee', color: '#800080' }
];

const redColors = colors.filter(color => color.color === '红色');
console.log(redColors);
// 输出: [
//   { name: 'aaa', color: '红色' },
//   { name: 'ccc', color: '红色' }
// ]

var index = arrs.findIndex((row) => row.color == '红⿊')
console.log(index) // 1
var index2 = arrs.findLastIndex((row) => row.color == '红⿊')
console.log(index2) //2
var index3 = arrs.findIndex((row) => row.color == '红⽩')
console.log(index3) //
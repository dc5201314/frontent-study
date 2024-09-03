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

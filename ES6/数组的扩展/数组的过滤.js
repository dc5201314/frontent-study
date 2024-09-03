let arrs = [
    { name: 'aaa', color: '红色' },
    { name: 'bbb', color: '绿色' },
    { name: 'ccc', color: '红色' },
    { name: 'ddd', color: '#绿色' },
    { name: 'eee', color: '#800080' }
];
let result = arrs.filter((obj) => obj.color==='绿色')
console.log(result)    

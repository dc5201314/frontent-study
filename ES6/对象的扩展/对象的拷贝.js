// let a = {name : '后端'}
// let b = a
// b.name='前端'
// console.log(a)
// console.log(b)





let obj = {
    name:'电影',
    categary:{
        catoon:'动漫',
        kunfu:'武侠',
    },
    platform:['腾讯','优酷','爱奇艺']


}

let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.categary.kunfu = '修仙'    
obj.platform[2] = 'bibi'
console.log(obj1.categary.kunfu,obj.platform[2])
console.log(obj2.categary.kunfu,obj.platform[2])
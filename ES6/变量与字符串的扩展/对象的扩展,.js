var city = '北京市'
function getCity() {
 return city
}
var object = { city, getCity }
// 等同于 var object ={city:city, getCity:getCity}
console.log(object.city) // ‘北京市’
console.log(object.getCity()) // ‘北京市’
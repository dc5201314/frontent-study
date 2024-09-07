function eat(food = '苹果') {
    console.log(food)
   }
   eat() // 苹果
   eat('⾹蕉') //⾹蕉

   const myLog = (tag, ...args) => {
    console.log(`${tag}:`, args)
   }
   myLog('⽔果', '⽕⻰果') // ⽔果: [ '⽕⻰果' ]
   myLog('零⻝', '坚果', '芒果⼲', '辣条') // 零⻝: [ '坚果', '芒果⼲', '辣条' ]
   
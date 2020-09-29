class Formatter {

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^ A-Za-z0-9-']+/g, '')
  }

  static titleize(str){
    let arrayOfEx = ['the','a','an','but','of','and','for','at','by','from']
    // let newStr = str.replace(str[0],str[0].toUpperCase())
    // first letter always caps

    let result = [];
    let wordsArray = str.split(' ')

    for (let el = 0; el < wordsArray.length; el++){
      if (el == 0){
        result.push( this.capitalize( wordsArray[el] ) )
      } else{
        if (arrayOfEx.includes( wordsArray[el] )){
          result.push( wordsArray[el] )
        } else{
          result.push( this.capitalize(wordsArray[el]))
        }
      }
      }
      return result.join(' ')
    }

    // grap string, split into each word, check if words are in your array, if not then caps them and if yes then return as is.
    // return newStr.split(' ').map(word=>{
    //   if (!arr.includes(word)){
    //     return word.replace(word[0],word[0].toUpperCase())
    //   } else {
    //     return word
    //   }
    // }).join(' ')
  // }

}


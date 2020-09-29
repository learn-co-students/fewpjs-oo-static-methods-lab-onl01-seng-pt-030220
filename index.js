class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^ A-Za-z0-9-']+/g, '')
  }

  static titleize(string){
    let arr = ['the','a','an','but','of','and','for','at','by','from']

    let newStr = string.replace(string[0],string[0].toUpperCase())

    return newStr.split(' ').map(word=>{
      if (!arr.includes(word)){
        return word.replace(word[0],word[0].toUpperCase())
      } else {
        return word
      }
    }).join(' ')
  }

}





let c = Formatter.titleize('if the cats of USA jump at me by an ant, a tiger from africa will come for them')

console.log(c)
class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str){
     // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return str.replace(/[^A-Za-z0-9- ']+/g,'')
    //return str.replace(/[^A-Za-z0-9-']+/g, '')
  }

  static titleize(str){
    let arr = str.split()
    let newArr = arr.map(updateWord)
    return newArr.join(" ")
  }

  static updateWord(word){
    let lowerCaseWord = word.toLowerCase()
    switch(lowerCaseWord){
      case "the":
      case "a":
      case "an":
      case "but":
      case "of":
      case "and":
      case "for":
      case "at":
      case "by":
      case "from":
        return word[0].toUpperCase() + word.slice(1)
        break
      default: 
        return word.toUpperCase()
    }
  }



    
}
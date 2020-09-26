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
    let arr = str.split(" ")
    let newArr = arr.map(this.updateWord)
    console.log(newArr)
    //newArr[0].toUpperCase()
    return  newArr[0][0].toUpperCase()+ newArr[0].slice(1) +" "+ newArr.slice(1).join(" ")
    //sentence = sentence[0]
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
        return lowerCaseWord
        break
      default: 
        return lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1)
    }
  }
    
}
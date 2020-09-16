class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let lowerCasedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(' ')
    let result = []
    result = [stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1)]
    //=>["In"]
    stringArray = stringArray.slice(1)
    //=> ["the", "night", "kitchen"]
    stringArray.forEach( word =>  {
      if (lowerCasedWords.includes(word)) {
        result.push(word)
      }
      else {
        result.push(this.capitalize(word))
      }
    })
    return result.join(' ')
  }
  
}
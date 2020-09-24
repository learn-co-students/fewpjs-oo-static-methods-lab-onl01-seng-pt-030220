class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let words = string.split(' ')
    result.push(this.capitalize(words[0]))
    words = words.slice(1)
    words.forEach( word =>  {
      if (except.includes(word)) {
        result.push(word)
      }
      else {
        result.push(this.capitalize(word))
      }
    })
    return result.join(' ')
  }
  

}
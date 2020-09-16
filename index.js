class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const skipWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let title = string.split(" ")
    
    for (let i = 0; i < title.length; i++) {
      if (i === 0) {
        title[i] = this.capitalize(title[i])
      }
      else if (!skipWords.includes(title[i])) {
        title[i] = this.capitalize(title[i])
      }
    }
    title = title.join(" ")
    return title
  }
}
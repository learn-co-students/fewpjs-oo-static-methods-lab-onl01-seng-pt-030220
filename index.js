class Formatter {
  //add static methods here
  static capitalize(string){
    return  string.replace(string[0],string[0].toUpperCase())
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g,'')
  }

  static  titleize(string){
    let array=["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    //first char always capitalize
    let first = string.replace(string[0],string[0].toUpperCase())
    return   first.split(" ").map(el => {
      if(! array.includes(el))
       {  return el.replace(el[0],el[0].toUpperCase())
       }else{ return el}
       }
     ).join(" ")
  }

}

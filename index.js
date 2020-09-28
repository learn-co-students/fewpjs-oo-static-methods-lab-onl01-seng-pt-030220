class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    // string = string.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    // return string.trim();
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let newArray = string.split(" ") 
    let goodArray = []
    let makeArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'] 
    let word ; 

    for(let i = 0; i < newArray.length; i++){
      if (i == 0){
        word = newArray[i].charAt(0).toUpperCase()+ newArray[i].slice(1)
      goodArray.push(word) 
      } 
      else if(!makeArray.includes(newArray[i])){
        word = newArray[i].charAt(0).toUpperCase()+ newArray[i].slice(1)
        goodArray.push(word)
      } 
      else{ 
      goodArray.push(newArray[i])
      }
    }
    // newArray.forEach(word => {
    //   if (!makeArray.include(word)){
    //     word.charAt(0).toUpperCase()+ word.slice(1)
    //     goodArray.push(word)
    //     return goodArray
    //   }
    // })
    // const amendedArray = goodArray.map(word => {
    // return word.charAt(0).toUpperCase()+ word.slice(1)
    // })
    // const final = amendedArray.join(" ")
    // return final
    return goodArray.join(" ")

  }
}

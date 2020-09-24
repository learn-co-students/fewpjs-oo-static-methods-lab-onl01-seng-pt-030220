class Formatter {
  //add static methods here
  //static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  //static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(string) {
    // let arr = [];
    // let words = string.split(' ');
    // arr.push(words[0].charAt(0).toUpperCase() + words.slice(1));
    // console.log(`${string}`);
    // console.log(`${words}`);
    // //the, a, an, but, of, and, for, at, by, and from
    // for (let i=0; i < words.length; i++) {
    //   if (words[i] == 'the' || 
    //   words[i] == 'a' ||
    //   words[i] == 'an' ||
    //   words[i] == 'but' ||
    //   words[i] == 'of' ||
    //   words[i] == 'and' ||
    //   words[i] == 'for' ||
    //   words[i] == 'at' ||
    //   words[i] == 'by' ||
    //   words[i] == 'from') {
    //     arr.push(words[i]);
    //   }
    //   else {
    //     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    //     arr.push(words[i]);
    //   }
    // }
    // return arr.join(' ');
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = string.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}
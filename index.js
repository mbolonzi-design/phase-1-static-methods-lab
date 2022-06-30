class Formatter {
  //add static methods here
  static capitalize(string){
    const firstLetter = string.slice(0,1)
    const restOfWord = string.slice(1)
    return firstLetter.toUpperCase() + restOfWord
  }

  static sanitize(string){
    return string.replace(/[^a-z0-9- ']/gi, "")
  }


  static titleize(string){
    console.log("running")
    const keyWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let newTitle = []
    let needCaplitalize = false
 
    let splitString = string.split(" ")
    
    for(let i = 0; i<splitString.length; i++){
      console.log("string split i", splitString[i])
      if(i==0){
        newTitle.push(this.capitalize(splitString[i]))
        console.log("first word")
      } else {
        let needCaplitalize = true
        for(let word of keyWords){
          if(word == splitString[i]){
            newTitle.push(splitString[i])
            needCaplitalize = false
            console.log("conditional is true")
          }
        }
        if(needCaplitalize == true){
          newTitle.push(this.capitalize(splitString[i]))
          console.log("capitalize running")
        }
      }
    }

    console.log("new title", newTitle)
    newTitle = newTitle.join(" ")
    return newTitle
  }
}
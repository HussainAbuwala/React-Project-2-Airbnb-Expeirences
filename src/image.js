import one from "./images/katie-zaferes.png"
import two from "./images/wedding-photography.png"
import three from "./images/mountain-bike.png"

const imageDict = {
    "katie-zaferes.png" : one,
    "wedding-photography.png" : two,
    "mountain-bike.png" : three
}

function getImageByKey(key) {
    return imageDict[key]
  }
  
  export default getImageByKey
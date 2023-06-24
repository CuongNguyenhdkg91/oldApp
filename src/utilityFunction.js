export const tachten = (FullN) => {
var reptspace = " "
//reptspace = reptspace.repeat(20)
return FullN.replaceAll(" "," ".repeat(20)).slice(-20).trim()
}



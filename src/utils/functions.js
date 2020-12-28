
  export const sortByAlphabet = (nameA, nameB) => 
  nameA.name.localeCompare(nameB.name)
  
  export const sortByAmountThenAlphabet = (nameA, nameB) => 
  nameB.amount - nameA.amount || sortByAlphabet(nameA, nameB)

  export const returnCorrectSortFunction = isSortedByAlphabet =>
  (nameA, nameB) =>
  isSortedByAlphabet ? sortByAlphabet(nameA, nameB) : sortByAmountThenAlphabet(nameA, nameB)

  export const totalAmount = namesArray => 
  namesArray.length === 0 ?
  0 : 
  namesArray.map(name => name.amount).reduce((accumulator, currentValue) => accumulator += currentValue)
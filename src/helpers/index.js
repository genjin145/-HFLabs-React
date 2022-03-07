export const join = (arr, separator) => {
  return arr.filter(Boolean).join(separator || ', ')
}

export const typeDescription = (type) => {
  const TYPES = {
    INDIVIDUAL: 'Индивидуальный предприниматель',
    LEGAL: 'Организация',
  }
  return TYPES[type]
}

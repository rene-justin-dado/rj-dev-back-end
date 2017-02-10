module.exports = function (category) {
  switch (category) {
    case 'EDA culture':
      return 'cultural-blogs'
    case 'EDA technical':
      return 'technical-blogs'
    default:
      return
  }
}

const mid1 = (req, res, next) => {

  res.write('a')
  next()
  res.end()
  console.log(2)
}
const mid2 = (req, res, next) => {
  console.log(3)
  res.write('b')
  next()
  res.write('d')
  console.log(4)
}
const mid3 = (req, res, next) => {
  console.log(5)
  next()
  res.write('c')
  console.log(6)
}
module.exports = {
  mid1,mid2,mid3
}
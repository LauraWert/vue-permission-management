export default (permissions, verb, noun) => {
  return noun in permissions && permissions[noun].includes(verb)
}

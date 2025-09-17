export default function foldLine(line) {
  const parts = []
  let length = 75
  while (line.length > length) {
    parts.push(line.substring(0, length))
    line = line.substring(length)
    length = 74
  }
  parts.push(line)
  return parts.join('\r\n\t')
}

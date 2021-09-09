export default function echo(body) {
  return { ...body, echo: true }
}

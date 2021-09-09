export default async function echo(body) {
  const { echo: echoFromBody } = body;

  if (echoFromBody === true) {
    throw "It's already echoed before";
  }

  return { ...body, echo: true };
}

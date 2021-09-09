export default async function echo(body) {
  const { echoed } = body;

  if (echoed === true) {
    throw "It's already echoed before";
  }

  return { ...body, echoed: true };
}

interface Body {
  echoed?: boolean;
}

export default async function echo(body: Body): Promise<Body> {
  const { echoed } = body;

  if (echoed === true) {
    throw "It's already echoed before";
  }

  return { ...body, echoed: true };
}

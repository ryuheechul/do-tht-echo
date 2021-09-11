# Rationales

## Language choice

I chose Typescript (and Node.js) because I recently submitted [another THT](https://github.com/ryuheechul/omnipresent-tht-employees) with Typescript as well.
This decision allowed me to focus on what's important rather than figuring out other languages ' echo systems.

I also chose `yarn` over `npm` because I feel most comfortable with it and it seems to work faster and cleaner.

## Code structure

`app.ts` handles core HTTP level's handling requests and responses per endpoints including authentication and logging

`echo.ts` handles echo logic

`listen.ts` handles branching of HTTPS or HTTP including handling certs files

## Testing 

Simply test 3 main cases:
- post
- put
- (already) echoed

It uses `mocha` and `chai` testing frameworks, I chose them because they allow me to write very readable testing code and straightforward to set up and use.

## Linting / Formatting

`eslint` is a popular choice for Node.js projects and it was straightforward how to set up and use it.
`prettier` is a popular choice for code formatting for Javascript projects but potentially conflicting with `eslint`.
But thanks to `eslint-plugin-prettier`, integrating `prettier` into `eslint` was possible, so we only need to talk to `eslit` to get the benefit of beautiful consistent code formatting from `prettier`

## Dockerfile / Makefile

Abstracted the `docker build` and `docker run` command via `Makefile`.

Use multi-stage build so the final image content is as lean as possible.
## package.json

`scripts` stanza is useful to add helpful commands that can be called by `yarn [script-name]` (or `npm run [script-name]`)

### devDependencies
Whatever is not stricly necessary is under devDependencies. That saved about 100MB in the container image.

## Certs

I used `mkcert`, a very useful tool that not only generates certificate-related files but also let your browser (actually your system) trust your own local CA so you can avoid seeing an ugly alarming warning on the browser page. 

But the trade-off of this is that every developer should initialize `mkcert` and generate new certs (meaning it will not be included in the git repository).

So I provide [certs/README.md](./certs/README.md) and [certs/Makefile](./certs/Makefile) to compensate the complexity of extra steps.

## Logging

Instead of writing my own logging logic, I chose Express's official automatic logging middleware, [morgan](https://expressjs.com/en/resources/middleware/morgan.html) so we don't have to add a logging line in every endpoint

## Authentication
I chose [Basic Auth](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) because It's simple to understand and implement. As it's stated it's not secure but should be good for demonstration purposes.

Instead of implementing the middleware myself, I found an implementation as [express-basic-auth](https://github.com/LionC/express-basic-auth) and read the user list simply from a `json` file.

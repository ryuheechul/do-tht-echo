# tht-echo

This is an echo server that exposes API via HTTPS (optionally HTTP too).

## Certificates

Since we use HTTPS, we will need to prepare a certificate and a private key.

We also don't want to [see a warning sign](https://web.dev/how-to-use-local-https/#self-signed-certificate) either.

`cd ./certs` and follow [README.md](./certs/README.md) to prepare certificates.

## Run with Docker

_This is more suitable for running in production mode_

To run on your local machine, (assuming Docker is installed) simply do

`make`

or

```
docker build --tag tht-echo . && \
	docker run --rm -it -p 3000:3000 tht-echo
```

## Run without Docker 

_This is more suitable for running for iterative developments_

### Prerequisite
- [Node.js](https://nodejs.org)
- [yarn](https://yarnpkg.com)

### Init/Install
`yarn`

### Run
`yarn start`

### Build and run separately
`yarn build && yarn run:dist`

### Dev
> run with watching changes

`yarn dev`

### Lint
`yarn lint`

### Test
`yarn test`

#### with watching
`yarn test:watch`

## Directory structure

```
.                 # project root
├── certs         # to hold and manage certs
├── data          # for static data
├── dist          # compile target
├── node_modules  # node.js dependencies
├── src           # source code
└── test          # testing code
```

## Service Level Objectives

I have not been involved with clearly setting SLOs previously, although I feel that I understand what it is and what it's for, I'm not going to pretend that I really know about it.

So I took a look at these articles briefly:
- https://docs.datadoghq.com/monitors/service_level_objectives/
- https://sre.google/sre-book/service-level-objectives/

And my choice of initial SLOs would be:
- success rate greater than 95%
- p95 latency less than 50ms

### Why I chose the Success rate?
If the failure rate is noticeable, that probably means, there is a high chance something's not working as you wish it to be.
High probability that can be improved in the code level.

### Why I chose latency?
Even without any failures in API calls, if it's slow enough, we can call that it's a healthy service.
In fact, it might even be worse than (fast) failing APIs. Therefore, we should make sure that all responses of APIs stay within an acceptable range of times before the latency of users coming back to our service keep increasing.

### Why didn't I choose others

I think I will need to learn/experience more and be convinced more to consider other metrics to include as SLOs.

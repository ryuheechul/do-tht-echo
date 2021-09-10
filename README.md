# tht-echo

## Certificates

`cd ./certs` and follow [README.md](./certs/README.md).

## Run with Docker

`make`

or

```
docker build --tag tht-echo . && \
	docker run --rm -it -p 3000:3000 tht-echo
```

## Run without Docker 

### Prerequisite
- [Node.js](https://nodejs.org)
- [yarn](https://yarnpkg.com)

### Init/Install
`yarn`

### Run
`yarn start`

### Build and run seperately
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

## Service Level Objectives

I've not involved with clearly setting SLOs previously, although I feel that I understand what it is and what it's for, I'm not going to pretend that I reallly know about it.

I've looked these articles briefly:
- https://docs.datadoghq.com/monitors/service_level_objectives/
- https://sre.google/sre-book/service-level-objectives/

And my initial SLOs would be:
- Success rate greater than 95%
- p95 latency less than 50ms

### Why I chose Success rate?
If failure rate is noticable, that probably means, there is a high chance something's not working as you wish it to be.
High probability that can be improved in the code level.

### Why I chose latency?
Even without any failures in API calls, if it's slow enough, we can call that it's a healthy service.
In fact, it might even be worse than (fast) failing APIs. Therefore, we should make sure that all responses of APIs stay within acceptable range of times before the latency of users coming back to our service keep increasing.

### Why I didn't choose others

I think, I will need to learn/experience more and be convinced more to consider other metrics to include as SLOs.

.PHONY: run
run: build
	docker run --rm -it -p 3000:3000 tht-echo

.PHONY: build
build:
	docker build --tag tht-echo .

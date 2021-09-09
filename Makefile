.PHONY: test-simple
test-simple:
	curl --header "Content-Type: application/json" --request POST \
		--data '{"whattimeisit": "time to echo!"}' \
		http://localhost:3000/api/echo

.PHONY: test-put
test-put:
	curl --header "Content-Type: application/json" --request PUT \
		--data '{"whattimeisit": "time to echo!"}' \
		http://localhost:3000/api/echo

.PHONY: test-echoed
test-echoed:
	curl -v --header "Content-Type: application/json" --request POST \
		--data '{"echoed": true}' \
		http://localhost:3000/api/echo

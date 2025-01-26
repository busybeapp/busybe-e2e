.PHONY: all

test:
	@echo "Running tests..."
	SLACK_TOKEN=$(SLACK_TOKEN) npm test

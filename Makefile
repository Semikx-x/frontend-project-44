install:
	npm ci

brain_games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
docker-build: 
	@docker build -t shortenit-api:latest . 

docker-run: docker-build
	@docker run -d -p 3000:3000 shortenit-api:latest

run: 
	@npm run dev
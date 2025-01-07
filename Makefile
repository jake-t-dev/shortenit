docker-build: 
	@docker build -t shortenit-api:latest . 

docker-run: docker-build
	@docker run --name "shortenit-api" -d -p 5000:5000 shortenit-api:latest

run: 
	@npm run dev
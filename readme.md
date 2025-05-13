# Posts Manager Backed  

## Requirements  
If you want to emulate the same environment to execute the project you should have:  
- Node v22.14.0  
- pnpm package manager (npm can be used but commands will be different)  
- postgresql (I'm using postgres 17.5 with a simple docker-compose file)

## Instructions  
To run the project:  

### Install Dependencies  
`pnpm install`  

### Rename .env.example to .env  

### Database config  
If you don't have postgres in your system you can use the docker compose to serve a clean db  
`docker-compose up -d `

### Execute Database Migrations
`pnpm dlx prisma migrate dev --name init`  

### Run NodeJS App  
`node main.js`

### If you want to test just the api rest:  
Just export this postman-compatible project
https://drive.google.com/file/d/14UtVBSEq0XY7UH3r0ZrZL9aqYOcRvYtx/view?usp=sharing
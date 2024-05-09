# Step 1: Official Node.js 18.20.2 Alpine runtime (maybe use non-alpine)
FROM node:18.20.2-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy code, .env supplied during runtime/compose
COPY . .

# Step 6: 
RUN npm run build

# Step 7: 
CMD [ "npm", "start" ]

# Step 8:
EXPOSE 3000

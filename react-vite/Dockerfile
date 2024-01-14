FROM node

# RUN addgroup app
# RUN adduser --ingroup app hunter


# USER hunter

WORKDIR /app

COPY package*.json ./

# USER root

# RUN chown -R hunter:app .

# USER hunter

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev



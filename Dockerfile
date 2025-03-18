# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код приложения
COPY . .

ENV MONGODB_URI=process.env.MONGODB_URI
ENV NEXTAUTH_URL=process.env.NEXTAUTH_URL
ENV NEXT_PUBLIC_API_URL=process.env.NEXT_PUBLIC_API_URL
ENV NEXTAUTH_URL_INTERNAL=process.env.NEXTAUTH_URL_INTERNAL 
ENV NEXTAUTH_SECRET=process.env.NEXTAUTH_SECRET
ENV EMAIL_USER=process.env.EMAIL_USER
ENV EMAIL_PASS=process.env.EMAIL_PASS
ENV UPLOADTHING_SECRET=process.env.UPLOADTHING_SECRET
ENV UPLOADTHING_APP_ID=process.env.UPLOADTHING_APP_ID
ENV I18NEXUS_API_KEY=process.env.I18NEXUS_API_KEY
ENV NEXT_PUBLIC_RECAPTURE_1=process.env.NEXT_PUBLIC_RECAPTURE_1
ENV RECAPTURE_2=process.env.RECAPTURE_2

# Собираем приложение Next.js
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
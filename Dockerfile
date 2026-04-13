FROM node:22-bullseye

WORKDIR /app

ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

RUN npx playwright install --with-deps chromium

COPY . .

CMD ["bash"]
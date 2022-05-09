# Сайт кафедры информационных технологий

### Порядок запуска

#### 1. Клонировать репозиторий [RU]

```
git clone https://github.com/issaafalkattan/react-landing-page-template-2021.git
cd react-landing-page-template-2021
yarn
```

Затем можно запустить локально в режиме разработки:

```
yarn dev
```

Открыть <http://localhost:3000> в браузере, чтобы просмотреть проект.

#### 2. Добавить свой собственный контент [EN]

 1. **Content**: change the configuration in the ```src/config/index.json``` file to change the content of the landing page to match your use ```src/config/index.json```  folder and .
 2. **Images**:  add any images/icons..etc to the ```public/assets/images```  folder and update their reference source in ```src/config/index.json```.
 3. **Theme**:  to change the theme, update the ```tailwind.config.js```  file to match the theme of your branding. [Tutorial](https://tailwindcss.com/docs/configuration).

#### 3. Вылить на прод [EN]

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fissaafalkattan%2Freact-landing-page-template-2022)

##### Deploy manually

You can see the results locally in production mode with:

  ```
yarn build
yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimised production build with:

```
yarn build-prod
```

### Лицензия

Licensed under the MIT License, Copyright © 2021

<h1>ВАЖНО!!!</h1>
<h3>Если вылезает ошибка Cors 403, надо перейти сюда и нажать конопочку https://cors-anywhere.herokuapp.com/corsdemo</h3>
<p>Так сделано потому что gh-pages имеет зашитный протокол https, а ссылка на API - нет, что вызывало конфликт</p>
<h1>Пару интересных моментов и подходов, к которым я решил прибегнуть, учитывая специфику выданного API:</h1> <p>При заходе на сайт подгружаются все ID которые есть и запихиваются в массив. Далее для перехода по страницам отсылается запрос на 50 элементов, которые выбираются по формуле из этого массива всех ID. </p>
<p>Результаты всех POST запросов сразу же проходят сортировку на уникальность с помощью созданных для этого функций, что исключает дубликаты по ID.</p>
<p>Логика фильтрации повторяет логику описанную выше для всех товаров.</p>
<p></p>При ошибке, ее код и сообщение выводятся в консоль, а также появляется кнопка, при нажатии которой запрос на сервер повторяется.</p>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

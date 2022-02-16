# Сборка Gulp

## Структура каталогов стилей и скриптов:
>./src/styles/\*\*/\*.less  
>./src/scripts/\*\*/\*.js 

## Инструкция
1. Скачать файлы в любую директоию
2. Ввести в терминале команду: npm i (должен быть установлен node.js)
3. Выполнить команду gulp
4. Писать свой код

## Дополнительные таски 
gulp clean - удаляет дерикторию dist 
gulp styles - конвертирует LESS в CSS, минифицирует его и обьединяет в один файл (main.min.css)
gulp scripts - конвертирует JS в стандарт ES5, минифицирует и объединяет в один файл (main.min.js)
gulp watch - запуск автоматического выполнения styles и scripts при изменениях в них
gulp build - является дефортным таском 

## Установленные NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp
[gulp-less](https://www.npmjs.com/package/gulp-less) Компиляция LESS файлов в CSS  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Компиляция новых стандартов JS в более старые  
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Обединение нескольких файлов в один  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация JS кода  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) минификация и оптимизация CSS файлов  
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов

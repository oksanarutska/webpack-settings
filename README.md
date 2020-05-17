# webpack-settings

## **_Запуск проекта :_**

1) Встановити [Node.js](https://nodejs.org/en/)
2) Перейти в папку свого проекту чи створити нову папку.
3) Склонувати або скопіювати проект (структуру і назви папок в папці - src, webpack.config.js,папку config, package.json)
4) В даній папці відкрити термінал і прописати **npm install**  для встановлення всіх пакетів, що прописані в package.json. Після чого має автоматично створитись папка node_modules з усіма залежностями.

___

## _Структура проекта:_
   1. Папка **src**:
         ⋅⋅**src/pages** - розміщуються сторінки проекту у відповідних папках. Одна папка - це одна сторінка **src** в якій не можна                     міняти структуру. Це єдина папка в  Так, накприклад в папці index: мають знаходитись такі файли: index.html, index.js i                 index.scss (може бути файл з розширенням .css i .sass). 
                Після зборки проекту, вони будуть розміщенні в папці **dist** у відповідних розділених папках : 
                      ⋅⋅*файли з розширенням .html - в корні папки dist, 
                      ⋅⋅*файли з розширенням .js - в папці dist/js, 
                      ⋅⋅*файли з розширенням .scss(css/sass) - в папці dist/styles з розширенням .css.
                      
         ⋅⋅***src/assets** - розміщуються основні статичні елементи у відповідних папках: _favicon_, _fonts_, _images_, _styles_.
                Розглянемо детальніше папку _src/assets/styles_. Так, в даній папці розміщуються: загальні стилі, стилі для окремих                     компонентів (наприклад для меню) і папка utils. В папці _src/assets/styles/utils_ знаходяться додаткові загальні стилі                   (в даному випадку показано приклад для стилів з розширенням .scss), такі як: _fonts.scss, _general.scss, _mixin.scss, -                 vars.scss. 
               
         ⋅⋅***src/components** - розміщуються html компоненти, які можна перевикористовувати. Створювати нові компоненти можна                           створювати, як і в корні папки, так і в окремих папках. В даноми випадку створено папку _src/components/common_ в якій                   розміщенно загальні компоненти, які можуть використовуватись на всіх сторінках, а саме: __footer.html_ i __header.html_.
                              
         ⋅⋅***src/js** - розміщуються .js файли для відповідних .html компонентів, які будуть перевикористовуватись. 
                                       
          

___
## **_CSS (SCSS/SASS):_**

___
## **_HTML:_**

### _HTML Структура папок:_
HTML документи розміщенні по шляху _src/html/..._ , де знаходяться 2 папки :  _components_ i _pages_

_pages_ - сторінки проекту з розширенням .html

_components_ - компоненти сторінок  з розширенням .html, які будуть перевикористовуватись. Ці компоненти можуть бути, як і в корні цієї папки, так і додаткових папках, наприклад окремо виділено папку для загальних компонентів (header i footer), які використовуються на всіх сторінках - _components/common_.

### _HTML Підключення компонентів в сторінку:_
 Підключаємо header на сторінці index.html
___
## **_JS:_**

В даному прикладі викостивується **JQuery**, можна працювати без нього видаливши в package.json в dependencies і в файлах .js де він підключений. 

Є 2 способи підключення залежностей : npm install --save-dev... i npm install --save....

**save-dev** - добавляються в package.json в dependencies devDependencies. Необхідні лиш тим хто пацює з кодом проекту. Це можуть бути: плагіни, лінтери, компілятори-транспілятори-транслятори (наприклад Coffee, SASS, Pug)

**save** - добавляються в package.json в dependencies. Це бібліотеки і фреймворки (JQuery) завдяки, яким працює ваш код і без них не запуститься у користувачів.

### _JS Структура папок:_
 Зараз в src/js в корні розміщено index.js - що є точко входу проекту.



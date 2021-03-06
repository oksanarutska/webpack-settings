# webpack-settings

## **_Запуск проекта:information_desk_person: :_** 

1) Встановити [Node.js](https://nodejs.org/en/)
2) Перейти в папку свого проекту чи створити нову папку.
3) Склонувати проект
4) В даній папці відкрити термінал і прописати `npm install`  для встановлення всіх пакетів, що прописані в package.json. Після чого має автоматично створитись папка `node_modules` з усіма залежностями.
___

## **_Команди для роботи з проектом:information_desk_person: :_** 
   У файлі _package.json_ в розділі _"scripts"_ розміщенні основні команди:
1. `npm start` - для запуску проекта (+ підтримка авто ребілд при зміні).
2. `npm run build` - команда для зборки проекту (результат збірки буде в папці dist). Скомпільовані файли з `dist` заливаються на прод сервер.
___

## **_Структура проекта:information_desk_person: :_**
   1. Папка **src**:
         + **src/pages** - розміщуються папки з сторінками (одна папка = одна сторіка). В кожній папці-сторінці повинен бути файл `*.html`, назва якого повинна співпадати з назвою папки-сторінки. Додатково, в папці-сторінці можуть бути `*.js`, `*.css/scss/sass` (будь-якого з цих форматів) файли, які автоматично будуть підключені до сторінки при білді. Накприклад в папці-сторінці `contact` мають знаходитись такі файли: `contact.html`, `contact.js` i `contact.scss`. 
                Після компіляції проекту, вони будуть розміщенні в папці `dist` у відповідних папках: 
                      ⋅⋅*файли з розширенням .html - в корні папки dist, 
                      ⋅⋅*файли з розширенням .js - в папці dist/js, 
                      ⋅⋅*файли з розширенням .scss(css/sass) - в папці dist/styles з розширенням .css.
                      
         + **src/assets** - розміщуються основні статичні ресурси у відповідних папках: _favicon_, _fonts_, _images_, _styles_.
                В папці `src/assets/styles` розміщуються: загальні стилі та стилі для окремих компонентів (наприклад для меню). 
                В папці `src/assets/styles/utils` знаходяться  _fonts.scss, _general.scss, _mixin.scss, vars.scss. 
               
         + **src/components** - розміщуються html компоненти, які можна перевикористовувати. Створювати нові компоненти  в корні папки або в окремих папках. Як приклад, створено папку `src/components/common` в якій розміщенно загальні компоненти, які можуть перевикористовуватись, а саме: __footer.html_ i __header.html_.
                              
         + **src/js** - розміщуються .js файли, які будуть перевикористовуватись на сторінках. 
         
   2. Список залежностей знаходиться у файлі _package.json_ - `dependencies` i `devDependencies`. `devDependencies` - залежності, що необхідні для розробки проекту, в  `dependencies` - бібліотеки, фреймворки потрібні для роботи сайту (`swiper.js`, `jquery` та інші).  
   Є 3 способи підключення залежностей :
        + через `npm`: `npm install {package_name} --save-dev` i `npm install {package_name} --save`
        
               save-dev - добавляються в package.json в devDependencies. Необхідні для розробки проекту. Це можуть                        бути: плагіни, лінтери, компілятори-транспілятори-транслятори (наприклад Coffee, SASS, Pug).
               save - добавляються в package.json в dependencies. Це бібліотеки і фреймворки потрібні для роботи сайту. 
                
        + підключення локальних файлів. Наприклад, скачуємо файл `jquery.min.js` в папку `src/js` і підключаємо до будь-якої сторінки: `import '../../js/jquery.min'`.
          
        + через cdn (підключивши як <script src="..."></script>` на сторінку)
        
  3. Папка **config** i **webpack.config**: В папці _config_ розміщенні два файли _helpers.js_ і _pathNames.js_, в яких винесено додаткові настройки для _webpack.config_. (Краще тут нічого не змінювати :joy: :pray:)
  
  4. Папка **dist** : дана папка буде заново створюватись після виконання команди `npm run build` в терміналі. Тут буде знаходитись збілджений проект, а саме сторінки і статичні елементи. Файли з розширенями _.html_,  _.css_, _.js_ - будуть оптимізовані і автоматично матимуть підтримку в старих браузерах та буде добавленo унікальний хеш до назви файлу, щоб уникнути кеш браузера. **_Саме з даної папки файли заливаються на прод/сервер_**. Так: 
          + в корні папки будуть знаходиться сторінки з розширенням _.html_
          + в папці _styles_ - знаходяться файли з розширенням _.css_ відповідних сторінок
          + в папці _js_ - знаходяться файли з розширенням _.js_ відповідних сторінок
          + в папці _images_ - знаходяться картинки
___
## **_HTML:information_desk_person: :_** 

### _Структура папок:_ 
   В даному проекті файли з розширеннями _html_ поділено на дві групи:
      1) сторінки. Розміщуються в **_src/pages/{назва_сторінки}/{назва_сторінки}.html_**.
      2) компоненти. Розміщуються в **_src/components/(назва відповідної папки чи файла)_**.
#### _Підключення компонентів:_ 
   В даному прикладі є загальні компонени, що розміщенні за шляхом **_src/components/common/(назва файла).html_**. Розглянемо підключення компонента **_header.html_** на сторінці _index.html_. Так, у файлі _index.html_, де має розміщуватись компонент _header.html_ прописується відповідний шаблок: 
   
             <%= _.template(require('../../components/common/_header.html').default)() %>
 
 Також є можливість передачі певних змінних чи тексту в компонент, які будуть унікальні для даної сторінки. Розглянемо підключення компонента **_footer.html_** на сторінці _index.html_. Так, у файлі _index.html_, де має розміщуватись компонент _footer.html_ прописується відповідний шаблок: 
             
              <% var footer = {
                    author: "Oksana"
               }; %>
               <%= _.template(require('../../components/common/_footer.html').default)(footer) %>
   І в компоненті _footer.html_ прописується змінна, де вона має розміщуватись в такому форматі: 
               
               <footer><%=author%></footer>
  Детальніше про підключення і особливості можна почитати [тут](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates)             
___

## **_CSS (SCSS/SASS):information_desk_person: :_** 

#### _Структура папок:_ 

   В даному проекті файли стилів з розширеннями поділено на дві групи:
      1) стилі для конкретної сторінки. Розміщуються в **_src/pages/{назва_сторінки}/{назва_сторінки}.scss_** (приклад `src/pages/contact/contact.scss`).
      2) стилі для комнонентів і загальні стилі. Розміщуються в **_src/assets/style/(назва відповідної папки чи файла)_**.
      
#### _Підключення стилів в сторінках:_
   _webpack_ **сам підключає** файл стилів і скриптів на відповдіну сторінку, саме тому важливо збрерігати структуру в якій файли конкреної сторінки розміщуються у відповідній папці. 

#### _Підключення загальних стилів і стилів компонентів:_ 
   При використанні простого _css_ стилі підключаються  на сторінці, як зазвичай. При використанні _scss/sass_ стилі прописуються в файлі _.scss/.sass_ відповідної сторінки через _@import '(шлях до файла)'_
___

## **_JS:information_desk_person: :_** 

### _Структура папок:_ 
   В даному проекті js файли поділено на дві групи:
      1) скрипт для специфічних сторінок. Розміщуються в **_src/pages/{назва_сторінки}/{назва_сторінки}.js_** (приклад `src/pages/contact/contact.js`).
      2) компоненти. Розміщуються в **_src/js/(назва відповідної папки чи файла)_**.

#### _Підключення компонентів:_ 
   Приклад підключення `test.js` (який знаходиться `src/js/test.js`) на сторінку `index.html` у файлі `index.js`: 
              
             import { test } from '../../js/test';
             
 **_JQuery_** підключається таким же ж способом:
 
          import $ from 'jquery';
          
          $(function() {
             $('body').css('color', 'blue');
          });
  ___
   
## **_Підключенні статичних файлів (fonts, images, favicons):information_desk_person: :_** 
   Підключення (прописування шляху до них) даних елементів має відбуватись на рівні всіх файлів в папці **_dist_**


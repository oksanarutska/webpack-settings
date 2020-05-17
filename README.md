# webpack-settings

## **_Запуск проекта:information_desk_person: :_** 

1) Встановити [Node.js](https://nodejs.org/en/)
2) Перейти в папку свого проекту чи створити нову папку.
3) Склонувати або скопіювати проект (структуру і назви папок в папці - src, webpack.config.js,папку config, package.json)
4) В даній папці відкрити термінал і прописати **npm install**  для встановлення всіх пакетів, що прописані в package.json. Після чого має автоматично створитись папка node_modules з усіма залежностями.

___

## **_Команди для роботи з проектом:information_desk_person: :_** 
   У файлі _package.json_ в розділі _"scripts"_ розміщенні основні команди. В терміналі прописується команда **npm ...** :
   
      1) dev- для запуску проекта
      2) watch- для склідкування за проектом. Тобто при запуску даної команди webpack буде слідкувати за змінами проекту і автоматично обновляти сторінку в браузері.
      3) start - для запуску проекта і автоматичного відкриття в браузері.
      4) build - головна команда для створення чи оновлення папки _dist_, файли з якою будуть оптимізовані і автоматично матимуть підтримку в старих браузерах і добавляє унікальний хеш до назви файлу, щоб не було кешування. Файли з саме з даної папки заливаються на прод/сервер.
___

## **_Структура проекта:information_desk_person: :_**
   1. Папка **src**:
         + **src/pages** - розміщуються сторінки проекту у відповідних папках. Одна папка - це одна сторінка **src** в якій **_не можна                     змінювати структуру_**. Це єдина папка в  Так, накприклад в папці index: мають знаходитись такі файли: index.html,                        index.js i index.scss (може бути файл з розширенням .css i .sass). 
                Після зборки проекту, вони будуть розміщенні в папці **dist** у відповідних розділених папках : 
                      ⋅⋅*файли з розширенням .html - в корні папки dist, 
                      ⋅⋅*файли з розширенням .js - в папці dist/js, 
                      ⋅⋅*файли з розширенням .scss(css/sass) - в папці dist/styles з розширенням .css.
                      
         + **src/assets** - розміщуються основні статичні елементи у відповідних папках: _favicon_, _fonts_, _images_, _styles_.
                Розглянемо детальніше папку _src/assets/styles_. Так, в даній папці розміщуються: загальні стилі, стилі для окремих                     компонентів (наприклад для меню) і папка utils. В папці _src/assets/styles/utils_ знаходяться додаткові загальні стилі                   (в даному випадку показано приклад для стилів з розширенням .scss), такі як: _fonts.scss, _general.scss, _mixin.scss, -                 vars.scss. 
               
         + **src/components** - розміщуються html компоненти, які можна перевикористовувати. Створювати нові компоненти можна                           створювати, як і в корні папки, так і в окремих папках. В даноми випадку створено папку _src/components/common_ в якій                   розміщенно загальні компоненти, які можуть використовуватись на всіх сторінках, а саме: __footer.html_ i __header.html_.
                              
         + **src/js** - розміщуються .js файли для відповідних .html компонентів, які будуть перевикористовуватись. 
         
   2. Папка **node_modules**: Тут розміщуються основні модуль. Папка створюється після команди  **npm install**. Основні залежності зараз розмішенні у файлі _package.json_ у розділі _'dependencies'_ i _'devDependencies'_. Так у розділі _devDependencies_ - розміщенні ті залежності, що необхідні для розробки проекту, а в  _'dependencies'_ - бібліотеки (в даному прикладі swiper.js), фреймворки (в даному прикладі JQuery), без яких сайт не зможе працювати у користувача.  
   Є 3 способи підключення залежностей :
        + через _npm_ (лиш в даному випадку вони будуть прописані в package.json ): npm install --save-dev... i npm install --save...
        
               save-dev - добавляються в package.json в devDependencies. Необхідні лиш тим хто пацює з кодом проекту. Це можуть                        бути: плагіни, лінтери, компілятори-транспілятори-транслятори (наприклад Coffee, SASS, Pug),
               save - добавляються в package.json в dependencies. Це бібліотеки і фреймворки (JQuery) завдяки, яким працює ваш код                      і без них не запуститься у користувачів. 
                
        + підключення на пряму скачених файлів, які будуть розміщенні, як компоненти.
          
        + через cdn
        
  3. Папка **config** i **webpack.config**: В папці _config_ розміщенні два файли _helpers.js_ і _pathNames.js_, в яких винесено додаткові настройки для _webpack.config_. (Краще тут нічого не змінювати :joy: :pray:)
  
  4. Папка **dist** : дана папка буде заново створюватись після виконання команди **npm build** в терміналі. Тут буде знаходитись збілджений проект, а саме сторінки і статичні елементи. Файли з розширенями _.html_,  _.css_, _.js_ - будуть оптимізовані і автоматично матимуть підтримку в старих браузерах та буде добавленр унікальний хеш до назви файлу, щоб не було кешування. **_Саме з даної папки файли заливаються на прод/сервер_**. Так: 
          + в корні папки будуть знаходиться сторінки з розширенням _.html_
          + в папці _styles_ - знаходяться файли з розширенням _.css_ відповідних сторінок
          + в папці _js_ - знаходяться файли з розширенням _.js_ відповідних сторінок
          + в папці _images_ - знаходяться картинки


___
## **_CSS (SCSS/SASS):information_desk_person: :_** 

#### _Структура папок:_ 

   В даному проекті в папці **src/** файли з розширеннями _css_/_scss_/_sass_ поділено на дві групи:
      1) стилі для конкретної сторінки. Розміщенні в **_src/pages/(назва відповідної папки)_**.
      2) стилі для комнонентів і загальні стилі. Розміщенні в **_src/assets/style/(назва відповідної папки чи файла)_**.
      
#### _Підключення стилів в сторінках:_
   _webpack_ **сам підключає** файл стилів і скриптів конкретних для даної сторінки, саме тому важливо збрерігати структуру в якій файли конкреної сторінки розміщуються у відповідній папці. 

#### _Підключення стилів компонентів і загальних:_ 
   При використанні простого _css_ стилі компонентів і загальні підключаються  на сторінці, як зазвичай. При використанні _scss/sass_ стилі прописуються в файлі _.scss/.sass_ відповідної сторінки через _@import '(шлях до файла)'_
   
___
## **_HTML:information_desk_person: :_** 

### _Структура папок:_ 
   В даному проекті в папці **src/** файли з розширеннями _html_ поділено на дві групи:
      1) сторінки. Розміщенні в **_src/pages/(назва відповідної папки)_**.
      2) компоненти. Розміщенні в **_src/components/(назва відповідної папки чи файла)_**.
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
  Детальніше про підключення і особливості можна почитати [тут](https://github.com/jantimon/html-webpack-plugin#options)             
___

## **_JS:information_desk_person: :_** 

### _Структура папок:_ 
   В даному проекті в папці **src/** файли з розширеннями _html_ поділено на дві групи:
      1) сторінки. Розміщенні в **_src/pages/(назва відповідної папки)_**.
      2) компоненти. Розміщенні в **_src/js/(назва відповідної папки чи файла)_**.

#### _Підключення компонентів:_ 
   Підключення компонентів _.js_ на сторінку, розклянемо на прикладі index.js в який підключається _src/js/test.js_. Так в файлі _index.js_ підключаємо _test.js_ наступним чином: 
             
             import { test } from '../../js/test';
 **_JQuery_** підключається таким же ж способом. Підключення і визов jquery:
 
          import $ from 'jquery';
          $(function() {
             $('body').css('color', 'blue');
          });
  ___
   
## **_Підключенні статичних файлів (fonts, images, favicons):information_desk_person: :_** 
   Підключення (прописування шляху до них) даних елементів має відбуватись на рівні всіх файлів в папці **_dist_**


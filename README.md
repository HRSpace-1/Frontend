# Проект "HRSpace-1"

SPA от фронтенда 1 команды ХАКАТОН+ по задаче от HR Space

Общее описание задачи: Нужно создать билдер на замену существующему.

[**Ссылка на сайт**](https://hrspace.sytes.net)

[**Макет Figma**](https://www.figma.com/file/8ITrtxsKsmu0HP9Z5OHDwI/%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD%2FHRSpace%2F%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-1?type=design&node-id=11%3A986&mode=design&t=YD2OYTn5p0pkl8NI-1)

[**Ссылка на скриншоты и билд (Яндекс Диск)**]()

## Authors

- [Елизавета](https://github.com/lizananeva) [<span><img src="https://cdn-icons-png.flaticon.com/128/906/906377.png" height="25" align="center" alt="Telegram" title="Telegram" style="right" /></span>](https://t.me/lizananeva) - Организация и единый стиль именования папок/фалов внутри проекта. Сборка Webpack. Разработка компонентов UI kit. Верстка и разработка функционала всех шагов в билдере.
- [Тимофей](https://github.com/Timon27M) [<span><img src="https://cdn-icons-png.flaticon.com/128/906/906377.png" height="25" align="center" alt="Telegram" title="Telegram" style="right" /></span>](https://t.me/Tima2772) - Ответственный за работу API. Роутинг. Работа с Redux. Разработка первых двух шагов в билдере.

## Installation

1. Скачать архив с ветки `main`, разархивировать

2. Перейти в разархивированную папку в терминале, установить зависимости командой

```bash
  npm ci
```

3. Собрать билд командой

```bash
  npm run build
```

4. Запустить билд командой

```bash
  npm run server
```

## Tech Stack

**Client:**

![Static Badge](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React)
![Static Badge](https://img.shields.io/badge/TypeScript-%232F74C0?style=for-the-badge&logo=TypeScript&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/Redux%2Ftoolkit-%237248B6?style=for-the-badge&logo=Redux&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/SCSS-%23C76395?style=for-the-badge&logo=SASS&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/HTML-gray?style=for-the-badge&logo=HTML5)

**Tools:**

![Static Badge](https://img.shields.io/badge/Git-black?style=for-the-badge&logo=Git&logoColor=%23fff&color=%23E84E31)
![Static Badge](https://img.shields.io/badge/Webpack-%2391CDF1?style=for-the-badge&logo=Webpack&logoColor=%23fff)

## Materials

1. **Libraries**

- [TypeScript](https://www.npmjs.com/package/typescript)
- [React](https://react.dev/)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [Redux/toolkit](https://redux-toolkit.js.org/)
- [SASS](https://www.npmjs.com/package/sass)

2. **Fonts**

- Использовался встроенный шрифт Arial

3. **SVG**
   Все SVG взяты из макета [Figma](https://www.figma.com/file/8ITrtxsKsmu0HP9Z5OHDwI/%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD%2FHRSpace%2F%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-1?type=design&node-id=11%3A986&mode=design&t=YD2OYTn5p0pkl8NI-1)

## SCSS

Все основные SCSS константы лежат по пути src/styles/const.scss.

- и являются цветовой палитрой приложения. Все цвета взяты из макета Figma.

Все основные миксины лежат по пути src/styles/mixins.scss.

- начинающиеся с reset - обнуление стандартных стилей
- начинающиеся с text - стили для типографики на основе Figma UI kit

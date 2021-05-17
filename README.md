# Brandsforge_TEST

## Автор: [Влад Нестеров](vk.com/vlanesvit)

## Как начать или как поднять проект

Исходные файлы проекта находятся в папке srс. В ней есть файл index.html

Проект адаптирован под размеры всех устройств

---

## Описание

Проект является тестовым заданием [Кузни Брендов](https://brandsforge.com/)

В проекте были использованы:

- HTML
- CSS, точнее его препроцессор SCSS
- JavaScript
- Библиотека three.js для работы с 3D-моделями

```

    let loader = new THREE.GLTFLoader();
    let obj = null;
    loader.load('image/main/fox/scene.gltf', function(gltf) {
    obj = gltf;
    obj.scene.scale.set(1.3, 1.3, 1.3);

    scene.add(obj.scene);
    });
```

---

## В проекте было реализовано

1. Анимация вращения лисы

![1](https://media.giphy.com/media/8xXRsGypnLyBcA1bbT/giphy.gif)

2. Анимация отклонения блока к курсору

![2](https://media.giphy.com/media/mXltd5WJR89R6sBQHB/giphy.gif)

3. Верстка формы по всех ее состояниях

![3](https://media.giphy.com/media/2oIis3R7okHQuBkmmM/giphy.gif)

4. Верстка табов и аккордионов

![4](https://media.giphy.com/media/sh82vcAOvQAOmVqbqB/giphy.gif)

---

## В проекте не было реализовано

1. Загрузка файлов в форме.
   Вывод нескольких файлов и удаление их
2. Кастомный select.
   Нет галочки при выборе одного из Выборов. Судя по макету она должна быть

---

## Проблемы, с которыми я стокнулся

### Проблема с исходным форматом 3D-модели

Я впервые работал с этой библиотекой three.js, поэтому долго возился.
Сначала решил загрузить модель в исходном расширении, в .fbx, но не получилось. Подробного туториала о работе с этим расширением я не нашел.
И я решил сконвертировать в формат .gltf, и после, подключив лоадер и настроив все, в консоли появлялась ошибка о том, что модель не найдена.
В итоге просто скачал другую модель на sketchfab.com уже в нужном мне расширении и более менее настроил свет.

![fox](https://i.postimg.cc/XYPXqMKj/fox.jpg)

### Проблема с отклонением карты к курсору

Проблема была в том, что текст на карточке мешал отклонению самой карты к курсору и возвращал его в исходное положение

![gif](https://media.giphy.com/media/EEMCM6ChIReHTbKu8R/source.gif)

Я задал карточке свойство:

```
    cardContent.style.pointerEvents = "none";
```

И проблема пропала. Но это не идеальное решение, т.к. кнопка не будет реагировать и на нее нельзя нажать.

### 3D-модель не загружается локально

Проблема появляется тогда, когда открываешь сайт через index.html

![fox](https://i.postimg.cc/3RqBVj2J/1-1.png)

Я гуглил этот вопрос и понял, что нужно запустить сервер, на json например, и слать запросы через него, т.к. ему запрещено получать файлы напрямую.

---

## Время, затраченное на задание

Я получил ТЗ 19 апреля, а сдаю тест 24 апреля.

Если в кратце, то на всю работу ушло примерно **9-10 человекочасов**. Я много времени возился с 3D-моделью, но все же это хороший опыт

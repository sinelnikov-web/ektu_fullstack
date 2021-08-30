import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    ru: {
        translation: {
            "год": "год",
            "г.": "г.",
            "Назад": "Назад",
            "Далее": "Далее",
            "Казахский": "Казахский",
            "Русский": "Русский",
            "Язык": "Язык.",
            "Закончить": "Закончить",
            "Пропустить": "Пропустить",
            'Мероприятий на этот день нет.': 'Мероприятий на этот день нет.',
            "Поиск": "Поиск",
            "Панель инструментов": "Панель инструментов",
            "Office документ": "Office документ",
            "Папка": "Папка.",
            "Рабочий стол": "Рабочий стол",
            "Новости": "Новости",
            "Социальные сети": "Социальные сети",
            "Календарь": "Календарь",
            "Instagram.": "Instagram",
            "Добро пожаловать": "Добро пожаловать",
            "Понедельник": "Понедельник",
            "Вторник": "Вторник",
            "Среда": "Среда",
            "Четверг": "Четверг",
            "Пятница": "Пятница",
            "Суббота": "Суббота",
            "Воскресенье": "Воскресенье",
            "Январь": "Январь",
            "Февраль": "Февраль",
            "Март": "Март",
            "Апрель": "Апрель",
            "Май": "Май",
            "Июнь": "Июнь",
            "Июль": "Июль",
            "Август": "Август",
            "Сентябрь": "Сентябрь",
            "Октябрь": "Октябрь",
            "Ноябрь": "Ноябрь",
            "Декабрь": "Декабрь",
            "облачно": "облачно",
            "При нажатии на эту кнопку, откроется виджет с нашим Instagram": "При нажатии на эту кнопку, откроется виджет с нашим Instagram",
            "Введите текст для поиска": "Введите текст для поиска",
            "При нажатии на этот элемент Вы можете посмотреть запланированные мероприятия по регионам.": "При нажатии на этот элемент Вы можете посмотреть запланированные мероприятия по регионам.",
            "При нажатии на этот элемент Вы можете сменить язык сайта.": "При нажатии на этот элемент Вы можете сменить язык сайта.",
            "Это рабочий стол. На нём располагаются папки и файлы с контентом.": "Это рабочий стол. На нём располагаются папки и файлы с контентом.",
            "Это папка. Вы можете открыть её двойным нажатием.": "Это папка. Вы можете открыть её двойным нажатием.",
            "При нажатии на этот элемент Вы можете увидеть ссылки на наши социальные сети.": "При нажатии на этот элемент Вы можете увидеть ссылки на наши социальные сети.",
            "При нажатии на этот элемент Вы можете посмотреть последние новости.": "При нажатии на этот элемент Вы можете посмотреть последние новости.",
            "Это документ office. Вы можете открыть его двойным нажатием и посмотреть содержимое, скачать, распечатать.": "Это документ office. Вы можете открыть его двойным нажатием и посмотреть содержимое.",
            "Это панель инструментов. На ней располагается навигация по сайту.": "Это панель инструментов. На ней располагается навигация по сайту.",
            "Это поиск по сайту. При нажатии на него, откроется поиск с помощью которого Вы легко сможете найти нужный контент на сайте.": "Это поиск по сайту. При нажатии на него, откроется поиск с помощью которого Вы легко сможете найти нужный контент на сайте.",
        }
    },
    kk: {
        translation: {
            "год": "жыл",
            "Назад": "Артқа",
            "Пропустить": "Өткізіп жіберу",
            "Далее": "Әрі қарай",
            "Закончить": "Аяқтау",
            "Язык": "Тіл",
            "Казахский": "Қазақ",
            "Русский": "Орыс",
            "г.": "ж.",
            "Поиск": "Іздеу",
            "Добро пожаловать": "Қош келдіңіз",
            "Панель инструментов": "Тапсырмалар панелі",
            "Office документ": "Office құжаты",
            "Папка": "Қалта",
            "Рабочий стол": "Жұмыс үстелі",
            "Новости": "Жаңалықтар",
            "Социальные сети": "Әлеуметтік желілер",
            "Календарь": "Күнтізбе",
            "Instagram.": "Instagram",
            "Понедельник": "Дүйсенбі",
            "Вторник": "Сейсенбі",
            "Среда": "Сәрсенбі",
            "Четверг": "Бейсенбі",
            "Пятница": "Жұма",
            "Суббота": "Сенбі",
            "Воскресенье": "Жексенбі",
            "Январь": "Қаңтар",
            "Февраль": "Ақпан",
            "Март": "Наурыз",
            "Апрель": "Сәуір",
            "Май": "Мамыр",
            "Июнь": "Маусым",
            "Июль": "Шілде",
            "Август": "Тамыз",
            "Сентябрь": "Қыркүйек",
            "Октябрь": "Қазан",
            "Ноябрь": "Қараша",
            "Декабрь": "Желтоқсан",
            "облачно": "бұлтты",
            'Мероприятий на этот день нет.': 'Бұл күні іс-шаралар жоқ.',
            "При нажатии на эту кнопку, откроется виджет с нашим Instagram": "Бұл белгішені басу арқылы виджет біздің Instagram парақшамызды ашады.",
            "Введите текст для поиска": "Іздеу үшін мәтінді енгізіңіз",
            "При нажатии на этот элемент Вы можете посмотреть запланированные мероприятия по регионам.": "Бұл элементті басқан кезде сіз жоспарланған іс-шараларды аймақтар бойынша көре аласыз.",
            "При нажатии на этот элемент Вы можете сменить язык сайта.": "Бұл элементті басу арқылы сайттың тілін өзгертуге болады.",
            "Это рабочий стол. На нём располагаются папки и файлы с контентом.": "Бұл жұмыс үстелі. Осында папкалар мен файлдар орналасады.",
            "Это папка. Вы можете открыть её двойным нажатием.": "Бұл папка. Сіз оны екі рет басу арқылы аша аласыз.",
            "При нажатии на этот элемент Вы можете увидеть ссылки на наши социальные сети.": "Бұл элементті басу арқылы сіз біздің әлеуметтік желілерге сілтемелерді көре аласыз.",
            "При нажатии на этот элемент Вы можете посмотреть последние новости.": "Бұл элементті басу арқылы сіз соңғы жаңалықтарды көре аласыз.",
            "Это документ office. Вы можете открыть его двойным нажатием и посмотреть содержимое, скачать, распечатать.": "Бұл office құжаты. Сіз оны екі рет басу арқылы ашып, мазмұнын қарауға, жүктеуге, басып шығаруға болады.",
            "Это панель инструментов. На ней располагается навигация по сайту.": "Бұл құралдар тақтасы. Мұнда сайттың навигациясы әзірленген.",
            "Это поиск по сайту. При нажатии на него, откроется поиск с помощью которого Вы легко сможете найти нужный контент на сайте.": "Бұл сайттағы іздеу құралы. Оны басу арқылы сайттың ішіндегі қажетті файлдар мен папкаларды табуға мүмкіндік беретін виджет ашылады.",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
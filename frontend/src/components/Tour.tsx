import Joyride, {CallBackProps} from 'react-joyride';
import { useTranslation } from 'react-i18next';

const Tour = () => {
    const { t, i18n } = useTranslation();
    const steps = [
        {
            title: `${t('Рабочий стол')}`,
            target: '.desktop',
            content: t('Это рабочий стол. На нём располагаются папки и файлы с контентом.'),
            placement: 'center',
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Папка')}`,
            target: '.folder',
            content: t('Это папка. Вы можете открыть её двойным нажатием.'),
            placement: 'right-start',
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Office документ')}`,
            target: '.office',
            content: t('Это документ office. Вы можете открыть его двойным нажатием и посмотреть содержимое.'),
            placement: 'right-start',
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Instagram.')}`,
            target: '.external-widget__icon',
            content: t('При нажатии на эту кнопку, откроется виджет с нашим Instagram'),
            placement: 'right-start',
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Панель инструментов')}`,
            target: '.toolbar',
            content: t('Это панель инструментов. На ней располагается навигация по сайту.'),
            placement: 'top',
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Поиск')}`,
            target: '.toolbar-search',
            content: t('Это поиск по сайту. При нажатии на него, откроется поиск с помощью которого Вы легко сможете найти нужный контент на сайте.'),
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Новости')}`,
            target: '.toolbar-weather',
            content: t('При нажатии на этот элемент Вы можете посмотреть последние новости.'),
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Социальные сети')}`,
            target: '.toolbar-socials',
            content: t('При нажатии на этот элемент Вы можете увидеть ссылки на наши социальные сети.'),
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Язык')}`,
            target: '.toolbar-language',
            content: t('При нажатии на этот элемент Вы можете сменить язык сайта.'),
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            title: `${t('Календарь')}`,
            target: '.toolbar-datetime',
            content: t('При нажатии на этот элемент Вы можете посмотреть запланированные мероприятия по регионам.'),
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,

        },
    ]

    const userCheckTour = (state: CallBackProps) => {
        if (state.action === 'reset' || state.action === 'skip') {
            localStorage.setItem('tourComplete', 'true')
        }
    }

    // @ts-ignore
    return (
        <div className="app">

            <Joyride
                // @ts-ignore
                steps={steps}
                continuous={true}
                run={true}
                locale={{
                    last: t('Закончить'),
                    next: t('Далее'),
                    back: t('Назад'),
                    skip: t('Пропустить')
                }}
                showSkipButton={true}
                callback={(state) => userCheckTour(state)}
            />
        </div>
    );
}

export default Tour;
import Joyride from 'react-joyride';

const Tour = () => {

    const steps = [
        {
            target: '.desktop',
            content: 'Это рабочий стол. На нём располагаются папки и файлы с контентом.',
            placement: 'top',
            offset: -400
        },
        {
            target: '.file',
            content: 'Это папка. Вы можете открыть её двойным нажатием.',
            placement: 'right-start',
            disableBeacon: true,
            disableOverlayClose: true,
            hideCloseButton: true,
            spotlightClicks: true,
        },
        {
            target: '.toolbar',
            content: 'Это панель иструментов. На ней располагается навигация по сайту.',
            placement: 'top',
        },
        {
            target: '.toolbar-search',
            content: 'Это поиск по сайту. При нажатии на него, откроется поиск с помощью которого Вы легко сможете найти нужный контент на сайте.',
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
        },
        {
            target: '.toolbar-weather',
            content: 'При нажатии на этот элемент Вы можете посмотреть последние новости.',
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
        },
        {
            target: '.toolbar-language',
            content: 'При нажатии на этот элемент Вы можете сменить язык сайта.',
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
        },
        {
            target: '.toolbar-datetime',
            content: 'При нажатии на этот элемент Вы можете посмотреть запланированные мероприятия.',
            placement: 'top',
            styles: {
                options: {
                    zIndex: 10000,
                },
            },
        },
    ]

    // @ts-ignore
    return (
        <div className="app">

            <Joyride
                // @ts-ignore
                steps={steps}
                continuous={true}
                run={true}
            />
        </div>
    );
}

export default Tour;
import React, {useEffect, useState, MouseEvent, DragEvent, ReactElement, useRef} from 'react';
import EmptyFolderIcon from '../assets/images/empty_folder.png'
import styled from "styled-components";
import {FileType} from "./Desktop";

interface WindowProps {
    windowContent: ReactElement,
    onFileClose: (id: number) => void
    onFileMinimize: (id: number) => void
    id: number
    onWindowFocus: (id: number) => void
    file: FileType
    openedFilesCount: number
}

const Window = React.memo<WindowProps>(({windowContent, onFileClose, id, file, onWindowFocus, openedFilesCount, onFileMinimize}) => {
    const [topBarMouseDown, setTopBarMouseDown] = useState(false)
    const [caught, setCaught] = useState(false)
    const [top, setTop] = useState(50 + openedFilesCount * 10)
    const [left, setLeft] = useState(50 + openedFilesCount * 10)
    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [opening, setOpening] = useState(true)
    const [closing, setClosing] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [fullScreen, setFullScreen] = useState(false)
    const windowRef = useRef<HTMLDivElement>(null)

    const moveWindow = (e: MouseEvent<HTMLDivElement>) => {
        if (caught) {
            setCursorX(e.clientX)
            setCursorY(e.clientY)
            if (caught) {
                setTop(prev => prev + (e.clientX - cursorX))
                setLeft(prev => prev + (e.clientY - cursorY))
            }
        }

    }

    const catchWindow = (e: DragEvent<HTMLDivElement>) => {
        onWindowFocus(id)
        setFullScreen(false)
        if (topBarMouseDown) {
            setCursorX(e.clientX)
            setCursorY(e.clientY)
            setCaught(true)

            // @ts-ignore
            setTimeout(() => e.target.classList.add('hold'), 0)
        } else {
            e.preventDefault()
        }

    }

    const throwWindow = (e: DragEvent<HTMLDivElement>) => {
        setTop(prev => prev + (e.clientY - cursorY))
        setLeft(prev => prev + (e.clientX - cursorX))
        setCaught(false)
        setTopBarMouseDown(false)
    }

    const closeWindow = (e: MouseEvent<HTMLButtonElement>) => {
        setClosing(true)
        onFileClose(file.id)
    }

    const minimizeWindow = (e: MouseEvent<HTMLButtonElement>) => {
        onFileMinimize(id)
    }

    const toggleFullScreenWindow = (e: MouseEvent<HTMLButtonElement>) => {
        setFullScreen(prev => !prev)
    }

    return (
        <FolderStyled
            ref={windowRef}
            draggable
            onDragStart={catchWindow}
            onDragEnd={throwWindow}
            onDragOver={(e) => e.preventDefault()}
            onMouseMove={(e) => moveWindow(e)}
            onClick={(e) => onWindowFocus(id)}
            top={top + 'px'}
            left={left + 'px'}
            zIndex={file.isFocusedOnWindow ? 1000 : 20}
            fullScreen={fullScreen}
            onAnimationEnd={() => {
                setOpening(false)
            }}
            className={
                'window' +
                (isActive ? ' active' : '') +
                (opening ? ' opening' : '') +
                (closing ? ' closing' : '') +
                (file.isMinimized ? ' minimized' : '') +
                (!isVisible ? ' hidden' : '')
            }
        >
            <div
                className="window__top-bar top-bar"
                id={'top-bar'}
                onMouseDown={() => setTopBarMouseDown(true)}
            >
                <div className="top-bar__left-side">
                    <span>{file.title}</span>
                </div>
                <div className="top-bar__right-side">
                    <button
                        className="top-bar__btn top-bar__btn--wrap"
                        onClick={minimizeWindow}
                    >
                        <span></span>
                    </button>
                    <button
                        className="top-bar__btn top-bar__btn--resize"
                        onClick={toggleFullScreenWindow}
                    >
                        <span></span>
                    </button>
                    <button
                        className="top-bar__btn top-bar__btn--close"
                        onClick={closeWindow}
                    >
                        <span>&times;</span>
                    </button>
                </div>
            </div>
            <div className="content">
                {windowContent}
            </div>
        </FolderStyled>
    );
});

interface FolderStyleProps {
    top: string
    left: string
    zIndex: number
    fullScreen: boolean
}

const FolderStyled = styled.div<FolderStyleProps>`
  width: ${props => props.fullScreen ? '100%' : '800px'};
  height: ${props => props.fullScreen ? '100%' : '600px'};
  background-color: var(--white-color);
  position: fixed;
  top: ${props => props.fullScreen ? '0' : props.top};
  left: ${props => props.fullScreen ? '0' : props.left};
  z-index: ${props => props.zIndex};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px black;
  transition: all 0.3s linear;
  &.hidden {
    display: none;
  }
  &.opening {
    animation: 0.5s openWindow;
  }
  &.closing {
    animation: 0.5s closeWindow;
    opacity: 0;
  }
  &.minimized {
    transform-origin: bottom;
    animation: 0.5s minimizeWindow;
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  @keyframes openWindow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes closeWindow {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0);
      opacity: 0;
    }
  }
  @keyframes minimizeWindow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
  &.hold {
    display: none;
  }

  .window__top-bar {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
  }
  
  .top-bar__left-side {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }

  .top-bar__right-side {
    display: flex;
  }

  .top-bar__btn {
    display: block;
    height: 100%;
    width: 4rem;
    border: none;
    outline: none;
    background: transparent;
    position: relative;
    padding: 1rem;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    &--close {
      &:hover {
        background: rgba(255, 0, 0, 1);
        color: white;
      }
    }
  }

  .top-bar__btn--wrap span {
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .top-bar__btn--resize span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  .top-bar__btn--close span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 3rem;
    font-weight: 300;
    transform: translate(-50%, -50%);
  }

  .content {
    width: 100%;
    height: calc(100% - 3rem);
  }
`

export default Window;
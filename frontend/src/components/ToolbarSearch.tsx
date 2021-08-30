import React, {MouseEvent, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../assets/images/windows_search.svg"

import {FileType} from "./Desktop";
import loadable from '@loadable/component'
import {useDispatch, useSelector} from "react-redux";
import {targetSelector} from "../selectors/system-selectors";
import {setTarget} from "../redux/actions/system-actions";

const Search = loadable(() => import("./Search"))

interface ToolbarSearchProps {
    files: Array<FileType>
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
}

const ToolbarSearch: React.FC<ToolbarSearchProps> = ({files, setFiles}) => {
    const [openSearch, setOpenSearch] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null)
    const globalTarget = useSelector(targetSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        if (globalTarget !== mainRef.current && openSearch) {
            setOpenSearch(false)
        }
    }, [globalTarget])
    const setGlobalTarget = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        dispatch(setTarget(e.currentTarget))
    }
    const check = (globalTarget === mainRef.current) && mainRef.current

    return (
        <ToolbarSearchStyled ref={mainRef} className={'toolbar-search'} onClick={(e) => {
            setGlobalTarget(e)
        }}>
            <div className="toolbar-icon-wrapper" onClick={() => setOpenSearch(prev => !prev)}>
                <SearchIcon className={'search-icon'}/>
            </div>
            <Search className={!check || !openSearch ? 'hidden' : ''} setFiles={setFiles}
                    files={files}/>
        </ToolbarSearchStyled>
    );
};

const ToolbarSearchStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  .toolbar-icon-wrapper {
    padding: 0.5rem 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }
  .search-icon-wrapper {
    width: 100%;
    height: 100%;

    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }

  .search-icon {
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 400px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export default ToolbarSearch;
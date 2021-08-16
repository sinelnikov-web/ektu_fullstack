import React, {useState} from 'react';
import {ReactComponent as StartUpIcon} from "../assets/images/windows_startup.svg";
import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../assets/images/windows_search.svg"
import Search from "./Search";
import {FileType} from "./Desktop";

interface ToolbarSearchProps {
    files: Array<FileType>
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
}

const ToolbarSearch:React.FC<ToolbarSearchProps> = ({files, setFiles}) => {

    const [openSearch, setOpenSearch] = useState<boolean>(false)

    return (
        <ToolbarSearchStyled onClick={() => setOpenSearch(prev => !prev)}>
            <div className="search-icon-wrapper">
                <SearchIcon className={'search-icon'}/>
            </div>
            <Search setOpenSearch={setOpenSearch} className={!openSearch ? 'hidden' : ''} setFiles={setFiles} files={files}/>
        </ToolbarSearchStyled>
    );
};

const ToolbarSearchStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  .search-icon-wrapper {
    width: 100%;
    height: 100%;
    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }
  .search-icon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default ToolbarSearch;
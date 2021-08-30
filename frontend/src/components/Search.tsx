import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../assets/images/windows_search.svg";
import {FileType} from "./Desktop";
import File from "./File";
import {useTranslation} from "react-i18next";

interface SearchProps {
    files: Array<FileType>
    setFiles: (cllbck: (files: Array<FileType>) => Array<FileType>) => void
    className: string
    setOpenSearch: (value: boolean) => void
}

const Search: React.FC<SearchProps> = ({files, setFiles, className, setOpenSearch}) => {
    const {t, i18n} = useTranslation()
    const [query, setQuery] = useState('')

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const onFileClick = (id: number) => {
        setFiles(prev => {
            return prev.map(file => {
                if (file.id === id) {
                    return {...file, isOpen: true, isFocusedOnWindow: true, isMinimized: false}
                } else if (file.isFocusedOnWindow) {
                    return {...file, isFocusedOnWindow: false}
                } else {
                    return file
                }
            })
        })
    }

    return (
        <SearchStyled className={className + ' toolbar-search-popup'}>
            <span onClick={() => setOpenSearch(false)} className="close-btn"></span>
            <div className="search__body">
                {files.map(file => file.title.toLowerCase().includes(query.toLowerCase())
                    ?
                    <div key={file.id} className={"search__result"} onClick={() => setOpenSearch(false)}><File onClick={onFileClick} file={file} files={files}  /></div>
                    : <div key={file.id} className={"search__result hidden"}><File onClick={onFileClick} file={file} files={files}  /></div>)}
            </div>
            <div className="search__footer">
                <div className="search__field">
                    <label>
                        <input onChange={onChange} value={query} type="text" className="search__input" placeholder={t('Введите текст для поиска')}/>
                        <SearchIcon className={'input__search-icon'}/>
                    </label>
                </div>
            </div>
        </SearchStyled>
    );
};

const SearchStyled = styled.div`
  width: 400px;
  height: 600px;
  background-color: #333333;
  position: absolute;
  top: -1200%;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: opacity 0.1s ease-in-out;
  .close-btn {
    position: absolute;
    top: 15px;
    right: 30px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);

    &:before {
      content: '';
      transform-origin: center;
      position: absolute;
      top: 50%;
      right: 50%;
      width: 2px;
      height: 100%;
      background-color: #fff;
      transform: translate(50%, -50%) rotate(90deg);
    }

    &:after {
      content: '';
      transform-origin: center;
      position: absolute;
      top: 50%;
      right: 50%;
      width: 2px;
      height: 100%;
      background-color: #fff;
      transform: translate(100%, -50%);
    }
  }
  &.hidden {
    opacity: 0;
    height: 0;
    .search__input {
      display: none;
    }
  }
  .search__body {
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
  }
  .file-wrapper {
    width: 100%;
    max-width: none;
  }
  .search__result.hidden {
    display: none;
  }
  .search__result {
    .file {
      flex-direction: row;
    }
  }
  .file {
    display: flex;
    align-items: center;
    width: 100%;
    .file__icon {
      margin-bottom: 0;
      width: 5rem;
      height: 5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .search__footer {
    width: 100%;
    .search__field {
      width: 100%;
      position: relative;
      
      }
      .input__search-icon {
        position: absolute;
        top: 30%;
        left: 0;
        fill: black;
        height: 40%;
        width: 4rem;
      }
    }
  .search__input {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 300;
    padding: 1rem 0 1rem 4rem;
    display: block;
    line-height: 1.2;
    &::placeholder {
      color: black;
    }
  }
  @media (max-width: 823px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 5rem);
  }
`

export default Search;
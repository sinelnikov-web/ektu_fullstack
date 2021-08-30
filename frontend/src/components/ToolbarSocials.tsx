import React, {MouseEvent, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {ReactComponent as ArrowUp} from "../assets/images/up_arrow.svg";
import loadable from '@loadable/component'
import {useDispatch, useSelector} from "react-redux";
import {targetSelector} from "../selectors/system-selectors";
import {setTarget} from "../redux/actions/system-actions";

const SocialsWidget = loadable(() => import("./SocialsWidget"))

const ToolbarSocials = () => {
    const [showSocials, setShowSocials] = useState(false)
    const mainRef = useRef<HTMLDivElement>(null)
    const globalTarget = useSelector(targetSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        if (globalTarget !== mainRef.current && showSocials) {
            setShowSocials(false)
        }
    }, [globalTarget])
    const setGlobalTarget = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        dispatch(setTarget(e.currentTarget))
    }
    const check = (globalTarget === mainRef.current) && mainRef.current
    return (
        <ToolbarSocialsStyled ref={mainRef} onClick={setGlobalTarget} className={'toolbar-socials'}>
            <div onClick={() => setShowSocials(prev => !prev)} className="toolbar-icon-wrapper">
                <ArrowUp className={'toolbar__arrow'}/>
            </div>
            <SocialsWidget showSocials={showSocials && !!check}/>
        </ToolbarSocialsStyled>
    );
};

const ToolbarSocialsStyled = styled.div`
  position: relative;
  color: var(--white-color);
  text-align: center;
  height: 100%;
  .toolbar-icon-wrapper {
    padding: 0.5rem 0.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }
`

export default ToolbarSocials;
import React, {MutableRefObject, useRef, useState} from 'react';
import styles from './LazyImage.module.css'
import useOnScreen from "../../hooks/use-on-screen";

interface LazyImageProps {
    src: string
    alt: string
    onLoad?: () => void
    width?: string
    height?: string,
    cn?: string
}

const LazyImage = React.memo<LazyImageProps>(({src, alt='',
                                                  onLoad=() => {}, width='100%',
                                                  height='100%', cn=''}) => {

    const [isLoaded, setIsLoaded] = useState(false)

    const imageRef = useRef<HTMLImageElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(containerRef, '100px')

    return (
        <div ref={containerRef} className={styles.container + (isLoaded ? ` ${styles.containerLoaded}` : '') + (cn ? ` ${cn}` : '')}>
            {(isVisible || isLoaded) && <img
                ref={imageRef}
                onLoad={() => isVisible ? setIsLoaded(true) : null}
                className={styles.image + (isLoaded ? ` ${styles.imageLoaded}` : '')}
                src={src}
                alt={alt}
            />}
        </div>
    );
});

export default LazyImage;
import {MutableRefObject, RefObject, useEffect, useState} from "react";


function useOnScreen(ref: RefObject<HTMLDivElement>, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const refObj = ref.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (refObj) {
            observer.observe(refObj);
        }
        return () => {
            if (refObj) {
                observer.unobserve(refObj);
            }
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export default useOnScreen
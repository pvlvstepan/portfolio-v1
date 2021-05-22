import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSlideFadeOnView = () => {
    const slideFade = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            slideFade.start('visible');
        }
    }, [slideFade, inView]);

    return [ref, slideFade];
};

export default useSlideFadeOnView;

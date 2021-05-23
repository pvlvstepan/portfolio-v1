export const slideFade = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1.5,
        },
    },
};

export const staggerChildren = {
    container: {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                staggerChildren: 0.1
            }
        }
    },
    item: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
        transition: {
            type: 'spring',
            duration: 1.5,
        }
    }
};
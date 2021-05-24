export const slideFade = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
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
                staggerChildren: 0.2
            }
        }
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0, transition: {
                duration: 0.5,
            }
        },

    }
};

export const staggerHero = {
    container: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    },
    item: {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.5
            }
        },
    }
};
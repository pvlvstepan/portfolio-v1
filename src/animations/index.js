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
        visible: {
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
        visible: {
            transition: {
                delay: 1.5,
                delayChildren: 1.5,
                staggerChildren: 0.2
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

export const staggerNav = {
    container: {
        visible: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2
            }
        }
    },
    item: {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.3
            }
        },
    }
};
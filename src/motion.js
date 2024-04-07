export const navbarSlide = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: { duration: 0.5 }
    },
};
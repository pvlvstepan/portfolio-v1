import { mode, darken, lighten } from '@chakra-ui/theme-tools';

const Button = {
    baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        rounded: 'xl',
        transition: '.25s ease-in-out'
    },
    sizes: {
        sm: {
            fontSize: "sm",
            px: 4,
            py: 3,
        },
        md: {
            fontSize: "md",
            px: 6,
            py: 4,
        },
    },
    // Two variants: outline and solid
    variants: {
        secondary: (props) => ({
            border: "2px solid",
            borderColor: "accent",
            color: "accent",
            _hover: {
                bg: mode(darken("light.bg", 10), lighten("dark.bg", 10))(props)
            }
        }),
        primary: (props) => ({
            bg: "accent",
            color: "dark.primary",
            _hover: {
                bg: mode(darken("accent", 10), lighten("accent", 10))(props)
            }
        }),
    },
    // The default size and variant values
    defaultProps: {
        size: "md",
        variant: "primary",
    },
};

export default Button;
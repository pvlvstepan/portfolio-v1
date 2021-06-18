import { mode, darken, lighten } from '@chakra-ui/theme-tools';

const Button = {
    baseStyle: {
        textDecoration: 'none !important',
        userSelect: 'none',
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 'wide',
        rounded: 'xl',
        transition: '.25s ease-in-out',
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
    variants: {
        secondary: (props) => ({
            border: "2px solid",
            borderColor: mode('light.accent', 'dark.accent')(props),
            color: mode('light.accent', 'dark.accent')(props),
            _hover: {
                _disabled: {
                    bg: mode(darken("light.bg", 10), darken("dark.bgLighter", 5))(props)
                },
                bg: mode(darken("light.bg", 10), darken("dark.bgLighter", 5))(props)
            }
        }),
        primary: (props) => ({
            bg: mode('light.accent', 'dark.accent')(props),
            color: "dark.primary",
            _hover: {
                _disabled: {
                    bg: mode(darken('light.accent', 10), lighten('dark.accent', 10))(props)
                },
                bg: mode(darken('light.accent', 10), lighten('dark.accent', 10))(props)
            }
        })
    },
    defaultProps: {
        size: "md",
        variant: "primary",
    },
};

export default Button;
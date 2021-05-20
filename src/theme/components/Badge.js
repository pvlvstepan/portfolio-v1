import { mode } from '@chakra-ui/theme-tools';

const Badge = {
    baseStyle: {
        rounded: 'full',
        fontWeight: 'semibold',
        textTransform: "none"
    },
    sizes: {
        sm: {
            fontSize: "sm",
            px: 3,
            py: 0,
        },
    },
    variants: {
        outline: (props) => ({
            boxShadow: 'inset 0 0 0px 2px ' + mode('var(--sp-colors-light-primary)', 'var(--sp-colors-dark-primary)')(props),
            color: mode('light.primary', 'dark.primary')(props)
        }),
    },
    defaultProps: {
        size: "sm",
        variant: "outline",
    },
};

export default Badge;
import { mode } from '@chakra-ui/theme-tools';

const Badge = {
    baseStyle: {
        rounded: 'xl',
        fontWeight: 'medium',
        textTransform: "none"
    },
    sizes: {
        sm: {
            fontSize: "16px",
            px: 2,
            py: 0,
        },
    },
    variants: {
        outline: (props) => ({
            bg: mode('light.bg', 'dark.bg')(props),
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
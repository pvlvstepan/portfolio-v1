import { mode } from '@chakra-ui/theme-tools';

const Textarea = {
    baseStyle: {
        fontWeight: "semibold",
        rounded: 'xl',
        transition: '.25s ease-in-out',
        boxShadow: 'md'
    },
    variants: {
        filled: (props) => ({
            border: "2px solid",
            bg: mode("light.bgLighter", "dark.bgLighter")(props),
            borderColor: mode("light.bgLighter", "dark.bgLighter")(props),
            color: mode('light.accent', 'dark.accent')(props),
            _hover: {
                borderColor: mode('light.accent', 'dark.accent')(props),
                bg: mode("light.bgLighter", "dark.bgLighter")(props)
            },
            _focus: {
                borderColor: mode('light.accent', 'dark.accent')(props)
            }
        }),
    },
    defaultProps: {
        variant: "filled",
    },
};

export default Textarea;
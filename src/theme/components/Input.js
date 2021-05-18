import { mode } from '@chakra-ui/theme-tools';

const Input = {
    baseStyle: {
        field: {
            fontWeight: "semibold",
            transition: '.25s ease-in-out',
            boxShadow: 'sm'
        }
    },
    variants: {
        filled: (props) => ({
            field: {
                border: "2px solid",
                bg: mode("light.bgLighter", "dark.bgLighter")(props),
                borderColor: mode("light.bgLighter", "dark.bgLighter")(props),
                color: 'accent',
                _hover: {
                    borderColor: 'accent',
                    bg: mode("light.bgLighter", "dark.bgLighter")(props)
                },
                _focus: {
                    borderColor: 'accent'
                }
            }
        }),
    },
    defaultProps: {
        variant: "filled",
    },
};

export default Input;
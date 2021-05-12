import { mode } from '@chakra-ui/theme-tools';

const styles = {

    global: (props) => (
        {
            'body, html': {
                position: 'relative',
                bg: mode('light.bg', 'dark.bg')(props),
                fontSize: '16px',
                color: mode('light.secondary', 'dark.secondary')(props)
            },
            '.chakra-switch.checked .chakra-switch__track': {
                bg: 'accent'
            }
        }
    )

};

export default styles;
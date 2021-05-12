import { mode } from '@chakra-ui/theme-tools';

const styles = {

    global: (props) => (
        {
            'body, html': {
                position: 'relative',
                bg: mode('light.bg', 'dark.bg')(props),
                color: mode('light.secondary', 'dark.secondary')(props)
            }
        }
    )

};

export default styles;
import { SectionProps } from '@/components/PageGenerator';
import {
    heroProps,
    itemsShowcaseProps,
    panelShowcaseProps,
    trustBarProps,
} from '@/utils/pageProps';

export const pageSections: SectionProps[] = [
    {
        type: 'fullWidth',
        components: [
            {
                type: 'hero',
                props: heroProps,
            },
            {
                type: 'panelShowcase',
                props: panelShowcaseProps,
            },
        ],
        props: {
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            backgroundColor: 'bisque',
            paddingTop: '40px',
            paddingBottom: '50px',
        },
    },
    {
        type: 'twoColumn',
        components: [
            {
                type: 'itemsShowcase',
                props: itemsShowcaseProps,
            },
            {
                type: 'trustBar',
                props: trustBarProps,
            },
        ],
        props: {
            display: 'flex',
            justifyContent: 'center',
            padding: '35px',
            backgroundColor: 'turquoise',
        },
    },
];

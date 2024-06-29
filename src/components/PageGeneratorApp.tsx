import PageGenerator from '@src/components/PageGenerator';
import clsx from 'clsx';

// import PageGenerator, { PageProps } from '@/components/PageGenerator';

const setLayoutBackgroundColor = (
    color: 'orange' | 'blue' | 'yellow' | 'transparent'
) => {
    return clsx(color);
};

export const data: PageProps[] = [
    {
        type: 'layoutSection',
        props: { backgroundColor: setLayoutBackgroundColor('transparent') },
        components: [
            {
                type: 'Landing',
                props: { title: 'Fat Cat Coders' },
                path: '/',
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: setLayoutBackgroundColor('blue') },
        components: [
            {
                type: 'Users',
                props: { title: 'Users' },
                path: '/users',
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: setLayoutBackgroundColor('yellow') },
        components: [
            {
                type: 'Posts',
                props: { title: 'Posts' },
                path: '/posts',
            },
        ],
    },
];

export default function PageGeneratorApp() {
    return <PageGenerator data={data} />;
}

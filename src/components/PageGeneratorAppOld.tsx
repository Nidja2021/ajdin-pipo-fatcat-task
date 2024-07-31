import clsx from 'clsx';

import PageGenerator, { PageProps } from '@/components/PageGeneratorOld';

// import PageGenerator, { PageProps } from '@/components/PageGenerator';

const setLayoutBackgroundColor = (
    color: 'orange' | 'blue' | 'yellow' | 'transparent'
) => {
    return clsx(color);
};

const data: PageProps[] = [
    {
        type: 'layoutSection',
        props: { backgroundColor: setLayoutBackgroundColor('transparent') },
        components: [
            {
                type: 'Landing',
                props: { title: 'Fat Cat Coders' },
                path: '/',
            },
            {
                type: 'Hero',
                props: {
                    title: 'Fat Cat Coders',
                    image: 'https://images.unsplash.com/photo-1722237959226-8e1a21eb254f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
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

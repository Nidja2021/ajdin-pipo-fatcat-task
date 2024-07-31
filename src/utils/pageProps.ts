import { ItemsShowcaseProps } from '@/components/ItemsShowcase';
import { PanelShowcaseProps } from '@/components/PanelShowcase';
import { TrustBarProps } from '@/components/TrustBar';

export const heroProps = {
    title: 'Hero page',
    image: 'https://images.unsplash.com/photo-1722237959226-8e1a21eb254f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const panelShowcaseProps: PanelShowcaseProps = {
    items: [
        {
            title: 'Title A',
            description: 'Description A',
            image: 'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww',
        },
        {
            title: 'Title B',
            description: 'Description B',
            image: 'https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
        },
        {
            title: 'Title C',
            description: 'Description C',
            image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
        },
    ],
};

export const itemsShowcaseProps: ItemsShowcaseProps = {
    items: [
        { title: 'Item A', description: 'Description A' },
        { title: 'Item B', description: 'Description B' },
        { title: 'Item C', description: 'Description C' },
    ],
};

export const trustBarProps: TrustBarProps = {
    images: [
        'https://images.unsplash.com/photo-1722233987129-61dc344db8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1722171459751-9a1667312bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    ],
};

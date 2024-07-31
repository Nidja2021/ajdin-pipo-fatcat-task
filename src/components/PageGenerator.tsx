import React from 'react';

import { Hero } from '@/components/Hero';
import { ItemsShowcase } from '@/components/ItemsShowcase';
import { PanelShowcase } from '@/components/PanelShowcase';
import { TrustBar } from '@/components/TrustBar';

export type ComponentProps = {
    type: string;
    props: object;
};

export type SectionProps = {
    type: string;
    components: ComponentProps[];
    props: React.CSSProperties;
};

export type PageGeneratorProps = {
    sections: SectionProps[];
};

export type componentMapProps = {
    [key: string]: React.ElementType;
};

const componentMap: componentMapProps = {
    hero: Hero,
    panelShowcase: PanelShowcase,
    itemsShowcase: ItemsShowcase,
    trustBar: TrustBar,
};

const renderComponent = (component: ComponentProps) => {
    const Component = componentMap[component.type];

    if (!Component) {
        return null;
    }
    return <Component key={component.type} {...component.props} />;
};

export const renderSection = (section: SectionProps) => {
    switch (section.type) {
        case 'fullWidth':
            return (
                <div key={section.type} style={{ ...section.props }}>
                    {section.components.map(renderComponent)}
                </div>
            );
        case 'twoColumn':
            return (
                <div
                    key={section.type}
                    style={{ display: 'flex', ...section.props }}
                >
                    <div style={{ flex: 1 }}>
                        {section.components
                            .slice(0, Math.ceil(section.components.length / 2))
                            .map(renderComponent)}
                    </div>
                    <div style={{ flex: 1 }}>
                        {section.components
                            .slice(Math.ceil(section.components.length / 2))
                            .map(renderComponent)}
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default function PageGenerator({ sections }: PageGeneratorProps) {
    return (
        <div>
            <div>{sections.map(renderSection)}</div>
        </div>
    );
}

import { ComponentProps } from '@src/componentProps';
import * as Components from '@src/componentProps';
import LayoutSection from '@src/components/LayoutSection';
import { Route, Routes } from 'react-router-dom';

export interface LayoutProps {
    backgroundColor?: string;
}

export interface PageProps {
    type: 'layoutSection';
    props: LayoutProps;
    components: ComponentProps[];
}

interface PageGeneratorProps {
    data: PageProps[];
}

export default function PageGenerator({ data }: PageGeneratorProps) {
    return (
        <div>
            {data.map((layout, index) => {
                // const Layout = Components[layout.type];
                return (
                    <LayoutSection key={index} {...layout.props}>
                        <Routes>
                            {layout.components.map((component, index) => {
                                const Component = Components[component.type];
                                return (
                                    <Route
                                        key={index}
                                        path={component.path}
                                        element={
                                            <Component {...component.props} />
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </LayoutSection>
                );
            })}
        </div>
    );
}

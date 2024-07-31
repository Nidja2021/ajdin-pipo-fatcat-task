import { ComponentProps } from '@/componentProps';
import * as Components from '@/componentProps';
import LayoutSection from '@/components/LayoutSection';

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
                        {/* <Routes> */}
                        {layout.components.map((component, index) => {
                            const Component = Components[component.type];
                            return (
                                // <Route
                                //     key={index}
                                //     path={component.path}
                                //     element={
                                //         <Component {...component.props} />
                                //     }
                                // />
                                <div key={index}>
                                    <Component {...component.props} />
                                </div>
                            );
                        })}
                        {/* </Routes> */}
                    </LayoutSection>
                );
            })}
        </div>
    );
}

import React from 'react';

import { LayoutProps } from '@src/components/PageGenerator';

export interface LayoutSectionProps extends LayoutProps {
    children: React.ReactNode;
}

export default function LayoutSection({
    backgroundColor,
    children,
}: LayoutSectionProps) {
    return <div style={{ backgroundColor: backgroundColor }}>{children}</div>;
}

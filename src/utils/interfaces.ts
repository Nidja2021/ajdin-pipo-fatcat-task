export interface CardProps {
    title: string;
    text: string;
    link: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
}

export interface CardsProps {
    cards: Card[];
}

export interface HeroProps {
    title: string;
    image: string;
}

export interface Item {
    title: string;
    description: string;
    image?: string;
}

export interface ItemsShowcaseProps {
    items: Item[];
}

export interface PanelShowcaseProps {
    items: Item[];
}

export interface Image {
    image: string;
}

export interface TrustBarProps {
    images: Image[];
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface Geo {
    lat?: string;
    lng?: string;
}

export interface Address {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: Geo;
}

export interface Company {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}

export interface UserResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone?: string;
    website?: string;
    company: Company;
}

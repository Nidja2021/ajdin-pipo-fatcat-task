import Marquee from 'react-fast-marquee';

export interface TrustBarProps {
    images: string[];
}

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee>
            {images.map((image: string, index: number) => (
                <img width={100} key={index} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};

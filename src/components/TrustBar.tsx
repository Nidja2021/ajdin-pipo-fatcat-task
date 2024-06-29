import { TrustBarProps, Image } from '@src/utils/interfaces';
import Marquee from 'react-fast-marquee';

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee>
            {images.map((image: Image, index: number) => (
                <img width={100} key={index} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};

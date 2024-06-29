import Marquee from 'react-fast-marquee';

import { Image, TrustBarProps } from '@/utils/interfacese';

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee>
            {images.map((image: Image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};

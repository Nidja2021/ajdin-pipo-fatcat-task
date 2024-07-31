interface HeroProps {
    // title: string;
    // image: string;
    [key: string]: string;
}

export const Hero = (props: HeroProps) => {
    return (
        <div className="flex row justify-center items-center gap-4 h-screen">
            <div className="w-4/12">
                <h1 className="text-3xl font-bold">{props.title}</h1>
            </div>
            <div className="w-4/12">
                <img
                    src={props.image}
                    width="100%"
                    alt="Hero"
                    loading="eager"
                />
            </div>
        </div>
    );
};

export interface ErrorPageProps {
    title?: string;
}

export default function ErrorPage({ title }: ErrorPageProps) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <h3 className="text-lg text-gray80">
                There is issue with fetching{' '}
                <span className="text-red">{title}</span>
            </h3>
        </div>
    );
}

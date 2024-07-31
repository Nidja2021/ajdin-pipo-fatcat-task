import PageGenerator from '@/components/PageGenerator';
import { pageSections } from '@/utils/pageSections';

export default function Home() {
    return <PageGenerator sections={pageSections} />;
}

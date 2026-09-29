import Hero from '../Hero/Hero';
import CreatorSpotlight from '../CreatorSpotlight/CreatorSpotlight';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import HowItWorks from '../HowItWorks/HowItWorks';
import Pricing from '../Pricing/Pricing';
import FAQ from '../FAQ/FAQ';

export default function Home() {
    return (
        <main style={{ width: '100%', background: 'var(--bg-page)', overflowX: 'hidden' }}>
            <Hero />
            <CreatorSpotlight />
            <Reviews />
            <Features />
            <HowItWorks />
            <Pricing />
            <FAQ />
        </main>
    );
}
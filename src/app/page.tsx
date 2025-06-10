import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
// import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import SocialLinks from '@/components/SocialLinks';
import Background from '@/components/Background';

export default function Home() {
  return (
    <>
      <Background className="pointer-events-none fixed bottom-0 left-0 right-0 top-0" />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
      <SocialLinks />
    </>
  );
}

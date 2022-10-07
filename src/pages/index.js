import Head from 'next/head';
import {
  AboutCompany,
  HeroSection,
  OurClients,
  OurProjects,
  OurServices,
  OurWork,
} from '../collections';
import { Navbar, Button } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Construction Company Website</title>
        <meta name='description' content='Construction company website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='bg-black h-screen bg-opacity-50'>
          <Navbar />
          {/* <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoplay muted loop id='myVideo'>
          <source src='/videos/video.mp4' type='video/mp4' />
        </video> */}
          <div className='h-[70vh] flex items-center container mx-auto'>
            <HeroSection />
          </div>
        </div>
      </div>

      <section className='py-[90px] container mx-auto'>
        <OurWork />
      </section>

      <section>
        <AboutCompany />
      </section>

      <section>
        <OurServices />
      </section>

      <section>
        <OurProjects />
      </section>

      <section>
        <OurClients />
      </section>
    </div>
  );
}

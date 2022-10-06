import Head from 'next/head';
import { HeroSection } from '../collections';
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
        <Navbar />
        {/* <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoplay muted loop id='myVideo'>
          <source src='/videos/video.mp4' type='video/mp4' />
        </video> */}
        <div className='h-[70vh] flex items-center container mx-auto'>
          <HeroSection />
        </div>
      </div>

      {/* Another section here */}
      
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
      <h1>Here is me</h1>
    </div>
  );
}

import Head from 'next/head';
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
          <div >
            <h1 className='text-[110px] text-white font-extrabold leading-tight'>Building a concrete future</h1>
            <p className='text-white text-[40px]'>Honest, Reliable Builders since 1968</p>
            <div className='flex space-x-4 pt-5'>
              <Button type="primary">View Projects</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
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

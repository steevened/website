import Button from '@/components/atoms/buttons/Button';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h1 className="mt-10 text-3xl font-bold text-center">Home</h1>

      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Second</title>
          foo
        </Head>
        hoge
        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
        <Image
          src='/images/profile.jpeg'
          height={144}
          width={144}
          alt='your name'
        />
      </Layout>
    </>
  );
}

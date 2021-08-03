import Image from 'next/image';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
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
    </>
  );
}

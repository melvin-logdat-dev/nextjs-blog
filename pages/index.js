import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import static side data
import { getSortedPostsData } from '../utils/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
 
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {/* <p>Hello! I appreciate your visit to my website. Just to introduce myself, I'm Melvin Logdat, but you can simply call me "Mel." I'm a passionate front-end web developer with more than two years of robust experience in creating and maintaining responsive websites. Over the course of my career, I've successfully overseen numerous projects in both front-end web development, shopify, and WordPress development, all of which were completed on schedule. <br/><br/>My enthusiasm lies in the intricacies and visual appeal of website development and design</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
    </Layout>
  );
}
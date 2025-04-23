import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//index from src/pages

// import Heading from '@theme/Heading';
import styles from './index.module.css';


export default function Home() {
  return (
    <Layout style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
      <div className={styles.main}>
        <h1>Welcome to FMCK Canteen App Documentation Site</h1>
        <b><i>Everything you need to know about this application all in one place!</i></b>
        <Link className={styles.buttonLink} to={'/docs/Overview'}>Read the Docs</Link>
      </div>
    </Layout>
  );
}

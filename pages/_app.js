import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <section className="content">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </section>
  );
}

export default MyApp;

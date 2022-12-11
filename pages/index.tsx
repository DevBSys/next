import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Nevbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>!VARIZ</title>
      </Head>

      <Header />
      <Nevbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

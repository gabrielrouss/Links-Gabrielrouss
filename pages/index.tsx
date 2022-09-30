import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import avatar from "../src/images/Avatar.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel Rousselet - Links</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.photoAndInfo}>
        <Image src={avatar} alt="Avatar Gabriel Rousselet" height={256} width={256} />
        <h1 className={styles.name}>Gabriel Parisotto Rousselet</h1>
        <p className={styles.info}>Desenvolvedor Front-End -&gt; ReactJS e Web Design</p>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/gabrielrouss" rel="noreferrer" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/gabrielrou/" rel="noreferrer" target="_blank">
          Linkedin
        </a>
        <a href="https://discord.com/users/312955363148169216" rel="noreferrer" target="_blank">
          Discord
        </a>
        <a href="mailto:gabrielprousselet@gmail.com" rel="noreferrer" target="_blank">
          E-mail
        </a>
        <a href="https://www.instagram.com/gabrielrousselet/" rel="noreferrer" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Home;

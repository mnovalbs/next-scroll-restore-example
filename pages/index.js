import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import userStyles from "../styles/User.module.css";

function Outlet({ id }) {
  return (
    <div className={userStyles.container}>
      <Link
        href={{
          pathname: "/user",
          query: {
            page: id,
          },
        }}
        passHref
      >
        <a>
          <label>Merchant {id}</label>
        </a>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Scroll Restore</title>
      </Head>

      {[...new Array(80)].map((_, i) => (
        <Outlet key={i} id={i} />
      ))}
    </div>
  );
}

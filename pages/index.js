import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import itemStyles from "../styles/Item.module.css";

function Outlet({ id }) {
  return (
    <div className={itemStyles.container}>
      <Link
        href={{
          pathname: "/item",
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

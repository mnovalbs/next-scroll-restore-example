import { useRouter } from "next/router";
import styles from "../../styles/User.module.css";

function generateUser(id) {
  const image = `https://picsum.photos/id/${id}/300/300`;
  const name = `User ${id}`;
  return { id, image, name };
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function User({ user }) {
  const router = useRouter();
  const { image, name } = user;

  return (
    <div className={styles.containerDetail}>
      <div className={styles.container}>
        <div>
          <img src={image} />
        </div>
        <div>
          <label>{name}</label>
        </div>
        <button onClick={router.back}>Back</button>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await timeout(2000);

  const user = generateUser(params.id)
  return { props: { user } }
}


export default User;

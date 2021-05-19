import { useRouter } from "next/router";
import styles from "../../styles/User.module.css";

function generateUser(id) {
  const image = `https://picsum.photos/id/${id}/300/300`;
  const name = `User ${id}`;
  return { id, image, name };
}

function User() {
  const router = useRouter();
  const { id } = router.query;
  const { image, name } = generateUser(id);

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

export default User;

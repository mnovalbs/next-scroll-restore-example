import { useRouter } from "next/router";
import styles from "../../styles/Item.module.css";

function generateItem(id) {
  const image = `https://picsum.photos/id/${id}/300/300`;
  const name = `Item ${id}`;
  return { id, image, name };
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Item({ item }) {
  const router = useRouter();
  const { image, name } = item;

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

  const item = generateItem(params.id)
  return { props: { item } }
}


export default Item;

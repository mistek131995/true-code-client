import styles from "./styles.module.scss"
import {Product} from "../../entities/Product.ts";
import {Label} from "@mistek/freedom-ui";

export const ProductCard = (props: Product) => {
    return <div className={styles.productCardContainer}>
        {props.image &&
            <div className={styles.imageContainer}>

            </div>
        }

        {!props.image &&
            <div className={styles.imageContainer}>
                Без изображения
            </div>
        }

        <div className={styles.productCardContainerInfo}>
            <Label>{props.name}</Label>
        </div>
    </div>
}
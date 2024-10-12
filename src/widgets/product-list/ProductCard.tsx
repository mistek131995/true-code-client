import styles from "./styles.module.scss"
import {Product} from "../../entities/Product.ts";
import {Label} from "@mistek/freedom-ui";
import {Link} from "react-router-dom";

export const ProductCard = (props: Product) => {
    return <Link to={`/product-view/${props.id}`}>
        <div className={styles.productCardContainer}>
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
    </Link>

}
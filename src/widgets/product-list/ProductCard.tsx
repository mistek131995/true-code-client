import styles from "./styles.module.scss"
import {Product} from "../../entities/Product.ts";
import {Flex, JustifyContent, Label} from "@mistek/freedom-ui";
import {Link} from "react-router-dom";

export const ProductCard = (props: Product) => {
    return <Link to={`/product-view/${props.id}`}>
        <div className={styles.productCardContainer}>
            {props.image &&
                <div className={styles.imageContainer}>
                    <img src={`data:${props.contentType};base64,${props.image}`} alt={props.fileName}/>
                </div>
            }

            {!props.image &&
                <div className={styles.imageContainer}>
                    Без изображения
                </div>
            }

            <div className={styles.productCardContainerInfo}>
                <Flex justifyContent={JustifyContent.between}>
                    <Label>{props.name} </Label>
                    <span>({props.article})</span>
                </Flex>
                <Flex justifyContent={JustifyContent.between}>
                    <Label>Цена: </Label>
                    {props.priceWithDiscount == 0 &&
                        <span>{props.price}руб.</span>
                    }

                    {props.priceWithDiscount > 0 &&
                        <span>{props.priceWithDiscount}руб.</span>
                    }
                </Flex>
            </div>
        </div>
    </Link>

}
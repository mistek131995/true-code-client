import {Product} from "../../../entities/Product.ts";
import {Flex, JustifyContent, Label} from "@mistek/freedom-ui";
import styles from "../style/styles.module.scss";

export const ProductCard = (props: Product) => {
    return <Flex justifyContent={JustifyContent.around} className={styles.productCardContainer}>
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
        <div>
            <div>
                <Label>Наименование:</Label>
                {props.name}
            </div>
            <div>
                <Label>Артикул:</Label>
                {props.article}
            </div>
            <div>
                <Label>Стоимость:</Label>
                <span>
                    <span className={props.priceWithDiscount > 0 ? styles.newPrice : ""}>
                        {props.price}руб.
                    </span>

                    {props.priceWithDiscount > 0 &&
                        <span>
                            {props.priceWithDiscount}руб.
                        </span>
                    }
                </span>
            </div>
        </div>
        <div>
            <Label>Описание:</Label>
            <div>
                {props.description}
            </div>
        </div>
    </Flex>
}
import {Flex, JustifyContent, Label} from "@mistek/freedom-ui";
import styles from "../style/styles.module.scss";
import {observer} from "mobx-react-lite";
import {viewFormState} from "../store/viewFormStore.ts";

export const ProductCard = observer(() => {
    return <Flex justifyContent={JustifyContent.around} className={styles.productCardContainer}>
        {viewFormState.product?.image &&
            <div className={styles.imageContainer}>
                <img src={`data:${viewFormState.product?.contentType};base64,${viewFormState.product?.image}`} alt={viewFormState.product?.fileName}/>
            </div>
        }

        {!viewFormState.product?.image &&
            <div className={styles.imageContainer}>
                Без изображения
            </div>
        }
        <div>
            <div>
                <Label>Наименование:</Label>
                {viewFormState.product?.name}
            </div>
            <div>
                <Label>Артикул:</Label>
                {viewFormState.product?.article}
            </div>
            <div>
                <Label>Стоимость:</Label>
                <span>
                    <span className={viewFormState.product?.priceWithDiscount > 0 ? styles.newPrice : ""}>
                        {viewFormState.product?.price}руб.
                    </span>

                    {viewFormState.product?.priceWithDiscount > 0 &&
                        <span>
                            {viewFormState.product?.priceWithDiscount}руб.
                        </span>
                    }
                </span>
            </div>
            <div>
                <Label>Описание:</Label>
                <span>
                    {viewFormState.product?.description}
                </span>
            </div>
        </div>
    </Flex>
})
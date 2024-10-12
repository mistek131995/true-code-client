import {observer} from "mobx-react-lite";
import {Button, Flex, JustifyContent} from "@mistek/freedom-ui";
import styles from "../style/styles.module.scss";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getProductAsync, viewFormState} from "../store/viewFormStore.ts";
import {ProductCard} from "./ProductCard.tsx";

export const ViewProductForm = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        getProductAsync(id!);
    }, [id]);

    return <div className={styles.viewFormContainer}>
        <ProductCard {...viewFormState.product}/>
        <Flex justifyContent={JustifyContent.end} className={styles.buttonContainer}>
            <Link to={`/product-edit/${id}`}>
                <Button>Редактировать</Button>
            </Link>

            <Button>Удалить</Button>

            <Link to="/">
                <Button>На главную</Button>
            </Link>
        </Flex>
    </div>
})
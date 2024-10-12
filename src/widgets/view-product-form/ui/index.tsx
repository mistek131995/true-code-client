import styles from "../style/styles.module.scss";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getProductAsync, viewFormState} from "../store/viewFormStore.ts";
import {ProductCard} from "./ProductCard.tsx";
import {SuccessDelete} from "./SuccessDelete.tsx";
import {ButtonsBar} from "./ButtonsBar.tsx";
import {observer} from "mobx-react-lite";

export const ViewProductForm = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        getProductAsync(id!);
    }, [id]);

    return <div className={styles.viewFormContainer}>
        {!viewFormState.deleteIsSuccess &&
            <>
                <ProductCard/>
                <ButtonsBar id={id!}/>
            </>
        }

        {viewFormState.deleteIsSuccess &&
            <SuccessDelete/>
        }
    </div>
})
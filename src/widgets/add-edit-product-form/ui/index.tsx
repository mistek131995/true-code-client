import styles from "../styles/styles.module.scss";
import {observer} from "mobx-react-lite";
import {addEditState, getProductAsync, resetForm} from "../store/addEditStore.ts";
import {AddEditForm} from "./AddEditForm.tsx";
import {SuccessAdd} from "./SuccessAdd.tsx";
import {Flex, JustifyContent} from "@mistek/freedom-ui";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

export const AddEditProductForm = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        if(id){
            getProductAsync(id)
        }

        return () => resetForm();
    }, [id]);

    return <Flex justifyContent={JustifyContent.center} className={styles.addEditFormContainer}>
        {!addEditState.isSuccess &&
            <AddEditForm/>
        }

        {addEditState.isSuccess &&
            <SuccessAdd/>
        }
    </Flex>
})
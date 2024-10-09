import styles from "../styles/styles.module.scss";
import {observer} from "mobx-react-lite";
import {addEditState} from "../store/addEditStore.ts";
import {AddEditForm} from "./AddEditForm.tsx";
import {SuccessAdd} from "./SuccessAdd.tsx";
import {Flex, JustifyContent} from "@mistek/freedom-ui";

export const AddEditProductForm = observer(() => {
    return <Flex justifyContent={JustifyContent.center} className={styles.addEditFormContainer}>
        {!addEditState.isSuccess &&
            <AddEditForm/>
        }

        {addEditState.isSuccess &&
            <SuccessAdd/>
        }
    </Flex>
})
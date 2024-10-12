import {Button, Flex, JustifyContent} from "@mistek/freedom-ui";
import styles from "../style/styles.module.scss";
import {Link} from "react-router-dom";
import {deleteProductAsync} from "../store/viewFormStore.ts";

export const ButtonsBar = (props: {id: string}) => {
    return <Flex justifyContent={JustifyContent.end} className={styles.buttonContainer}>
        <Link to={`/product-edit/${props.id}`}>
            <Button>Редактировать</Button>
        </Link>

        <Button onClick={async () => await deleteProductAsync(props.id!)}>Удалить</Button>

        <Link to="/">
            <Button>На главную</Button>
        </Link>
    </Flex>
}
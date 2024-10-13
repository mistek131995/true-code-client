import {observer} from "mobx-react-lite";
import {Button, Flex, JustifyContent} from "@mistek/freedom-ui";
import {getProductListStoreAsync, productListStore} from "../../features/product-list/product-list-store.ts";
import styles from "./styles.module.scss"

export const Pagination = observer(() => {
    const arrayWithIndices = Array.from({ length: productListStore.pageCount }, (_, index) => index + 1);

    return <Flex justifyContent={JustifyContent.center} className={styles.paginationContainer}>
        {
            arrayWithIndices.map(page => {
                return <Button key={page} onClick={() => getProductListStoreAsync({}, page)}>{page}</Button>
            })
        }
    </Flex>
})
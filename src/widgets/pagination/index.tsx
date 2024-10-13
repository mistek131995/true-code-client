import {observer} from "mobx-react-lite";
import {Button, Flex, JustifyContent} from "@mistek/freedom-ui";
import {getProductListStoreAsync, productListStore} from "../../features/product-list/product-list-store.ts";
import styles from "./styles.module.scss"
import {productListFilersStore} from "../../features/product-list-filers/product-list-filers-store.ts";

export const Pagination = observer(() => {
    const arrayWithIndices = Array.from({ length: productListStore.pageCount }, (_, index) => index + 1);

    const filters = {
        name: productListFilersStore.name,
        article: productListFilersStore.article,
        sorting: productListFilersStore.sorting.toString()
    }

    return <Flex justifyContent={JustifyContent.center} className={styles.paginationContainer}>
        {
            arrayWithIndices.map(page => {
                return <Button key={page} onClick={() => getProductListStoreAsync(filters, page)}>{page}</Button>
            })
        }
    </Flex>
})
import {observer} from "mobx-react-lite";
import {Button, Flex, JustifyContent} from "@mistek/freedom-ui";
import {productListStore} from "../../features/product-list/product-list-store.ts";
import styles from "./styles.module.scss"
import {useSearchParams} from "react-router-dom";

export const Pagination = observer(() => {
    const arrayWithIndices = Array.from({ length: productListStore.pageCount }, (_, index) => index + 1);
    const [, setSearchParams] = useSearchParams()

    const setPage = (page: number) => {
        setSearchParams({page: page.toString()})
    }

    return <Flex justifyContent={JustifyContent.center} className={styles.paginationContainer}>
        {
            arrayWithIndices.map(page => {
                return <Button key={page} onClick={() => setPage(page)}>{page}</Button>
            })
        }
    </Flex>
})
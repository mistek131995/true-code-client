import {useEffect} from "react";
import {getProductListStoreAsync, productListStore} from "../../features/product-list/product-list-store.ts";
import {observer} from "mobx-react-lite";
import {Product} from "../../entities/Product.ts";
import {Flex, JustifyContent} from "@mistek/freedom-ui";
import styles from "./styles.module.scss"
import {ProductCard} from "./ProductCard.tsx";

export const ProductList = observer(() => {
    const groupedProducts = productListStore.products?.reduce<Product[][]>((acc, product, index) => {
        if (index % 5 === 0) acc.push([]);
        acc[acc.length - 1].push(product);
        return acc;
    }, []);

    useEffect(() => {
        getProductListStoreAsync()
    }, []);

    return groupedProducts?.map((group, groupIndex) => {
        return <Flex key={groupIndex} noWrap={true} className={styles.productsRow} justifyContent={JustifyContent.around}>
            {group.map((product: Product) => <ProductCard key={product.id} {...product}/>)}
        </Flex>
    });
})
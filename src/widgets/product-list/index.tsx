import {useEffect} from "react";
import {getProductListStoreAsync, productListStore} from "../../features/product-list/product-list-store.ts";
import {observer} from "mobx-react-lite";
import {Product} from "../../entities/Product.ts";
import {Flex} from "@mistek/freedom-ui";

export const ProductList = observer(() => {
    const groupedProducts = productListStore.products.reduce<Product[][]>((acc, product, index) => {
        if (index % 5 === 0) acc.push([]);
        acc[acc.length - 1].push(product);
        return acc;
    }, []);  // Начальное значение пустого массива


    useEffect(() => {
        getProductListStoreAsync()
    }, []);

    return groupedProducts.map((group, groupIndex) => (
        <Flex key={groupIndex} noWrap={true}>
            {group.map((product: Product, index: number) => (
                <div key={index}>{product.name}</div>
            ))}
        </Flex>
    ));
})
import {action, observable, runInAction} from "mobx";
import {Product} from "../../entities/Product.ts";
import axios from "axios";
import {host} from "../../shared/constants.ts";

const productListStore = observable({
    products: null as unknown as Product[],
    pageCount: 0,
});

const getProductListStoreAsync = action(async (filters: Record<string, FormDataEntryValue>, page: number = 1) => {
    const name = filters["name"] || "";
    const article = filters["article"] || "";
    const sorting = filters["sorting"] || "0";

    await axios.get(`${host}/product/getproductlist?name=${name}&article=${article}&sorting=${sorting}&page=${page}`)
        .then((response) => {
            runInAction(() => {
                productListStore.products = response.data.products;
                productListStore.pageCount = response.data.pageCount;
            })
        })
})

export {productListStore, getProductListStoreAsync}
import {action, observable, runInAction} from "mobx";
import {Product} from "../../entities/Product.ts";
import axios from "axios";
import {host} from "../../shared/constants.ts";
import {productListFilersStore} from "../product-list-filers/product-list-filers-store.ts";

const productListStore = observable({
    products: null as unknown as Product[],
    pageCount: 0,
});

const getProductListStoreAsync = action(async (page: number = 1) => {
    const name = productListFilersStore.name;
    const article = productListFilersStore.article;
    const sorting = productListFilersStore.sorting;

    await axios.get(`${host}/product/getproductlist?name=${name}&article=${article}&sorting=${sorting}&page=${page}`)
        .then((response) => {
            runInAction(() => {
                productListStore.products = response.data.products;
                productListStore.pageCount = response.data.pageCount;
            })
        })
})

export {productListStore, getProductListStoreAsync}
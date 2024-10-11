import {action, observable, runInAction} from "mobx";
import {Product} from "../../entities/Product.ts";
import axios from "axios";
import {host} from "../../shared/constants.ts";

const productListStore = observable({
    products: null as unknown as Product[],
});

const getProductListStoreAsync = action(async (page: number = 1) => {
    await axios.get(`${host}/product/getproductlist?page=${page}`).then((response) => {

        runInAction(() => {
            productListStore.products = response.data.products;
        })
    })
})

export {productListStore, getProductListStoreAsync}
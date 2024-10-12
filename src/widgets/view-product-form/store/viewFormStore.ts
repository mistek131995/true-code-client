import {action, observable, runInAction} from "mobx";
import {Product} from "../../../entities/Product.ts";
import axios from "axios";
import {host} from "../../../shared/constants.ts";

const viewFormState = observable({
    product: null as unknown as Product,
})

const getProductAsync = action(async (id: string) => {
    axios.get(`${host}/Product/GetProduct?id=${id}`).then(response => {

        runInAction(() => {
            viewFormState.product = response.data;
        })
    })
})

export {viewFormState, getProductAsync}
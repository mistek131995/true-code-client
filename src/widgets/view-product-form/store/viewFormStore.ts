import {action, observable, runInAction} from "mobx";
import {Product} from "../../../entities/Product.ts";
import axios from "axios";
import {host} from "../../../shared/constants.ts";
import {errorToast} from "../../../features/toast-error";

const viewFormState = observable({
    product: null as unknown as Product,
    deleteIsSuccess: false,
})

const getProductAsync = action(async (id: string) => {
    axios.get(`${host}/Product/GetProduct?id=${id}`).then(response => {

        runInAction(() => {
            viewFormState.product = response.data;
        })
    })
})

const deleteProductAsync = action(async (id: string) => {
    axios.post(`${host}/Product/DeleteProduct`, {id: id}).then(response => {
        if(response.status === 200) {
            viewFormState.deleteIsSuccess = true;
        }
    }).catch(error => {
        if(error.response.status === 409) {
            errorToast(error.response.data.Message)
        }
        else if(error.response.status === 400) {
            errorToast("Поля отмеченные * обязательны к заполнению")
        }
    })
})

export {viewFormState, getProductAsync, deleteProductAsync}
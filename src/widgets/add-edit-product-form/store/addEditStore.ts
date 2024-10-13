import {action, observable} from "mobx";
import axios from "axios";
import {host} from "../../../shared/constants.ts";
import {Product} from "../../../entities/Product.ts";
import {errorToast} from "../../../features/toast-error";
import {successToast} from "../../../features/toast-success";

const addEditState = observable({
    product: null as unknown as Product,
    isSuccess: false,
})

const getProductAsync = action(async (id: string) => {
    axios.get(`${host}/Product/GetProduct?id=${id}`).then(response => {
        addEditState.product = response.data;
    })
})

const saveProductAsync = action(async (form :  Record<string, FormDataEntryValue>) => {
    const formData = new FormData();
    formData.append("id", form["id"]);
    formData.append("name", form["name"]);
    formData.append("article", form["article"]);
    formData.append("description", form["description"]);
    formData.append("price", form["price"].toString().replace('.', ','));
    formData.append("priceWithDiscount", form["priceWithDiscount"].toString().replace('.', ','));
    formData.append("imageName", form["priceWithDiscount"]);
    formData.append("image", form["image"]);

    axios.post(`${host}/Product/SaveProduct`, formData).then(response => {
        if(response.status === 200) {
            addEditState.isSuccess = true;
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

const deleteProductImageAsync = action(async (id: string) => {
    axios.post(`${host}/Product/DeleteProductImage`, {productId: id}).then(response => {
        if(response.status === 200) {
            successToast("Изображение успешно удалено")
            getProductAsync(id)
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

const showAddForm = action(() => addEditState.isSuccess = false);
const resetForm = action(() => {
    addEditState.product = null as unknown as Product;
    addEditState.isSuccess = false;
})

export {addEditState, saveProductAsync, showAddForm, getProductAsync, deleteProductImageAsync, resetForm}
import {action, observable} from "mobx";
import axios from "axios";
import {host} from "../../../shared/constants.ts";

const addEditState = observable({
    isSuccess: false,
})

const saveProductAsync = action(async (form :  Record<string, FormDataEntryValue>) => {
    const formData = new FormData();
    formData.append("name", form["name"]);
    formData.append("article", form["article"]);
    formData.append("description", form["description"]);
    formData.append("price", form["price"]);
    formData.append("priceWithDiscount", form["priceWithDiscount"]);
    formData.append("imageName", form["priceWithDiscount"]);
    formData.append("image", form["image"]);

    axios.post(`${host}/Product/SaveProduct`, formData).then(response => {
        if(response.status === 200) {
            addEditState.isSuccess = true;
        }else
        {
            console.log(response);
        }
    })
})

const showAddForm = action(() => addEditState.isSuccess = false);

export {addEditState, saveProductAsync, showAddForm}
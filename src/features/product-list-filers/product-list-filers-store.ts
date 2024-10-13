import {observable} from "mobx";

const productListFilersStore = observable({
    name: "",
    article: "",
    sorting: 0
})

export {productListFilersStore}
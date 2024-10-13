import {action} from "mobx";
import {productListFilersStore} from "../../features/product-list-filers/product-list-filers-store.ts";
import {getProductListStoreAsync} from "../../features/product-list/product-list-store.ts";

const applyFilters = action(async (form:  Record<string, FormDataEntryValue>) => {
    productListFilersStore.name = form["name"]?.toString() || "";
    productListFilersStore.article = form["article"]?.toString() || "";
    productListFilersStore.sorting = Number(form["sorting"]) || 0;

    await getProductListStoreAsync();
})

export {applyFilters}
import {Filters} from "../../widgets/filters/Filters.tsx";
import {ProductList} from "../../widgets/product-list";
import {Pagination} from "../../widgets/pagination";

const Index = () => {
    return <>
        <Filters/>
        <ProductList/>
        <Pagination/>
    </>
}

export default Index
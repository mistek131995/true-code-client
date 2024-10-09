import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "../layout/Layout.tsx";


export const PublicRoutes = () => {
    const IndexPage = React.lazy(() => import("../../pages/index"));
    const ProductView = React.lazy(() => import("../../pages/product-view"));
    const ProductAdd = React.lazy(() => import("../../pages/product-view"));

    return <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/product-view/:id" element={<ProductView/>}/>
                <Route path="/product-add/" element={<ProductAdd/>}/>
            </Route>
        </Routes>
    </Suspense>
}
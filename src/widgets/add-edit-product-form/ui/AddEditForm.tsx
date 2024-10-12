import {Button, Form, Input, Textarea} from "@mistek/freedom-ui";
import {getProductAsync, resetProduct, saveProductAsync} from "../store/addEditStore.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

export const AddEditForm = () => {
    const {id} = useParams();

    useEffect(() => {
        if(id){
            getProductAsync(id)
        }

        return () => {
            resetProduct()
        }
    }, [id]);

    return <>
        <Form handleSubmit={saveProductAsync}>
            <Input name="name" placeholder="Наименование"/>
            <Input name="article" placeholder="Артикул"/>
            <Input name="price" placeholder="Стоимость"/>
            <Input name="priceWithDiscount" placeholder="Стоимость со скидкой"/>
            <Textarea name="description" placeholder="Описание"/>
            <Input type="file" name="image"/>

            <Button>Добавить товар</Button>
        </Form>
    </>
}
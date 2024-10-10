import {Button, Form, Input, Textarea} from "@mistek/freedom-ui";
import {saveProductAsync} from "../store/addEditStore.ts";

export const AddEditForm = () => {
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
import {Button, Form, Input, Textarea} from "@mistek/freedom-ui";
import {addEditState, getProductAsync, resetForm, saveProductAsync} from "../store/addEditStore.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import styles from "../styles/styles.module.scss"

export const AddEditForm = observer(() => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => resetForm(), []);

    useEffect(() => {
        if(id){
            getProductAsync(id)
        }
    }, [id]);

    return <>
        <Form handleSubmit={saveProductAsync}>
            <Input name="id"
                   type="hidden"
                   className={styles.hide}
                   defaultValue={addEditState.product?.id}/>
            <Input name="name"
                   label="Наименование: *"
                   placeholder="Наименование"
                   defaultValue={addEditState.product?.name}/>
            <Input name="article"
                   label="Артикул: *"
                   placeholder="Артикул"
                   defaultValue={addEditState.product?.article}/>
            <Input name="price"
                   label="Стоимость: *"
                   placeholder="Стоимость"
                   defaultValue={addEditState.product?.price}/>
            <Input name="priceWithDiscount"
                   label="Стоимость со скидкой: *"
                   placeholder="Стоимость со скидкой"
                   defaultValue={addEditState.product?.priceWithDiscount}/>
            <Textarea name="description"
                      rows={3}
                      label="Описание: *"
                      placeholder="Описание" defaultValue={addEditState.product?.description}/>
            <Input type="file" name="image"/>

            {id &&
                <Button type="submit">Сохранить изменения</Button>
            }

            {!id &&
                <Button type="submit">Добавить товар</Button>
            }

            <Button type="button" onClick={() => navigate(-1)}>Назад</Button>
        </Form>
    </>
})
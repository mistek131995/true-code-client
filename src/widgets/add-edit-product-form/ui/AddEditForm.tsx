import {Button, Form, Input, Textarea} from "@mistek/freedom-ui";

export const AddEditForm = () => {
    return <>
        <Form handleSubmit={(form) => console.log(form)}>
            <Input name="name"/>
            <Input name="price"/>
            <Input name="price-with-discount"/>
            <Textarea name="description"/>
            <Input type="file" name="image"/>

            <Button>Добавить товар</Button>
        </Form>
    </>
}
import {Button, ButtonBackground, Flex, Form, Input} from "@mistek/freedom-ui";
import styles from "./styles.module.scss";
import {useNavigate} from "react-router-dom";

export const Filters = () => {
    //Знаю что так нельзя
    const navigate = useNavigate();

    return <Form handleSubmit={(form) => console.log(form)}>
        <Flex className={styles.filtersContainer} noWrap={true}>
            <Input type="text" placeholder="Введите наименование" name="name"/>
            <Input type="text" placeholder="Введите артикул" name="article"/>
            <Button type="submit">Применить</Button>

            <Button bg={ButtonBackground.secondary} onClick={() => navigate("/product-add")}>
                Добавить товар
            </Button>
        </Flex>
    </Form>

}
import {Button, ButtonBackground, Flex, Form, Input} from "@mistek/freedom-ui";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

export const Filters = () => {

    return <Form handleSubmit={(form) => console.log(form)}>
        <Flex className={styles.filtersContainer} noWrap={true}>
            <Input type="text" placeholder="Введите наименование" name="name"/>
            <Input type="text" placeholder="Введите артикул" name="article"/>
            <Button type="submit">Применить</Button>

            <Link to="/product-add">
                <Button bg={ButtonBackground.secondary}>
                    Добавить товар
                </Button>
            </Link>
        </Flex>
    </Form>

}
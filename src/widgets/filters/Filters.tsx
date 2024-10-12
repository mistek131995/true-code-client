import {Button, ButtonBackground, Flex, Form, Input, JustifyContent, Radio} from "@mistek/freedom-ui";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {getProductListStoreAsync} from "../../features/product-list/product-list-store.ts";

export const Filters = () => {

    return <Form handleSubmit={(form) => getProductListStoreAsync(form)}>
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
        <Flex className={styles.sortingContainer} justifyContent={JustifyContent.around}>
            <Radio label="Без сортировки" name="sorting" value={0} defaultChecked={true}/>
            <Radio label="Наименование А-Я" name="sorting" value={1}/>
            <Radio label="Наименование Я-А" name="sorting" value={2}/>
            <Radio label="Цена от большей к меньшей" name="sorting" value={3}/>
            <Radio label="Цена от меньшей к большей" name="sorting" value={4}/>
        </Flex>
    </Form>

}
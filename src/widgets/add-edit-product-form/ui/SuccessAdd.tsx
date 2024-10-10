import {Alert, Background, Button} from "@mistek/freedom-ui";
import {Link} from "react-router-dom";
import {showAddForm} from "../store/addEditStore.ts";

export const SuccessAdd = () => {
    return <div>
        <Alert background={Background.success}>Товар успешно сохранен</Alert>
        <Link to="/">
            <Button>На главную</Button>
        </Link>
        <Button onClick={showAddForm}>Добавить новый товар</Button>
    </div>
}
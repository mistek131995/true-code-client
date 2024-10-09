import {Alert, Background, Button} from "@mistek/freedom-ui";
import {Link} from "react-router-dom";

export const SuccessAdd = () => {
    return <div>
        <Alert background={Background.success}>Товар успешно сохранен</Alert>
        <Link to="/">
            <Button>На главную</Button>
        </Link>
        <Button>Добавить новый товар</Button>
    </div>
}
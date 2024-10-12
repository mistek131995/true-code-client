import {Alert, AlignmentItems, Background, Button, Flex, JustifyContent, Orientation} from "@mistek/freedom-ui";
import {Link} from "react-router-dom";

export const SuccessDelete = () => {
    return <Flex justifyContent={JustifyContent.center} noWrap={true} orientation={Orientation.vertical} alignItems={AlignmentItems.center}>
        <Alert background={Background.success}>Товар успешно удален</Alert>
        <Link to="/">
            <Button>На главную</Button>
        </Link>
    </Flex>
}
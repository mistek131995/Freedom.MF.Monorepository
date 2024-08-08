import {Avatar, Card} from "antd";
import {AppCardProps} from "../../entities/AppCardProps.ts";


const AppCard = (props: {card: AppCardProps}) => {
    return <Card
        style={{ width: 300 }}
        cover={
            <img
                alt="App image"
                src={props.card.img}
            />
        }
        actions={props.card.action}
    >
        <Card.Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={props.card.title}
            description={props.card.description}
        />
    </Card>
}

export default AppCard;
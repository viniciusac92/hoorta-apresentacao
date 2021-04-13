import MeetStyled from "./style";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import {useHistory} from "react-router";

const Meet = () => {
	const history = useHistory();
	return (
		<MeetStyled>
			<Text weigth="semiBold" size="large">
				Alimentos frescos
			</Text>
			<Text weigth="semiBold" size="large">
				orgânicos e baratos.
			</Text>
			<Text weigth="semiBold" size="large">
				Na porta da sua casa!
			</Text>
			<MeetStyled.ButtonWrap>
				<Button
					onClick={() => history.push("/login")}
					color="primary"
					size="large">
					Conhecer
				</Button>
			</MeetStyled.ButtonWrap>
		</MeetStyled>
	);
};

export default Meet;

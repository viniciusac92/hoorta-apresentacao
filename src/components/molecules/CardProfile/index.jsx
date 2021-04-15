import {useData} from "../../../providers/UserContext";
import {CardStyled} from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";

const CardProfile = () => {
	const {userData} = useData();

	const text = [
		{dice: [userData.address.road, " - ", userData.address.number]},
		{dice: [userData.address.city, " - ", userData.address.state]},
		{dice: userData.address.cep},
		{dice: userData.email},
		{dice: userData.phone},
	];

	return (
		<CardStyled>
			<CardStyled.Background>
				<CardStyled.Image src={Woman} alt="imagePerfil" />

				<CardStyled.Title>
					<Text size="medium" weigth="semiBold">
						{userData.name} - {userData.age}
					</Text>
				</CardStyled.Title>

				<CardStyled.Icon>
					<Icon src={IconEdit} alt="" display={["block"]} />
				</CardStyled.Icon>

				<CardStyled.Container>
					{text.map(({dice}, key) => (
						<Text key={key} size="small">
							{dice}
						</Text>
					))}
				</CardStyled.Container>
			</CardStyled.Background>
		</CardStyled>
	);
};
export default CardProfile;

import {useData} from "../../../providers/UserContext";
import {CardStyled} from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";

const CardProfile = () => {
	const {userData} = useData();

	const text = [
		{dice: ["Rua Bragança", " - ", "135, apto 401"]},
		{dice: ["Maringá", " - ", "PR"]},
		{dice: "87020220"},
		{dice: "junia@mail.com"},
		{dice: "(44) 00000-0000"},
	];

	return (
		<CardStyled>
			<CardStyled.Background>
				<CardStyled.Image src={Woman} alt="imagePerfil" />

				<CardStyled.Title>
					<Text size="medium" weigth="semiBold">
						Junia - 18
					</Text>
				</CardStyled.Title>

				<CardStyled.Icon>
					<Icon src={IconEdit} alt="" display={["block", "block"]} />
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

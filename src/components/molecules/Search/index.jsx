import {createRef} from "react";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import SearchIcon from "../../../assets/images/icons/search.svg";
import {SearchContainer} from "./styles";

const Search = () => {
	const ref = createRef();
	return (
		<SearchContainer>
			<Input size="small" ref={ref} placeholder="Buscar..." />
			<Button color="primary">
				<Icon
					src={SearchIcon}
					alt="Barra de Busca"
					display={["block", "block"]}
				/>
			</Button>
		</SearchContainer>
	);
};

export default Search;

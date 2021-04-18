import {useState} from "react";
import TextHeader from "../../atoms/TextHeader";
import {Modal, Fade} from "@material-ui/core";
import {StyledModal, EditButton} from "./styles";
import Icon from "../../atoms/Icon";
import EditPencilIcon from "../../../assets/images/icons/editPencil.svg";
import Close from "../../../assets/images/icons/close.svg";
import FormEditStore from "../../molecules/FormEditStore";

const ModalEditStore = ({currentStoreId}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => setIsOpen(!isOpen);

	const body = (
		<StyledModal>
			<div className="headerContainer">
				<TextHeader color="primary" size="medium" fontWeight="medium">
					Editar Loja
				</TextHeader>
				<EditButton onClick={toggleModal}>
					<Icon src={Close} alt="Botão Fechar" display={["block", "block"]} />
				</EditButton>
			</div>
			<FormEditStore currentStoreId={currentStoreId} />
		</StyledModal>
	);

	return (
		<>
			<EditButton onClick={toggleModal}>
				<Icon
					src={EditPencilIcon}
					alt="Cadastrar Produto"
					display={["block", "block"]}
				/>
			</EditButton>
			<Modal
				open={isOpen}
				onClose={toggleModal}
				disableBackdropClick={true}
				disableEscapeKeyDown={true}
				closeAfterTransition
				BackdropProps={{style: {backdropFilter: "blur(2px)"}}}>
				<Fade in={isOpen}>{body}</Fade>
			</Modal>
		</>
	);
};

export default ModalEditStore;

import ListProducts from "../../components/molecules/ListProducts";
import Sidebar from "../../components/molecules/SideBar";
import Header from "../../components/organisms/Header";

const Tests = () => {
	return (
		<div>
			<Header />
			<Sidebar />
			<ListProducts />
			<Picture
				image={footerPicture}
				width={["320px", "444px"]}
				height={["155px", "215px"]}
				position={["relative", "absolute"]}
				top={["0px", "calc(100% - 215px)"]}
				left={["0", "0"]}
			/>
		</div>
	);
};

export default Tests;

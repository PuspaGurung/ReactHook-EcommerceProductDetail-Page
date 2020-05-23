import React from "react";
import { Header, Footer } from "../components/headerFooter";

const Layout = (props) => {
	const { children } = props;
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";



const Header = () => {
	const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};


	return(
		<div>
			
			<select 
				className="nav-link float-right border-0 ml-1 mr-2 text-align:right"
				value={localStorage.getItem("i18nextLng")}
				onChange={handleLanguageChange}
			>
				<option value ="en">English</option>
				<option value ="am">Amharic</option>

			</select>
		</div>
	);
};

export default Header;

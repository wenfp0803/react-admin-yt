import { Box, Icon, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import InputBase from "@mui/material/InputBase";
import {
	LightModeOutlined,
	DarkModeOutlined,
	NotificationsOutlined,
	SettingsOutlined,
	PersonOutlineOutlined,
	SearchOutlined,
} from "@mui/icons-material";

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* Search Bar */}
			<Box
				display="flex"
				backgroundColor={colors.primary[400]}
				borderRadius="3px"
			>
				<InputBase
					sx={{ ml: 2, flex: 1 }}
					placeholder="Search"
				></InputBase>
				<IconButton type="button" sx={{ p: 1 }}>
					<SearchOutlined></SearchOutlined>
				</IconButton>
			</Box>

			{/* Icons */}
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<DarkModeOutlined></DarkModeOutlined>
					) : (
						<LightModeOutlined></LightModeOutlined>
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlined></NotificationsOutlined>
				</IconButton>
				<IconButton>
					<SettingsOutlined></SettingsOutlined>
				</IconButton>
				<IconButton>
					<PersonOutlineOutlined></PersonOutlineOutlined>
				</IconButton>
			</Box>
			{/* <IconButton sx={{ display: "flex" }}></IconButton> */}
		</Box>
	);
};

export default Topbar;

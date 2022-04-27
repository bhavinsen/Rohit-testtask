import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderStyle = styled(Box)({
    ".HeaderBar": {
        padding: "0 100px",
        backgroundColor: "#fff",
        color: "#3C424F",
        borderBottom: "2px solid #ececec",
        boxShadow: "none",
        "@media (max-width:1200px)": {
            padding: "0 70px",
        },
        "@media (max-width:1024px)": {
            padding: "0 30px",
        },
        "@media (max-width:576px)": {
            padding: "0 14px",
        },
        ".MuiToolbar-root": {
            ".MuiTypography-root": {
                "img": {
                    width: "42px",
                }
            },
            ".MuiBox-root": {
                ".MuiButton-root": {
                    color: "#3C424F",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "6px 14px",
                }
            }
        },
        ".HeaderMenubar": {
            ".MuiButtonBase-root": {
                paddingLeft: 0,
            }
        },
        ".HeaderSetting": {
            display: "flex",
            alignItems: "center",
            ".HeaderIcons": {
                marginRight: "10px",
                "@media (max-width:576px)": {
                    marginRight: "6px",
                },
                "svg": {
                    color: "#5d6067",
                    borderRadius: "6px",
                    padding: "6px 8px",
                    "@media (max-width:425px)": {
                        fontSize: "20px",
                        padding: "6px 6px",
                    },
                    "&:hover": {
                        backgroundColor: "#f3f4f8",
                        color: "#252932",
                    }
                }
            }
        }
    }
});
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SettingStyle = styled(Box)({
    ".settingMain": {
        backgroundColor: "#FDFDFD",
        padding: "50px 100px",
        "@media (max-width:1200px)": {
            padding: "50px 70px",
        },
        "@media (max-width:1024px)": {
            padding: "50px 30px",
        },
        "@media (max-width:576px)": {
            padding: "50px 14px",
        },
        "h5": {
            fontWeight: 600,
            letterSpacing: "1px",
            color: '#3C424F',
        },
        ".tabMain": {
            ".tabPanelWrap": {
                margin: '30px 0px',
                ".MuiTabs-flexContainer": {
                    "@media (max-width:992px)": {
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }
                },
                ".MuiButtonBase-root": {
                    color: '#7087ae',
                    textTransform: 'capitalize',
                    "@media (max-width:1200px)": {
                        padding: "0px",
                    },
                    "@media (max-width:425px)": {
                        width: "50%",
                    },
                    "&.Mui-selected": {
                        color: '#101727',
                        "@media (max-width:992px)": {
                            border: "1px solid #b3aac0",
                            borderBottom: "none",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            padding: "0px 20px",
                        }
                    },
                },
                ".MuiTabs-indicator": {
                    backgroundColor: "#101727",
                    "@media (max-width:992px)": {
                        display: "none",
                    },
                }
            },
            ".teamPanel": {
                border: '1px solid #E7EAEE',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px #e7eaee',
            }
        }
    }
});
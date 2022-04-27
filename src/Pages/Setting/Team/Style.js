import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const TeamStyle = styled(Box)({
    margin:"-24px",
    ".TeamMain": {
        ".teamHeader ": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            borderBottom: '1px solid #E7EAEE',
            "@media (max-width:630px)": {
                display: 'block',
            },
            ".teamTitle ": {
                display: 'flex',
                alignItems: 'center',
                "h6": {
                    fontSize: '18px',
                    color: '#3C424F'
                },
                "p": {
                    fontSize: "12px",
                    color: '#3C424F',
                    fontWeight: 600,
                    backgroundColor: '#F3F4F8',
                    borderRadius: '10px',
                    marginLeft: '10px',
                    padding: '2px 7px',
                }
            },
            ".downloadBtn": {
                display: 'flex',
                alignItems: 'center',
                "@media (max-width:630px)": {
                    marginTop: '26px',
                },
                "button": {
                    color: '#3C424F',
                    fontWeight: 600,
                    border:' 1px solid #E7EAEE',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px 14px',
                    borderRadius: '8px',  
                    boxShadow: '0px 0px 3px #f2f2f2',
                    cursor: 'pointer',
                    "@media (max-width:425px)": {
                        fontSize: '12px',
                        padding: '6px 8px',
                    },
                    "svg": {
                        paddingRight: '7px'
                    }
                },
                ".btnUser": {
                    backgroundColor: '#101727',
                    color: '#fff',
                    marginLeft: '15px',
                    "@media (max-width:425px)": {
                        marginLeft: "6px",
                    },
                }
            }
        },
        ".memberdetails": {
            ".MuiPaper-root": {
                boxShadow:"none"
            },
            "thead": {
                ".MuiButtonBase-root": {
                    color: '#8791a1',
                    fontWeight: 500,
                    ".MuiSvgIcon-root": {
                        opacity:1,
                    }
                },
                ".MuiTableCell-root": {
                    textAlign: "left",
                    borderBottom:"0",
                    "&:last-child": {
                        ".MuiSvgIcon-root": {
                            display:"none"
                        }  
                    }
                }
            },
            "tbody": {
                ".MuiTableRow-root": {
                    "&:nth-child(odd)": {
                        backgroundColor:"#F9FAFC"
                    },
                    "&:hover": {
                        backgroundColor:"#F9FAFC"
                    }
                },
                ".MuiTableCell-root": {
                    borderBottom:"0"
                }
            },
            ".MuiCheckbox-root": {
                "svg": {
                    color: '#e8e4e4'
              }
            },
            ".nameData": {
                display: 'flex',
                alignItems: 'center',
                "h4": {
                    fontSize: '14px',
                    color: '#3C424F',
                    fontWeight: 600,
                },
                "h6": {
                    fontSize: '15px',
                    color: '#8791a1',
                    fontWeight: 400, 
                }
            },
            ".statusData": {
                "p": {
                    position: 'relative',
                    backgroundColor: '#E7F8F0',
                    display: 'inline-block',
                    borderRadius: '14px',
                    color: '#13B368',
                    fontSize: '12px',
                    fontWeight: 500,
                    padding: '1px 8px 1px 17px',
                    "&:after": {
                        content: "''",
                        width: '5px',
                        height: '5px',
                        background: '#13B368',
                        position: 'absolute',
                        left: '7px',
                        top: '7px',
                        borderRadius: '30px',
                    }
               }
            },
            ".teamData": {
                "p": {
                    backgroundColor: '#F4F0FB',
                    display: 'inline-block',
                    borderRadius: '14px',
                    color: '#7856CB',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '1px 8px',
                },
                ".bgBlue": {
                    color: '#5F91E2',
                    backgroundColor: '#EAF3FB',
                }
            },
            ".actionData": {
                "svg": {
                    color: '#989ea6'
                }
            }
        }
    }
});
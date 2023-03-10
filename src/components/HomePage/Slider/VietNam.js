import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import vietNam from "../../../assets/images/slider/SLIDER-06.png";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
  },
  image: {
    maxWidth: "70%",
  },
}));

const VietNam = () => {
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  const classes = useStyles();
  if (isMobile) {
    return (
      <div className={classes.container}>
        <img src={vietNam} className={classes.image} alt="" />
      </div>
    );
  }
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-end"
      className={classes.container}
    >
      <img src={vietNam} className={classes.image} alt="" />
      <Box textAlign="right">
        <Typography fontSize="20px" fontFamily="Gotham">
          REPRESENTATIVE
        </Typography>
        <Typography
          fontSize="70px"
          fontFamily="TimesNewRomanItalic"
          letterSpacing="-0.9px"
        >
          Viet Nam
        </Typography>
      </Box>
    </Stack>
  );
};

export default VietNam;

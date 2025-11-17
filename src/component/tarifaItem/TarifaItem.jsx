import { Box, Grid } from "@mui/material";
import "./TarifaItem.css";

const TarifaItem = ({ precio, noches, texto, img }) => {
  return (
    <>
      <Box className="tarifaItemContainer">
        <Box
          className="tarifaItemImage"
          sx={{ backgroundImage: `url(${img})` }}
        ></Box>
        <Box className="tarifaItemTextcontainer">
          <Box container className="tarifaItemImage2">
            <Box className="tarifaItem">{noches}</Box>
            <Box xs={3} className="tarifaItem" sx={{ fontWeight: "700" }}>
              {precio}
            </Box>
            <Box xs={3} className="tarifaItem" sx={{ fontSize: "14px" }}>
              {texto}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TarifaItem;

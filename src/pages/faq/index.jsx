import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Freqyently Asked Questions Page" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mission Reports Q1 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            accusamus enim placeat ipsa harum repellendus consequatur iusto
            itaque repudiandae sunt accusantium aliquam fugit, maiores eius
            delectus omnis quas inventore rerum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mission Reports Q2 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            accusamus enim placeat ipsa harum repellendus consequatur iusto
            itaque repudiandae sunt accusantium aliquam fugit, maiores eius
            delectus omnis quas inventore rerum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mission Reports Q3 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            accusamus enim placeat ipsa harum repellendus consequatur iusto
            itaque repudiandae sunt accusantium aliquam fugit, maiores eius
            delectus omnis quas inventore rerum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mission Reports Q4 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            accusamus enim placeat ipsa harum repellendus consequatur iusto
            itaque repudiandae sunt accusantium aliquam fugit, maiores eius
            delectus omnis quas inventore rerum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mission Reports Q1 2023
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            accusamus enim placeat ipsa harum repellendus consequatur iusto
            itaque repudiandae sunt accusantium aliquam fugit, maiores eius
            delectus omnis quas inventore rerum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Mission Reports Q2 2023
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            accusamus enim placeat ipsa harum repellendus consequatur iusto
            itaque repudiandae sunt accusantium aliquam fugit, maiores eius
            delectus omnis quas inventore rerum!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

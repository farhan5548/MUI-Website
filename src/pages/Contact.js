import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 4,
          mx: { xs: 3, sm: 5 },
          "& h4": {
            fontWeight: "bold",
            my: 1,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            py: 2,
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <Typography component="p">
          Pakistan is a culturally rich and diverse country located in South
          Asia. Known for its stunning landscapes, it offers everything from
          towering mountains in the north, including K2, to fertile plains and
          beautiful coastlines in the south.
        </Typography>
      </Box>
      <Box
        sx={{
          mx: "auto",
          width: "600px",
          "@media (max-width: 900px)": { width: "80%" },
          "@media (max-width: 600px)": { width: "100%" },
          my:5
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 3, p: { xs: 1, sm: 2 } }}
        >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white", fontSize: "1.8rem" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <SupportAgentIcon sx={{ color: "red" }} /> 051-1234567
                  (TollFree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailIcon sx={{ color: "grey" }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <CallIcon sx={{ color: "green" }} /> 123456789
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;

import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 1,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            py: 1,
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
          beautiful coastlines in the south. Pakistan has a deep history shaped
          by ancient civilizations such as the Indus Valley, as well as vibrant
          traditions in art, music, and literature. Its people are known for
          hospitality, resilience, and strong community values. Major cities
          like Karachi, Lahore, and Islamabad reflect a blend of modern
          development and historical heritage. Despite challenges, Pakistan
          continues to grow, striving for progress and a better future.
        </Typography>
        <Typography component="p">
          Pakistan is a culturally rich and diverse country located in South
          Asia. Known for its stunning landscapes, it offers everything from
          towering mountains in the north, including K2, to fertile plains and
          beautiful coastlines in the south. Pakistan has a deep history shaped
          by ancient civilizations such as the Indus Valley, as well as vibrant
          traditions in art, music, and literature. Its people are known for
          hospitality, resilience, and strong community values. Major cities
          like Karachi, Lahore, and Islamabad reflect a blend of modern
          development and historical heritage. Despite challenges, Pakistan
          continues to grow, striving for progress and a better future.
        </Typography>
        <Typography component="p">
          Pakistan is a culturally rich and diverse country located in South
          Asia. Known for its stunning landscapes, it offers everything from
          towering mountains in the north, including K2, to fertile plains and
          beautiful coastlines in the south. Pakistan has a deep history shaped
          by ancient civilizations such as the Indus Valley, as well as vibrant
          traditions in art, music, and literature. Its people are known for
          hospitality, resilience, and strong community values. Major cities
          like Karachi, Lahore, and Islamabad reflect a blend of modern
          development and historical heritage. Despite challenges, Pakistan
          continues to grow, striving for progress and a better future.
        </Typography>
        <Typography component="p">
          Pakistan is a culturally rich and diverse country located in South
          Asia. Known for its stunning landscapes, it offers everything from
          towering mountains in the north, including K2, to fertile plains and
          beautiful coastlines in the south. Pakistan has a deep history shaped
          by ancient civilizations such as the Indus Valley, as well as vibrant
          traditions in art, music, and literature. Its people are known for
          hospitality, resilience, and strong community values. Major cities
          like Karachi, Lahore, and Islamabad reflect a blend of modern
          development and historical heritage. Despite challenges, Pakistan
          continues to grow, striving for progress and a better future.
        </Typography>
        <Typography component="p">
          Pakistan is a culturally rich and diverse country located in South
          Asia. Known for its stunning landscapes, it offers everything from
          towering mountains in the north, including K2, to fertile plains and
          beautiful coastlines in the south. Pakistan has a deep history shaped
          by ancient civilizations such as the Indus Valley, as well as vibrant
          traditions in art, music, and literature. Its people are known for
          hospitality, resilience, and strong community values. Major cities
          like Karachi, Lahore, and Islamabad reflect a blend of modern
          development and historical heritage. Despite challenges, Pakistan
          continues to grow, striving for progress and a better future.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;

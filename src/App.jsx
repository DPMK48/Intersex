import { Box, ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./styles/contact.css";
import "./styles/error.css";
import "./styles/did-you-know.css";
import "./styles/global.css";
import "./styles/popup.css";
import "./styles/get-to-know.css";
import "./styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper-bundle.css";
import "./styles/swiper.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <HelmetProvider>
        <Box
          // maxW={"1560px"}
          bg={"white"}
          mx={"auto"}
          w={"100%"}
          overflowX={"hidden"}
        >
          <RouterProvider router={router} />
        </Box>
      </HelmetProvider>
    </ChakraProvider>
  );
}

export default App;

import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../ui/ScrollToTop";

const Layout = () => {
  const location = useLocation(); // Get the current location for AnimatePresence

  return (
    <Box
      as={"main"}
      // maxW={"1560px"}
      bg={"white"}
      mx={"auto"}
      w={"100%"}
      overflowX={"hidden"}
    >
      <Navbar />
      <ScrollToTop />
      <Box maxW={"1560px"} mx={"auto"}>
        <Outlet key={location.pathname} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

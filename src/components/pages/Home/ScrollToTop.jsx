import { useState, useEffect } from "react";
import { Circle, keyframes } from "@chakra-ui/react"; // Assuming you're using Chakra UI
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pulseAnimation = keyframes`
    0% { transform: scale(1);}
    50% { transform: scale(1.21) }
    100% { transform: scale(1);}
  `;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        // Show button after scrolling down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <Circle
        position="fixed"
        bottom="10%"
        color={"white"}
        bg={"orange"}
        size={"50px"}
        right="16px"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        boxShadow="xl"
        animation={`${pulseAnimation} 2s infinite ease-in-out`}
        display={{base:'none',md:'flex'}}
        cursor={'pointer'}
      >
        <FaArrowUp fontSize={"1.3rem"} />
      </Circle>
    )
  );
};

export default ScrollToTopButton;

import { Flex, Image } from "@chakra-ui/react";
import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
import "../../../styles/error.css";
const Error = () => {
  return (
    <section className="error">
      <div className="error-container">
        <div className="error-img">
          <Image src={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211789/intersex-ng-images/404.svg"} alt="error" />
        </div>
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          The page you entered does not exist
        </h1>
        <Flex w={"100%"} justifyContent={"center"}>
          <Link to={"/"}>
            <Button text={"Back home"} />
          </Link>
        </Flex>
      </div>
    </section>
  );
};
export default Error;

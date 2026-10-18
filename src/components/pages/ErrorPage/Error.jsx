import { Flex, Image } from "@chakra-ui/react";
import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
import "../../../styles/error.css";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();
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
          {t("error.pageNotFound", "The page you entered does not exist")}
        </h1>
        <Flex w={"100%"} justifyContent={"center"}>
          <Link to={"/"}>
            <Button text={t("common.backHome", "Back home")} />
          </Link>
        </Flex>
      </div>
    </section>
  );
};
export default Error;

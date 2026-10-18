/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  DrawerFooter,
} from "@chakra-ui/react";
import { navItems } from "./items";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerContent h={"100vh"} w={"100vw"} py={"1rem"}>
        <DrawerCloseButton fontSize={"1rem"} onClick={onClose} />
        <DrawerBody mt={"2.5rem"} w={"100%"}>
          <Box mb={4} display="flex" justifyContent="center">
            <LanguageSwitcher isMobile={true} />
          </Box>
          <Flex flexDir={"column"} pb={"1rem"}>
            <ul>
              {navItems.map((item, idx) => {
                const { label, key, subLabels, url } = item;
                const displayLabel = key ? t(key) : label;
                return (
                  <li key={idx} style={{ listStyleType: "none" }}>
                    <Accordion allowToggle>
                      <AccordionItem border={"none"}>
                        <h2>
                          <AccordionButton
                            _expanded={
                              subLabels && {
                                bg: "purple",
                                color: "white",
                              }
                            }
                            color={"purple"}
                          >
                            <Link
                              to={url}
                              onClick={() => {
                                if (url !== "#") {
                                  onClose();
                                }
                              }}
                            >
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                fontWeight={500}
                                fontSize={"18px"}
                                fontFamily={"inter"}
                                _focus={{ bg: "transparent" }}
                              >
                                {displayLabel}
                              </Box>
                            </Link>

                            {subLabels && (
                              <AccordionIcon fontSize={"28px"} />
                            )}
                          </AccordionButton>
                        </h2>
                        {subLabels &&
                          subLabels.map((subItem, subIdx) => {
                            const { name, key: subKey, url } = subItem;
                            const displayName = subKey ? t(subKey) : name;
                            return (
                              <AccordionPanel
                                pb={1}
                                key={subIdx}
                                // color={"orange"}
                                // bg={"purple"}
                                textTransform={"Capitalize"}
                              >
                                <Link
                                  to={url}
                                  onClick={onClose}
                                  target={
                                    name === "volunteer with us"
                                      ? "_blank"
                                      : ""
                                  }
                                  rel="noreferrer"
                                >
                                  {displayName}
                                </Link>
                              </AccordionPanel>
                            );
                          })}
                      </AccordionItem>
                    </Accordion>
                  </li>
                );
              })}
            </ul>
          </Flex>
        </DrawerBody>
        <DrawerFooter my={"2rem"}>
          <Box m={"auto"}>
            <Button text={t("common.donateNow", "donate now")} />
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

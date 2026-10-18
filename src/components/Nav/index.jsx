// import React from 'react'

import {
  Box,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { navItems, topNavItems } from "./items";
import { useState } from "react";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { Routes } from "../../routes/baseRoutes";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isLargerThan991] = useMediaQuery("(min-width: 992px)");

  return (
    <>
      <Box
        bg={"#fff"}
        maxW={"1560px"}
        mx={"auto"}
        w={"100%"}
        // borderTop={"10px solid #64117e"}
        px={{ base: "25px", md: "45px", lg: "25px", xl: "45px" }}
        boxShadow="lg"
        fontFamily={"nunito"}
        pos={{ base: "fixed", md: "unset" }}
        zIndex={100}
        // overflowY={"hidden"}
        overflow={"hidden"}
        // pos={"relative"}
        height={{ base: "60px", md: "110px", lg: "150px" }}
        // transition="height 0.3s ease-in-out"
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          display={{ base: "none", lg: "flex" }}
          py="10px"
          w="100%"
        >
          <Flex gap={"20px"}>
            {topNavItems.map((item, idx) => {
              const { icon, text, key } = item;
              return (
                <Flex key={idx} alignItems={"center"} gap={"10px"}>
                  <Icon
                    as={icon}
                    bg={"orange"}
                    fontSize={"30px"}
                    color={"white"}
                    p={"8px"}
                    borderRadius={"1px"}
                  />
                  <Text color={"purple"} fontSize={"14px"}>
                    {key ? t(key) : text}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex alignItems="center" gap="12px">
            <Box
              as={Link}
              to={Routes.reportsLanding}
              bg="white"
              color="purple"
              border="2px solid"
              borderColor="purple"
              px="16px"
              py="4px"
              borderRadius="full"
              fontSize="14px"
              fontWeight="600"
              fontFamily="Georgia, serif"
              display="flex"
              alignItems="center"
              gap="8px"
              _hover={{ bg: "purple.50", transform: "scale(1.02)" }}
              transition="all 0.2s"
            >
              {t("nav.reportsAtIntersex", "Reports at Intersex Nigeria")}
              <Flex
                bg="purple"
                borderRadius="sm"
                p="2px"
                w="16px"
                h="16px"
                align="center"
                justify="center"
              >
                <Icon as={FaExternalLinkAlt} color="white" fontSize="9px" />
              </Flex>
            </Box>
            <LanguageSwitcher />
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          justifyContent={{ base: "space-between", lg: "" }}
          overflowX={"hidden"}
          alignItems={{ base: "center", lg: "" }}
        >
          <Box pb={{ base: "10px", md: "10px" }}>
            <Link to="/">
              <Image
                src="https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212316/intersex-ng-images/logo.webp"
                alt={"Intersex Nigeria logo"}
                w={{
                  base: "50px",
                  md: "100px",
                  lg: "80px",
                  xl: "120px",
                }}
                h={{
                  base: "50px",
                  md: "100px",
                  lg: "80px",
                  xl: "auto",
                }}
                // transition="all 0.3s ease-in-out"
              />
            </Link>
          </Box>

          <Icon
            as={FaBars}
            fontSize={{ base: "2rem", md: "3rem" }}
            border={"1px solid grey"}
            color={"purple"}
            borderRadius={"sm"}
            p={"0.3rem"}
            display={{
              base: openSidebar ? "none" : "block",
              lg: "none",
            }}
            onClick={() => setOpenSidebar(true)}
          />
          {openSidebar && !isLargerThan991 && (
            <Sidebar
              isOpen={openSidebar}
              onClose={() => setOpenSidebar(false)}
            />
          )}
          <Flex
            display={{ base: "none", lg: "flex" }}
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex gap={"5px"} w={"100%"} justify={"center"}>
              <ul style={{ display: "flex", gap: "5px" }}>
                {navItems.map((item, idx) => {
                  const { label, key, subLabels, url } = item;
                  const displayLabel = key ? t(key) : label;
                  return (
                    <li key={idx} style={{ listStyleType: "none" }}>
                      <Menu isOpen={openIndex === idx}>
                        <Link to={url}>
                          <MenuButton
                            aria-haspopup="true"
                            aria-expanded={openIndex === idx}
                            // isActive={openIndex === idx}
                            onMouseEnter={() => setOpenIndex(idx)}
                            onMouseLeave={() => setOpenIndex(null)}
                            _hover={{
                              // bg: "purple",
                              color: "orange",
                              borderRadius: "5px",
                            }}
                            color={"purple"}
                          >
                            <Text
                              fontSize={"16px"}
                              textTransform={"uppercase"}
                              textAlign={"center"}
                              py="6px"
                              px={{
                                base: "20px",
                                lg: "10px",
                                xl: "20px",
                              }}
                              fontFamily={"inter"}
                            >
                              {displayLabel}
                            </Text>
                          </MenuButton>
                        </Link>

                        {subLabels && (
                          <MenuList
                            bg={"purple"}
                            onMouseEnter={() => setOpenIndex(idx)}
                            onMouseLeave={() => setOpenIndex(null)}
                            borderColor={"purple"}
                            minWidth="max-content"
                          >
                            {subLabels.map((subLabel, subIdx) => {
                              const { name, key: subKey, url } = subLabel;
                              const displayName = subKey ? t(subKey) : name;
                              return (
                                <Link
                                  to={url}
                                  key={subIdx}
                                  target={
                                    name === "volunteer with us"
                                      ? "_blank"
                                      : ""
                                  }
                                  rel="noreferrer"
                                >
                                  <MenuItem
                                    color={"white"}
                                    bg={"purple"}
                                    _hover={{ bg: "orange" }}
                                    textTransform={"Capitalize"}
                                  >
                                    {displayName}
                                  </MenuItem>
                                </Link>
                              );
                            })}
                          </MenuList>
                        )}
                      </Menu>
                    </li>
                  );
                })}
              </ul>
            </Flex>
            <Box>
              <Button
                text={t("common.donateNow", "donate now")}
                fontSize={{ base: "16px", lg: "16px" }}
                px={{ base: "6px", lg: "3px" }}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: "Main Navigation",
          hasPart: navItems.map((item) => {
            const schemaItem = {
              "@type": "SiteNavigationElement",
              name: item.label,
              url: item.url,
            };
            if (item.subLabels) {
              schemaItem.hasPart = item.subLabels.map((subItem) => ({
                "@type": "SiteNavigationElement",
                name: subItem.name,
                url: subItem.url,
              }));
            }
            return schemaItem;
          }),
        })}
      </script>
    </>
  );
};

export default Navbar;

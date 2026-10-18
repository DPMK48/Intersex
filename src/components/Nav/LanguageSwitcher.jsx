import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaChevronDown, FaCheck } from "react-icons/fa";

const languages = [
  {
    code: "en",
    label: "English",
    short: "EN",
    flag: "🇬🇧",
  },
  {
    code: "fr",
    label: "Français",
    short: "FR",
    flag: "🇫🇷",
  },
];

const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const currentLang =
    languages.find((l) => i18n.language && i18n.language.startsWith(l.code)) ||
    languages[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  if (isMobile) {
    return (
      <Flex
        bg="gray.50"
        p="1"
        borderRadius="full"
        border="1px solid"
        borderColor="purple.200"
        align="center"
        justify="center"
        w="max-content"
      >
        {languages.map((lang) => {
          const isActive = currentLang.code === lang.code;
          return (
            <Button
              key={lang.code}
              size="sm"
              variant={isActive ? "solid" : "ghost"}
              bg={isActive ? "purple" : "transparent"}
              color={isActive ? "white" : "purple"}
              _hover={{
                bg: isActive ? "purple" : "purple.50",
              }}
              borderRadius="full"
              px="12px"
              py="4px"
              fontSize="13px"
              fontWeight="600"
              onClick={() => handleLanguageChange(lang.code)}
            >
              <Text as="span" mr="6px">
                {lang.flag}
              </Text>
              {lang.short}
            </Button>
          );
        })}
      </Flex>
    );
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        variant="outline"
        borderColor="purple"
        color="purple"
        borderRadius="full"
        px="12px"
        h="32px"
        _hover={{ bg: "purple.50", borderColor: "orange", color: "orange" }}
        _active={{ bg: "purple.100" }}
        transition="all 0.2s"
      >
        <Flex align="center" gap="6px">
          <Icon as={FaGlobe} fontSize="13px" />
          <Text as="span" fontSize="13px" fontWeight="600">
            {currentLang.flag} {currentLang.short}
          </Text>
          <Icon as={FaChevronDown} fontSize="10px" opacity={0.7} />
        </Flex>
      </MenuButton>
      <MenuList
        minW="140px"
        py="1"
        boxShadow="xl"
        borderRadius="md"
        borderColor="gray.200"
        zIndex={150}
      >
        {languages.map((lang) => {
          const isActive = currentLang.code === lang.code;
          return (
            <MenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              bg={isActive ? "purple.50" : "transparent"}
              _hover={{ bg: "orange.50", color: "orange.700" }}
              py="6px"
              px="12px"
            >
              <Flex align="center" justify="space-between" w="100%">
                <Flex align="center" gap="8px">
                  <Text fontSize="15px">{lang.flag}</Text>
                  <Text
                    fontSize="13px"
                    fontWeight={isActive ? "700" : "500"}
                    color={isActive ? "purple" : "gray.800"}
                  >
                    {lang.label}
                  </Text>
                </Flex>
                {isActive && <Icon as={FaCheck} color="purple" fontSize="11px" />}
              </Flex>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;

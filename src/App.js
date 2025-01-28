import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  List,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

//Подключение анимаций
import { motion } from 'framer-motion';

//Подключение иконок
import {
  AiFillCheckCircle,
  AiFillYoutube,
  AiFillDollarCircle,
} from 'react-icons/ai';

import { FaTelegram, FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

import logoMuslimKids from './assets/MuslimKidsLogoReal.png';
import heart from './assets/heart.jpg';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Ссылки на доп. материалы
  const devlinksHelp = [
    {
      url: '',
      icon: AiFillDollarCircle,
      text: 'спонсировать ',
    },
  ];

  //Ссылки на социальные сети и их логотипы
  const links = [
    {
      url: 'https://youtube.com/@muslimkidskg?si=2imDDpl46rMfb54y',
      icon: AiFillYoutube,
      text: 'YouTube',
    },
    {
      url: 'https://www.tiktok.com/@muslimkids.media?is_from_webapp=1&sender_device=pc',
      icon: SiTiktok, // Исправленная иконка
      text: 'TikTok',
    },
    {
      url: 'https://t.me/muslimkidsmedia',
      icon: FaTelegram,
      text: 'Telegram',
    },
    {
      url: 'https://www.instagram.com/muslimkids.media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: FaInstagram,
      text: 'Instagram',
    },
  ];



  const devlinksMuslimTube = [
    {
      url: '',
      icon: FiYoutube,
      text: 'Muslim You Tube',
    },
  ];

  const devlinks = [
    {
      url: 'https://www.nasyikat.media/?fbclid=PAZXh0bgNhZW0CMTEAAabH2nWI83VtEvd-EPr93ZtkR-oDlVaTR9Yqg9b8vYT5u2TCqJIJYRgdqd8_aem_5CeJBO3URcs_YDGEhCfPIw',
      icon: FaMoon,
      text: 'nasyikat.media',
    },
  ];

  //Название страницы
  const info = {
    name: '@muslimkids.media',
  };

  // Настройка цвета страницы
  const color = {
    colorTheme: 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
    colorButton: 'rgba(255,255,255)',
  };

  const parentContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const chieldElement = {
    hidden: { opacity: 0, x: '-50px' },
    show: { opacity: 1, x: '0px' },
  };

  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/');
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } else {
        throw new Error('Ошибка получения данных');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          minH="100vh"
          p={3}
          sx={{
            backgroundImage: `${heart}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundBlendMode: 'soft-light',
          }}
        >
          <VStack marginTop="2em">
            {/* логотип */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              {isLoading ? (
                <SkeletonCircle size="6em" />
              ) : (
                <Image
                  src={logoMuslimKids}
                  alt="Логотип канала Техноманьяк"
                  w="9em"
                  borderRadius="50%"
                  border="3px solid white"
                  boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
                  as={motion.img}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition="linear 0.1s"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              )}
            </Link>

            {/* Блок с названием */}
            <HStack
              as={motion.div}
              initial={{ x: '-50px' }}
              animate={{ x: '0px' }}
              transition="linear 0.1s"
            >
              {isLoading ? (
                <>
                  <SkeletonText
                    noOfLines={1}
                    width="10em"
                    skeletonHeight="10"
                  />
                  <Skeleton height="30px" width="30px" borderRadius="50%" />
                </>
              ) : (
                <>
                  <Text fontSize={30} fontWeight="bold" color="white">
                    {info.name}
                  </Text>
                  <Text
                    as={AiFillCheckCircle}
                    color="rgba(3, 177, 252)"
                    fontSize={30}
                    marginRight="auto"
                  />
                </>
              )}
            </HStack>

            {/* Список "Поддержать" */}
            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              <p
                style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
              >
                Поддержать
              </p>
              {devlinksHelp.map(link => (
                <HStack
                  key={link.text}
                  onClick={onOpen}
                  w="15em"
                  h="3em"
                  borderRadius="12px"
                  boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                  color="gray.900"
                  bgColor={color.colorButton}
                  p="1em"
                  marginY="1em"
                  _hover={{
                    boxShadow: '12px 14px 14px 0px rgba(156, 38, 184, 0.84)',
                    color: 'rgba(156, 38, 184, 0.84)',
                  }}
                  as={motion.div}
                  variants={chieldElement}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{cursor: 'pointer'}}
                >
                  <Text as={link.icon} fontSize={30} marginRight="auto" />
                  <Text
                    fontSize={20}
                    fontWeight="bold"
                    marginRight="auto"
                    p="1em"
                    marginY="1em"
                  >
                    {link.text}
                  </Text>
                </HStack>
              ))}
            </List>

            {/* Модальное окно */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Информация</ModalHeader>
                <ModalBody>
                  <Text>Этот раздел находится в разработке.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" onClick={onClose}>
                    Закрыть
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* Блок с ссылками */}
            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              <p
                style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
              >
                Каналы
              </p>
              {links.map(link => (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor={color.colorButton}
                    p="1em"
                    marginY="1em"
                    color="gray.900"
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    _hover={{
                      // добавляем стили для hover состояния
                      boxShadow: '12px 14px 14px 0px rgba(188,19,254)',
                      color: 'rgba(188,19,254)',
                    }}
                  >
                    <Text as={link.icon} fontSize={30} marginRight="auto" />
                    <Text
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                      p="1em"
                      marginY="1em"
                    >
                      {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>

            {/* Блок с доп ссылками */}
            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              <p
                style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
              >
                Доп. Ссылки
              </p>
              {devlinksMuslimTube.map(link => (
                <HStack
                  key={link.text}
                  onClick={onOpen}
                  w="15em"
                  h="3em"
                  borderRadius="12px"
                  boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                  color="gray.900"
                  bgColor={color.colorButton}
                  p="1em"
                  marginY="1em"
                  _hover={{
                    boxShadow: '12px 14px 14px 0px rgba(156, 38, 184, 0.84)',
                    color: 'rgba(156, 38, 184, 0.84)',
                  }}
                  as={motion.div}
                  variants={chieldElement}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{cursor: 'pointer'}}
                >
                  <Text as={link.icon} fontSize={30} marginRight="auto" />
                  <Text
                    fontSize={20}
                    fontWeight="bold"
                    marginRight="auto"
                    p="1em"
                    marginY="1em"
                  >
                    {link.text}
                  </Text>
                </HStack>
              ))}
              {devlinks.map(link => (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    color="gray.900"
                    bgColor={color.colorButton}
                    p="1em"
                    marginY="1em"
                    _hover={{
                      // добавляем стили для hover состояния
                      boxShadow: '12px 14px 14px 0px rgba(156, 38, 184, 0.84)',
                      color: 'rgba(156, 38, 184, 0.84)',
                    }}
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Text as={link.icon} fontSize={30} marginRight="auto" />
                    <Text
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                      p="1em"
                      marginY="1em"
                    >
                      {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

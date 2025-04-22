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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

//Подключение анимаций
import { motion } from 'framer-motion';

//Подключение иконок
import {
  AiFillCheckCircle,
  AiFillYoutube,
  // AiFillDollarCircle,
} from 'react-icons/ai';

import { FaTelegram, FaInstagram } from 'react-icons/fa';
// import { FiYoutube } from 'react-icons/fi';
// import { FaMoon } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

import logoMuslimKids from './assets/logo.jpg';
import heart from './assets/heart.jpg';

function App() {
  //Ссылки на доп. материалы
  // const devlinksHelp = [
  //   {
  //     url: 'https://details-zeta.vercel.app/',
  //     icon: AiFillDollarCircle,
  //     text: 'спонсировать ',
  //   },
  // ];

  //Ссылки на социальные сети и их логотипы
  const links = [
    {
      url: 'https://youtube.com/@muslimmlife715?si=OYN05AbxxPqj3tTU',
      icon: AiFillYoutube,
      text: 'YouTube',
    },
    {
      url: 'https://www.tiktok.com/@muslimmlife715?_t=ZN-8viVYb87SGV&_r=1',
      icon: SiTiktok, // Исправленная иконка
      text: 'TikTok',
    },
    {
      url: 'https://t.me/muslimmlife715',
      icon: FaTelegram,
      text: 'Telegram',
    },
    {
      url: 'https://www.instagram.com/muslimmlife715',
      icon: FaInstagram,
      text: 'Instagram',
    },
  ];

  // const devlinksMuslimTube = [
  //   {
  //     url: 'https://m-three-weld.vercel.app/',
  //     icon: FiYoutube,
  //     text: 'MuslimContent',
  //   },
  // ];

  // const devlinks = [
  //   {
  //     url: 'https://www.nasyikat.media/?fbclid=PAZXh0bgNhZW0CMTEAAabH2nWI83VtEvd-EPr93ZtkR-oDlVaTR9Yqg9b8vYT5u2TCqJIJYRgdqd8_aem_5CeJBO3URcs_YDGEhCfPIw',
  //     icon: FaMoon,
  //     text: 'nasyikat.media',
  //   },
  // ];

  //Название страницы
  const info = {
    name: '@muslimmlife715',
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
            backgroundImage: `url(${heart})`, // Добавил `url()`, чтобы правильно подставить изображение
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Фон остаётся фиксированным при прокрутке
            backgroundBlendMode: 'soft-light',
            backgroundRepeat: 'no-repeat', // Убираем повторения изображения
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Добавил тёмный полупрозрачный слой для лучшей читаемости контента
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
                  alt="Логотип канала muslimkids.media"
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
            {/* <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              <p
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginTop: 30,
                }}
              >
                Курс путь к 50K
                <span
                  style={{ fontSize: '16px', position: 'relative', top: -15 }}
                >
                  <br /> {'(рост канала без съёмок с нуля)'}
                </span>
              </p>
              {devlinksMuslimTube.map(link => (
                <HStack
                  key={link.text}
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
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(link.url, '_blank')}
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
            </List> */}

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
            {/* <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              <p
                style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
              >
                Доп. Ссылки
              </p> */}

              {/* {devlinks.map(link => (
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
              ))} */}
              {/* {devlinksHelp.map(link => (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <HStack
                    key={link.text}
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
                    style={{ cursor: 'pointer' }}
                    href={link.url}
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
              ))} */}
            {/* </List> */}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

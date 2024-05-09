import { Box, Container, Flex, Heading, Text, VStack, Link, SimpleGrid } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import areImage from '../../public/images/are.jpg';
import salenImage from '../../public/images/salen.jpg';
import vemdalenImage from '../../public/images/vemdalen.jpg';

const resorts = [
  { name: "Åre", description: "Sweden's largest ski area with a variety of slopes and vibrant après-ski culture.", link: "https://www.skistar.com/en/myskistar/destination/are/" },
  { name: "Sälen", description: "Popular family-friendly resort offering a range of slopes and winter activities.", link: "https://www.skistar.com/en/myskistar/destination/salen/" },
  { name: "Vemdalen", description: "Known for its scenic views and well-groomed slopes, perfect for both beginners and advanced skiers.", link: "https://www.skistar.com/en/myskistar/destination/vemdalen/" }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading mb={10}>Discover Ski Resorts in Sweden</Heading>
        <Box w="full" h="300px" bg="gray.200" mb={8}>
          {/* Placeholder for map */}
          <Text p={4}>Map integration coming soon...</Text>
        </Box>
        <VStack spacing={5} align="stretch">
          <Heading size="lg">Featured Resorts</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {resorts.map((resort, index) => {
              let bgImage;
              if (resort.name === "Åre") {
                bgImage = areImage;
              } else if (resort.name === "Sälen") {
                bgImage = salenImage;
              } else if (resort.name === "Vemdalen") {
                bgImage = vemdalenImage;
              }
              return (
                <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg" bgImage={`url(${bgImage})`} bgSize="cover">
                  <Heading size="md">{resort.name}</Heading>
                  <Text mt={2} color="white">{resort.description}</Text>
                  <Link href={resort.link} isExternal color="teal.500" mt={2} display="flex" alignItems="center">
                    <FaMapMarkerAlt />
                    <Text ml={2}>Visit website</Text>
                  </Link>
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
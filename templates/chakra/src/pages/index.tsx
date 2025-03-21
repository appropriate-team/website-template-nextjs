import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Center minH="100vh" bg="gray.100" p={8}>
      <Box maxW="2xl" w="full" textAlign="center">
        <Heading as="h1" size="2xl" mb={4} color="gray.800">
          Welcome to Your Chakra UI App!
        </Heading>
        <Text fontSize="lg" color="gray.600">
          This is a clean starter template using Chakra UI with Next.js.
        </Text>
        <Box mt={6}>
          <Button
            px={6}
            py={3}
            bg="blue.600"
            color="white"
            rounded="xl"
            shadow="md"
            _hover={{ bg: 'blue.700' }}
            transition="all 0.2s"
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

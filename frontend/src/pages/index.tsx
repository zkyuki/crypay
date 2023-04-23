import React from "react";

import {
    Button,
    Container,
    VStack,
    Text,
    Box,
    Center,
    Heading,
    useToast,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
    return (
        <Container maxW="2xl">
            <VStack h="100vh" justify="center" gap={4}>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    padding={30}
                    minW={400}
                >
                    <Heading>Crypay</Heading>
                    <VStack spacing={5} marginTop={6}>
                        <Box width="100%" textAlign="left">
                            <Link href="/selectPayment">
                                Crypay payment page →
                            </Link>
                        </Box>
                        <Box width="100%" textAlign="left">
                            <Link href="/sign">Sign page →</Link>
                        </Box>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}

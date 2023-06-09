import React from "react";
import {
    Box,
    Button,
    Container,
    Heading,
    Grid,
    Center,
    Text,
    VStack,
    Flex,
    Divider,
    Spacer,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

const SelectPaymentPage: React.FC = () => {
    const Address =
        "No. 13, Section 2, Nangang Rd, Nangang District, Taipei City, 115";
    const Price = "150元";

    return (
        <>
            <Container maxW="2xl">
                <Flex
                    minHeight="100vh"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        border="1px"
                        borderColor="gray.200"
                        borderRadius="md"
                        h={"100%"}
                    >
                        <Center>
                            <Image
                                justifyContent="center"
                                alignItems="center"
                                src="https://www.timescar-rental.com/images/japan/stop_ph007.png?20190507"
                                alt="ETH Parking"
                                w={600}
                                h={400}
                            />
                        </Center>
                        <Box marginTop={5}>
                            <Heading size="md" textAlign="center">
                                ETH Parking
                            </Heading>
                            <Text
                                color="GrayText"
                                size="sm"
                                textAlign="center"
                                paddingBottom={4}
                            >
                                {Address}
                            </Text>
                            <Divider />
                            <Flex paddingX={5} paddingY={3}>
                                <Text>进场时间</Text>
                                <Spacer />
                                <Text>2021/09/01 12:00</Text>
                            </Flex>
                            <Flex paddingX={5} paddingY={3}>
                                <Text>退场时间</Text>
                                <Spacer />
                                <Text>2021/09/01 18:00</Text>
                            </Flex>
                        </Box>
                        <Divider />
                        <Box marginTop={3}>
                            <Heading
                                size="lg"
                                textAlign="right"
                                paddingRight={5}
                            >
                                {Price}
                            </Heading>
                        </Box>
                        <Box padding="4" maxW="md" h={"100%"}>
                            <VStack spacing={5}>
                                <Box width="100%">
                                    <Heading size="md" textAlign="left">
                                        选择付款方式
                                    </Heading>
                                </Box>
                                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                                    <Center>
                                        <Button bg={"white"}>
                                            <Link href="#">
                                                <Image
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    src="assets/visa_logo.png"
                                                    alt="Visa"
                                                    h={30}
                                                />
                                            </Link>
                                        </Button>
                                    </Center>
                                    <Center>
                                        <Button bg={"white"}>
                                            <Link href="#">
                                                <Image
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    src="assets/paypal_logo.png"
                                                    alt="PayPal"
                                                    h={30}
                                                />
                                            </Link>
                                        </Button>
                                    </Center>
                                    <Center>
                                        <Button bg={"white"}>
                                            <Link href="/selectCrypto">
                                                <Image
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    src="assets/crypay_logo.png"
                                                    alt="Crypto"
                                                    h={30}
                                                />
                                            </Link>
                                        </Button>
                                    </Center>
                                </Grid>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </>
    );
};

export default SelectPaymentPage;

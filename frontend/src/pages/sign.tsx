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
    Flex,
    Image,
    Spacer,
} from "@chakra-ui/react";
import { useSigner, useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const SignPage: React.FC = () => {
    const { data: signer } = useSigner();
    const toast = useToast();
    const { address } = useAccount();

    const [signature, setSignature] = React.useState<string | null>(null);

    const getSignatures = async () => {
        if (signer) {
            const message = `Please sign if you agree to provide this data to the insurance company \n\n Send to \n ・insurance company \n\n Data to be authorized \n ・Driving distance data \n・Driving behavior data`;
            try {
                const signedMessage = await signer.signMessage(message);
                setSignature(signedMessage);
                console.log("Signed message:", signedMessage);
                toast({
                    title: `Sign success.`,
                    status: "success",
                    isClosable: true,
                });
            } catch (error) {
                console.error("Error signing message:", error);
                toast({
                    title: `Error occurred.`,
                    status: "error",
                    isClosable: true,
                });
            }
        } else {
            console.error("Error signing message:");
            toast({
                title: `Error occurred.`,
                status: "error",
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Flex padding={5}>
                <Image
                    src="assets/crypay_logo.png"
                    alt="CryPay Logo"
                    w="120px"
                />
                <Spacer />

                <ConnectButton />
            </Flex>
            <Container maxW="2xl">
                <VStack h="100vh" justify="center" gap={4}>
                    <Box
                        border="1px"
                        borderColor="gray.200"
                        borderRadius="md"
                        padding={30}
                    >
                        <Heading>Data unveiling</Heading>
                        <Text size="sm" color="GrayText">
                            This signature will send the following data to the
                            insurance company <br />
                            <br />
                            Data to be authorized <br /> ・Driving distance data
                            <br /> ・Driving behavior data
                        </Text>

                        <Center margin={5}>
                            <Button
                                onClick={() => {
                                    getSignatures();
                                }}
                                color="blue.300"
                                isDisabled={!address}
                            >
                                Unveil your data
                            </Button>
                        </Center>
                        <Center>
                            <Text color="red.500">( ⚠️This is Demo )</Text>
                        </Center>
                    </Box>
                </VStack>
            </Container>
        </>
    );
};

export default SignPage;

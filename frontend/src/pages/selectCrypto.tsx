import React from "react";
import {
    Box,
    Button,
    Container,
    Select,
    Text,
    Flex,
    Spacer,
    Input,
    SimpleGrid,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSigner } from "wagmi";
import { ethers } from "ethers";

const SelectCryptoPage: React.FC = () => {
    const { data: signer } = useSigner();
    const toast = useToast();

    const [chain, setChain] = React.useState("");
    const [token, setToken] = React.useState("");

    const sendTransaction = async () => {
        // TODO: send transaction
        const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
        const erc20Abi = [""];
        if (signer) {
            // const tokenContract = new ethers.Contract(
            //     tokenAddress,
            //     erc20Abi,
            //     signer,
            // );
            try {
                // トランザクションの送信
                // const transaction = await tokenContract.transfer(
                //     recipient,
                //     amount,
                // );
                // setTransactionHash(transaction.hash);
                toast({
                    title: `Transaction sent.`,
                    status: "success",
                    isClosable: true,
                });
            } catch (error) {
                console.error("Error sending transaction:", error);
                toast({
                    title: `Transaction sent.`,
                    status: "error",
                    isClosable: true,
                });
            }
        }
    };

    return (
        <Box
            minH="100vh"
            // bgImage="linear-gradient(135deg, #41295a 0%, #2f0743 100%)"
            // bgImage="linear-gradient(135deg, #232526 0%, #414345 100%)"
            bgImage="linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)"
            //bgImage="linear-gradient(135deg, #3c3b3f 0%, #605c3c 100%)"
            bgSize="cover"
            bgRepeat="no-repeat"
        >
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
                <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    marginTop={30}
                    gap={4}
                    bg={"white"}
                    boxShadow={"lg"}
                >
                    <Text fontSize="3xl" padding={5}>
                        Payment methods
                    </Text>

                    <SimpleGrid columns={2} spacing={10} padding={5}>
                        <VStack spacing={3}>
                            <Box width="100%">
                                <Text textAlign="left">Chain</Text>
                                <Select
                                    placeholder="Select Chain"
                                    onChange={(e) => {
                                        setChain(e.target.value);
                                    }}
                                >
                                    <option value="GnosisChain">
                                        Gnosis Chain
                                    </option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </Box>
                            <Box width="100%">
                                <Text textAlign="left">Token</Text>
                                <Select
                                    placeholder="Select Token"
                                    onChange={(e) => {
                                        setToken(e.target.value);
                                    }}
                                >
                                    <option value="xDAI">xDAI</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </Box>
                        </VStack>
                        <VStack justify="center">
                            <Box width="100%">
                                <Text>Amount</Text>
                                <Input
                                    placeholder="Auto complete"
                                    isReadOnly
                                    maxW={300}
                                    onChange={(e) =>
                                        console.log(e.target.value)
                                    } // auto complete
                                />
                            </Box>
                        </VStack>
                    </SimpleGrid>
                    <Flex padding={5}>
                        <Spacer />
                        <Button
                            p="4"
                            onClick={() => {
                                sendTransaction();
                            }}
                        >
                            Send
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default SelectCryptoPage;

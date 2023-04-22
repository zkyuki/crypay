import React from "react";

import { Button, Container, VStack } from "@chakra-ui/react";
import { useSigner } from "wagmi";

const SignPage: React.FC = () => {
    const { data: signer } = useSigner();

    const getSignatures = async () => {
        if (signer) {
            const message = `Please sign if you agree to provide this data to the insurance company \n\n Data to be authorized \n ・Driving distance data`;
            try {
                const signedMessage = await signer.signMessage(message);
                console.log("Signed message:", signedMessage);
            } catch (error) {
                console.error("Error signing message:", error);
            }
        } else {
            console.error("Error signing message:");
        }
    };

    return (
        <>
            <Container maxW="2xl">
                <VStack h="100vh" justify="center">
                    <Button
                        onClick={() => {
                            getSignatures();
                        }}
                    >
                        Sign in
                    </Button>
                </VStack>
            </Container>
        </>
    );
};

export default SignPage;

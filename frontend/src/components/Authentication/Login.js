import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {};

  return (
    <VStack spacing={2}>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          value={password}
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        width="100%"
        colorScheme="blue"
        style={{ marginTop: 15 }}
        onClick={onSubmit}
      >
        Login
      </Button>
      <Button
        width="100%"
        colorScheme="red"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("123@gmail.com");
          setPassword("12345");
        }}
      >
        Get Guest user Credentials
      </Button>
    </VStack>
  );
};

export default Login;

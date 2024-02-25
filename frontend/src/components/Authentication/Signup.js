import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [pic, setPic] = useState();
  const postDetails = () => {};
  const onSubmit = () => {
    console.log(name);
  };
  return (
    <VStack spacing={2}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="name"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Confirm password</FormLabel>
        <Input type="password" onChange={(e) => setCpassword(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={0.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        width="100%"
        colorScheme="blue"
        style={{ marginTop: 15 }}
        onClick={onSubmit}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;

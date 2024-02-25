import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);

    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const data = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successfull",
        status: "Success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

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
        isLoading={loading}
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

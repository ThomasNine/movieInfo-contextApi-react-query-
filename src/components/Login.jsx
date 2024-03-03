import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import { AuthContext } from "../store/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { GeneralContext } from "../store/GeneralContext";

export default function Login() {
  const emailSignUpRef = useRef("");
  const passwordSignUpRef = useRef("");
  const passwordConfirmSignUpRef = useRef("");
  const emailLoginRef = useRef("");
  const passwordLoginRef = useRef("");

  const { signUpFn, logInFn, user } = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [closeModel, setCloseModel] = useState(false);
  const [authModel, setAuthModel] = useState("login");
  const [isInvalid, setInvalid] = useState({
    emailInvalid: false,
    passwordInvalid: false,
    passwordNotMatch: false,
    loginFail: false,
  });
  const [SpinnerLoading, setSpinnerLoading] = useState(false);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      setSpinnerLoading(true);
      if (passwordSignUpRef.current.value.length < 8) {
        setInvalid((pre) => ({ ...pre, passwordInvalid: true }));
        setSpinnerLoading(false);
        return;
      }
      setInvalid((pre) => ({ ...pre, passwordInvalid: false }));
      if (
        passwordSignUpRef.current.value !==
        passwordConfirmSignUpRef.current.value
      ) {
        setInvalid((pre) => ({ ...pre, passwordNotMatch: true }));
        setSpinnerLoading(false);
        return;
      }

      await signUpFn(
        emailSignUpRef.current.value,
        passwordSignUpRef.current.value
      );

      setSpinnerLoading(false);
      toast("Sign up success.");
    } catch (error) {
      toast("Sign up fails.");
      console.log(error);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setSpinnerLoading(true);
      await logInFn(
        emailLoginRef.current.value,
        passwordLoginRef.current.value
      );
      setSpinnerLoading(false);

      toast("Login Successfully");
    } catch (error) {
      setInvalid((pre) => ({ ...pre, loginFail: true }));
      toast("Login fail");
      setSpinnerLoading(false);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-orange-500 text-white uppercase"
        size="sm"
      >
        Login
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        onClose={() => setAuthModel("login")}
      >
        <ModalContent>
          {(onClose) => (
            <div className="px-0 py-10 sm:px-3 sm:py-10">
              {authModel === "login" && (
                <form onSubmit={handleLoginSubmit}>
                  <ModalHeader className="flex flex-col gap-1 text-center text-2xl text-orange-600 dark:text-orange-400">
                    Welcome Back
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      label="Email"
                      variant="bordered"
                      isInvalid={isInvalid.emailInvalid}
                      color={isInvalid.emailInvalid && "danger"}
                      errorMessage={
                        isInvalid.emailInvalid && "Please enter a valid email"
                      }
                      ref={emailLoginRef}
                    />

                    <Input
                      label="Password"
                      type="password"
                      variant="bordered"
                      isInvalid={isInvalid.passwordInvalid}
                      color={isInvalid.passwordInvalid && "danger"}
                      errorMessage={
                        isInvalid.passwordInvalid &&
                        "Please enter a valid email"
                      }
                      ref={passwordLoginRef}
                    />
                    {isInvalid.loginFail && (
                      <p className=" text-sm text-red-500 px-3">
                        Invalid username or password.
                      </p>
                    )}

                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                        classNames={{
                          label: "text-small",
                        }}
                        color="default"
                      >
                        Remember me
                      </Checkbox>
                      <Link color="foreground" size="sm">
                        Forgot password?
                      </Link>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="bg-orange-500 w-full text-white"
                      type="submit"
                    >
                      {SpinnerLoading ? <Spinner color="default" /> : "Sign Up"}
                    </Button>
                  </ModalFooter>
                  <Divider className="my-4" />
                  <div className=" text-base flex items-center justify-center mb-0">
                    Don't have an account?
                    <span
                      className=" text-orange-600 font-semibold px-2"
                      onClick={() => setAuthModel("signup")}
                    >
                      Sign up
                    </span>
                  </div>
                </form>
              )}
              {authModel === "signup" && (
                <form onSubmit={handleSignUpSubmit}>
                  <ModalHeader className="flex justify-center gap-1 text-center text-2xl text-orange-600 dark:text-orange-400">
                    <span className=" text-gray-600">Welcome to</span> MOVIE
                    INFO+
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      label="Email"
                      type="email"
                      variant="bordered"
                      isInvalid={isInvalid.emailInvalid}
                      color={isInvalid.emailInvalid && "danger"}
                      errorMessage={
                        isInvalid.emailInvalid &&
                        "Email is already registered. Please use a different email."
                      }
                      ref={emailSignUpRef}
                    />

                    <Input
                      label="Password(at least 8 letters)"
                      type="password"
                      variant="bordered"
                      isInvalid={isInvalid.passwordInvalid}
                      color={isInvalid.passwordInvalid && "danger"}
                      errorMessage={
                        isInvalid.passwordInvalid &&
                        "Password must be at least 8 characters long."
                      }
                      ref={passwordSignUpRef}
                    />
                    <Input
                      label="Password Confirmation"
                      type="password"
                      variant="bordered"
                      isInvalid={isInvalid.passwordNotMatch}
                      color={isInvalid.passwordNotMatch && "danger"}
                      errorMessage={
                        isInvalid.passwordNotMatch &&
                        "Passwords do not match. Please try again."
                      }
                      ref={passwordConfirmSignUpRef}
                    />
                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                        classNames={{
                          label: "text-small",
                        }}
                        color="default"
                      >
                        Remember me
                      </Checkbox>
                      <Link color="foreground" size="sm">
                        Forgot password?
                      </Link>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="bg-orange-500 w-full text-white"
                      type="submit"
                    >
                      {SpinnerLoading ? <Spinner color="default" /> : "Sign Up"}
                    </Button>
                  </ModalFooter>
                  <Divider className="my-4" />
                  <div className=" text-base flex items-center justify-center mb-0">
                    Already have an account?
                    <span
                      className=" text-orange-600 font-semibold px-2"
                      onClick={() => setAuthModel("login")}
                    >
                      Log in
                    </span>
                  </div>
                </form>
              )}
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

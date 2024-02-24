import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { AuthContext } from "../store/AuthContext";
import Model from "./Model";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Account() {
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { logOutFn } = useContext(AuthContext);
  const handleLogOutFn = async () => {
    try {
      await logOutFn();
      toast("Log out successfully");
    } catch (error) {
      toast("fail to log out");
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center items-center pb-0 text-xl">
                Are you sure to <p>log out?</p>
              </ModalHeader>

              <ModalFooter className=" flex justify-center ">
                <Button
                  color="default"
                  size="md"
                  className="px-10"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="danger"
                  size="md"
                  className="px-10"
                  variant="flat"
                  onClick={handleLogOutFn}
                >
                  Log out
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <li className=" nav-item-icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </li>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>

          <DropdownItem key="favorite_movies">
            <Link to={"/movies/favorite"}>Favorite movies</Link>
          </DropdownItem>
          <DropdownItem key="favorite_tv">
            <Link to={"/tv/favorite"}>Favorite TV</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onPress={onOpen}>
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

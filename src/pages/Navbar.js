
import React, { useState, useEffect } from "react";
import { Navbar, Modal, Button, TextInput } from "flowbite-react";

export function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin from localStorage
    const adminLoggedIn = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminLoggedIn);
    setIsLoggedIn(adminLoggedIn);
  }, []);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true);
      setIsAdmin(true); // Set isAdmin to true for admin access
      setShowModal(false); // Close modal after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar fluid rounded className="">
        <Navbar.Brand href="#">
          <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Udgam</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Products
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          {isAdmin && (
            <Navbar.Link href="/admin">Admin</Navbar.Link>
          )}
          {!isLoggedIn && (
            <Navbar.Link href="#" onClick={handleLoginClick}>
              Login
            </Navbar.Link>
          )}
          {isLoggedIn && (
            <>
              <Navbar.Link href="/" onClick={handleLogout}>
                Logout
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showModal} size="xl" onClose={handleModalClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center">
            <div className="relative flex w-full max-w-screen-lg">
              <div className="bg-white w-full lg:max-w-md ml-0 lg:ml-10 lg:mt-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Login
                </h3>
                <TextInput
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full mb-4"
                />
                <TextInput
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleLogin}>Login</Button>
          <Button variant="link" onClick={handleModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

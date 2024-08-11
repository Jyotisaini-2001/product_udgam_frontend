
import { useState } from "react";
import { Modal, Button } from "flowbite-react";

export function CardComponent({ name, brand, category, description, price, image, onEdit }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const handleView = () => {
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  return (
    <>
      <div
        className="relative max-w-sm rounded-lg overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="rounded-b-lg h-56 md:h-64"
          src={image}
          alt={name}
        />
        <div className="p-2 md:p-4">
          <h2 className="text-lg font-bold text-gray-700 text-start leading-10">{name}</h2>
          <p className="text-sm text-gray-500 text-start leading-5">{description}</p>
          <div className="flex justify-between text-zinc-400 mt-2">
            <p className="text-sm font-semibold leading-6">{brand}</p>
            <p className="text-sm font-semibold leading-6">{category}</p>
            <p className="text-sm font-semibold leading-6">${price}</p>
          </div>
        </div>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            {isAdmin && (
            <Button color="light" className="mr-2" onClick={onEdit}>
              Edit
            </Button>
          )}
            <Button color="light" onClick={handleView}>
              View
            </Button>
          </div>
        )}
      </div>

      <Modal show={isViewModalOpen} size="xl" onClose={handleCloseViewModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="p-6">
            <img
              className="rounded-lg h-56 md:h-64 object-contain mx-auto mb-4"
              src={image}
              alt={name}
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">{name}</h2>
            <p className="text-lg text-gray-500 mb-4 text-center">{description}</p>
            <div className="flex justify-center text-zinc-400 mt-2">
              <p className="text-lg font-semibold leading-6 mx-2">{brand}</p>
              <p className="text-lg font-semibold leading-6 mx-2">{category}</p>
              <p className="text-lg font-semibold leading-6 mx-2">${price}</p>
            </div>
            <div className="flex justify-center mt-4">
              <Button color="light" onClick={handleCloseViewModal}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

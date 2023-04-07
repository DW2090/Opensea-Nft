import React from "react";
import Modal from "./Modal";
import { OpenSeaAsset } from "opensea-js/lib/types";

interface NFTDetailModalProps {
  nft: OpenSeaAsset;
  isOpen: boolean;
  onClose: () => void;
}

const NFTDetailModal: React.FC<NFTDetailModalProps> = ({
  nft,
  isOpen,
  onClose,
}) => {
  const handlePurchase = () => {
    window.open(nft.openseaLink, "_blank");
  };

  const showDescription = () => {
    console.log(nft.name)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{nft.name}</h3>
        <img
          className="w-full h-48 object-cover mt-4 mb-8"
          src={nft.imageUrl}
          alt={nft.name}
        />
        <p className="text-gray-700">{nft.description}</p>
        <p className="text-gray-700 mt-4">Owner Address: {nft.owner.address}</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePurchase}
          >
            Purchase on OpenSea
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NFTDetailModal;

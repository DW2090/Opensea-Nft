import { OpenSeaAsset } from "opensea-js/lib/types";
import { useState } from "react";
import NFTDetailModal from "./NftDetailModal";

const NftCard: React.FC<{ nft: OpenSeaAsset }> = ({ nft }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
  }

  return (
    <>
      <div
        key={nft.tokenId}
        className="bg-white rounded-lg overflow-hidden shadow-lg"
        onClick={() => showModal()}
      >
        <img
          src={nft.imagePreviewUrl}
          alt={nft.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-medium mb-2">{nft.name}</h2>
          <p className="text-gray-500">{nft.description}</p>
          <p className="mt-2 text-gray-700">
            {nft.lastSale
              ? `Last sold for ${nft.lastSale.totalPrice} ETH`
              : "Not yet sold"}
          </p>
        </div>
      </div>
      <NFTDetailModal isOpen={isOpen} onClose={closeModal} nft={nft} />
    </>
  );
};

export default NftCard;

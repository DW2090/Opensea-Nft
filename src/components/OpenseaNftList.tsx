import { OpenSeaPort, Network } from 'opensea-js';
import { OpenSeaAsset } from 'opensea-js/lib/types';
import { useEffect, useState } from 'react';
import NftCard from './NftCard';

interface OpenSeaNftGridProps {
  contractAddress: string;
}

const OpenSeaNftGrid: React.FC<OpenSeaNftGridProps> = ({ contractAddress }) => {
  const [nfts, setNfts] = useState<OpenSeaAsset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNfts = async () => {
      setIsLoading(true);
      //@ts-ignore
      const openSea = new OpenSeaPort(window.ethereum, {
        networkName: Network.Main,
        apiBaseUrl: 'https://api.opensea.io',
        apiKey: '<YOUR_API_KEY_HERE>',
      });
      try {
        const { assets } = await openSea.api.getAssets({
          asset_contract_address: contractAddress,
          order_by: 'token_id',
        });
        setNfts(assets);
      } catch (error) {
        console.error('Error fetching NFTs from OpenSea', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNfts();
  }, [contractAddress]);

  return (
    <div className="p-4">
      {isLoading ? (
        <p>Loading NFTs...</p>
      ) : nfts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {nfts.map((nft) => (
            <NftCard nft={nft} />
          ))}
        </div>
      ) : (
        <p>No NFTs found for contract address {contractAddress}.</p>
      )}
    </div>
  );
};

export default OpenSeaNftGrid;

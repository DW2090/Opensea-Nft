import { useState } from "react";
import OpenSeaNftGrid from "./components/OpenseaNftList";

function App() {
  const [contractAddress, setContractAddress] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContractAddress(event.target.value);
  };

  return (
    <div className="flex justify-center h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      <div className="mt-10">
        <label htmlFor="contract-address">Enter Contract Address:</label>
        <input
          id="contract-address"
          name="contract-address"
          type="text"
          value={contractAddress}
          onChange={handleInputChange}
          className="ml-[15px]"
        />
      </div>
      <OpenSeaNftGrid contractAddress={contractAddress} />
    </div>
  );
}

export default App;

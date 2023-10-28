import { ethers } from "ethers";
import { abi } from "@/contract/Vote_metadata.json";

const useEthers = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contractInfo = {
    address: "0xc1da607dcCb4A98A045E795594634432404bA51b",
    abi,
  };

  const accounts = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    contractInfo.address,
    contractInfo.abi,
    signer
  );

  return {
    ethers,
    contract,
    account: accounts[0],
  };
};

export default useEthers;

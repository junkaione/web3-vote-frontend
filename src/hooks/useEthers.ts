import { ethers } from "ethers";
import { abi } from "@/contract/Vote_metadata.json";

declare var window: any;

const useEthers = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contractInfo = {
    address: "0x5bB85117cCf0B989B6e7fcf8630ffdDC7603b38E",
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

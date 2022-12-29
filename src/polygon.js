import { POSClient,use } from '@maticnetwork/maticjs'
import { Web3ClientPlugin } from '@maticnetwork/maticjs-web3'
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";

// install web3 plugin
use(Web3ClientPlugin)
const posClient = new POSClient();

const getPolygonBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      console.log('Ethereum successfully detected!')
      
       const web3Provider = new Web3(window.ethereum);
       
        
       const from = accounts[0]
       const chainId = await web3Provider.eth.getChainId();
     const isParent = chainId === 5;
     const poly = await posClient.init({
      log: true,
      network: "testnet",
      version: 'mumbai',
      parent: {
          provider: web3Provider.currentProvider,
          defaultConfig: {
              from: from
          }
      },
      child: {
          provider: web3Provider.currentProvider,
          defaultConfig: {
              from: from
          }
      }
  });


  const balance2 = await web3Provider.eth.getBalance(accounts[0])


  alert(`your balance is ${balance2}`);
      // const signer = provider.getSigner();
      

      // resolve({simpleStorage, accounts, addresses, balance});
      
      resolve({balance2, poly, accounts });
      


      // const deployedNetwork = BUNDERWEAR.networks[networkId].address
      // const ABI = BUNDERWEAR.abi
      // const simpleStorage = new web3Provider.eth.Contract(
      //   ABI,
      //   deployedNetwork
      // )      const deployedNetwork = BUNDERWEAR.networks[networkId].address
      // const ABI = BUNDERWEAR.abi
      // const simpleStorage = new web3Provider.eth.Contract(
      //   ABI,
      //   deployedNetwork
      // )
    
      return;
    }else if(!provider) {
      alert('Install Metamask');
    }
    reject('Install Metamask');
  });

export default getPolygonBlockchain;
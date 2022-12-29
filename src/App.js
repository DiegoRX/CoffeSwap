import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import getPolygonBlockchain from './polygon.js';

import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form/index.js';
import { Context } from './context/Context';
import Swal from 'sweetalert2';

function App() {
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [txReceipt, setTxReceipt] = useState(undefined);
 
  const init = async () => {
    // const { simpleStorage, accounts, balance } = await getBlockchain();
    // setSimpleStorage(simpleStorage);

    // 
 
    // setBalance(balance)

    const { poly, balance2, accounts }= await getPolygonBlockchain()
    
    setData(accounts)
    alert(`your balance is ${balance2}`);
  };

  const rewardLiquidityProviders = async e => {
    e.preventDefault();

    const receipt = await simpleStorage.methods.rewardLiquidityProviders().send({
      from: data[0],
      gasLimit: 5,
      gas: 594867,
      to: '0x721b3F5ecb66096E6323dE712a8819Ce43A26dFa'
    })

    if (receipt.status === true) {

      Swal.fire(
        'LP rewarded successfully',
        '',
        'success'
      )
    }
  };
  const transfer = async e => {
    e.preventDefault();

    const recepient = '0x4621080FF83e0d2CcC87C9c0CfC5B5245177A99E'
    const amount = '1000000000000000000'
    const sender = data[0]

    const transfer = await simpleStorage.methods.transfer(recepient, amount)
      .send({
        gasLimit: 5,
        gas: 97024,
        from: sender
      })
  

    if (transfer.status === true) {
      setTxReceipt(transfer)
      console.log('redeemed')
    }
  
  };

  const test = async e => {  
      console.log('success!!!')
 

  }

  let dataContext = {
    simpleStorage,
    transfer,
    rewardLiquidityProviders,
    test,
    data,
    init,
    transfer,
    balance,
    txReceipt,
    setTxReceipt

  }

  if (
    typeof simpleStorage === 'undefined'
    // || typeof data === 'undefined'
  ) {
    <>

      <button >init</button>
    </>


  }

  return (
    <Context.Provider value={dataContext}>
      <BrowserRouter basename='/'>
        
          <Route exact strict path="/" render={() => <Main />} />      
          <Route exact strict path="/staking" render={() => <Main staking />} />
          <Route exact strict path="/success" render={() => <Form />} />
          <Route path='/mining' component={() => {
            window.location.href = 'https://unifty.io/bsc/farm-view.html?address=0x816A3ae3b90F30b5fB79f68a5C4d2e445381A513';
            return null;
          }} />
          <Route path='/buy' component={() => {
            window.location.href = 'https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x7acCa1BBA77bF389680EC9A3d24816FAbBA3E41b';
            return null;
          }} />
          <Route path='/contact' component={() => {
            window.location.href = 'https://contact@bunderwear.club';
            return null;
          }} />
          <Route path='/GetLPTokens' component={() => {
            window.location.href = 'https://v1exchange.pancakeswap.finance/#/add/BNB/0x7acCa1BBA77bF389680EC9A3d24816FAbBA3E41b';
            return null;
          }} />
          <Route exact strict path='/farms' render={() => <Main farms />} />
       
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
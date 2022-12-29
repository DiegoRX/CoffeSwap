import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../../context'
import { Header } from '../Body'
import bunderwear from '../../components/Gallery/genesis.png'
import NFT from '../../components/Gallery/genesisnftfinalhd.gif'
import ContactUs from '../../components/Form'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import {tokens} from '../../components/tokens/tokenList.json'

export default function Body({ totalSupply, reserveSOCKSToken, ready, balanceSOCKS }) {
  const [state] = useAppContext()
  const { txReceipt, transfer } = useContext(Context);
  return (
    <AppWrapper overlay={state.visible}>
      <Header />
      <ContainerCards>
        {tokens.map((token, i) => (
        <Content className="token" key={i}>
          <Background></Background>
          <Level>
              <ImgStyle1 src={`./src/components/Gallery/tokens/${token.name}.png`}/>
              <ImgStyle2 src={`./src/components/Gallery/tokens/Coffee Beans.png`}/>
          <h2>{token.lpSymbol}</h2>
          </Level>
         <Level>
          <p style={{fontSize:'16px'}}>APR:</p>
          <p style={{fontSize:'16px'}}>{token.apr}</p>
         </Level>
         <Level>
         <p style={{fontSize:'16px'}}>EARN:</p>
          <p style={{fontSize:'16px'}}>COFFEE</p>
         </Level>
         <Level>
         <p style={{fontSize:'24px'}}>Deposit Fee:</p>
          <p style={{fontSize:'24px'}}>#</p>
         </Level>
         
          <Level><p style={{fontSize:'16px'}}>COFFEE EARNED</p></Level>
          <Level style={{fontSize:'16px'}}>#<ActionButton>Harvest</ActionButton></Level>
         
        
          <Level><p style={{fontSize:'12px'}}>{token.lpSymbol} STAKED</p></Level>
          <div><ActionButton>Approve Contract</ActionButton></div>
         
         <hr></hr>
         <p>Details</p>
         <Level>
         <p>Total Liquidity:</p>
          <p>#</p>
          </Level>
          <Level>
          <Link to={{ pathname: token.url }} target="_blank">
            <p>View on PolygonScan</p>
          </Link>
         </Level>
        </Content>
      ))}  
      </ContainerCards>
      
    </AppWrapper>
  )
}

const ButtonFrame = styled(Button)`
  width: 100%;
`

const Footer = styled.p`
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  color: white;

  a {
    text-decoration: none;
    color: #fe6dde;
    margin-bottom: 1rem;
  }
`

const ImgStyle1 = styled.img`
  height: 50px;
  width: 50px;
  box-sizing: border-box;
  border-radius: 50%;  
  z-index: 1;
`
const ImgStyle2 = styled.img`
  height: 50px;
  width: 50px;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  left: 56px;
  top: 37px;
  z-index: 2;
`

const AppWrapper = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0px auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  //overflow: ${props => (props.overlay ? 'hidden' : 'scroll')};
  scroll-behavior: smooth;
  position: ${props => (props.overlay ? 'fixed' : 'initial')};
`
const ContainerCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top: 53px;

`
const Content = styled.div`
  width: calc(100vw - 32px);
  max-width: 340px;
  margin: 20px;
  background: #FFFFFF;
 

  display: flex;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 2rem;
  justify-content: space-around;
    padding: 24px;
    position: relative;
    text-align: center;
   
 
`
const Background = styled.div`
    background-size: 300% 300%;
    background: linear-gradient( 45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100% );linear-gradient( 45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100% ) !important;
    animation: Animation 2s linear infinite;
    filter: blur(6px);
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    border-radius: 16px;
    @-webkit-keyframes Animation {
    0%{background-position:50% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
    }
    @-moz-keyframes Animation {
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
    }
    @keyframes Animation { 
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
    }
`
const Content2 = styled.div`
  width: calc(100vw - 32px);
  max-width: 375px;
  margin-top: -5px;
  background: white;
  //background: linear-gradient(162.92deg, #2b2b2b 12.36%, #000000 94.75%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 2rem;
  
`

const Title = styled.h2`
  color: white;
  font-weight: 500;
  margin-left: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`
const Level = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin: 5px;
 h2{
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  color: #361B72;
 }
 p{
  margin:0px;
  text-align: left;
 }
`

const ActionButton = styled.button`
align-items: center;
background-color: #00D86C;
border: 0;
border-radius: 16px;
box-shadow: inset 0px -1px 0px rgb(14 14 44 / 40%);
color: #FFFFFF;
cursor: pointer;
display: -webkit-inline-box;
display: -webkit-inline-flex;
display: -ms-inline-flexbox;
display: inline-flex;
font-family: inherit;
font-size: 16px;
font-weight: 600;
width: 60%;
height: 48px;
line-height: 1;
justify-content: center;
`
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;gal
  font-weight: 400;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }
`
const Cards = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
`
const Box = styled.div`
  height: 50%;
  margin: 14px;
  border-radius: 25px;
  border: 2px solid #3c353c;
  display: inline-flex;
`
const Left = styled.div`
  width: 40%;
`
const Right = styled.div`
    width: 60%;
`
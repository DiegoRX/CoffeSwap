import React from 'react'
import Body from '../Body'
import Staking from '../Staking'
import Farms from '../Farms';

export default function Main({ staking, farms }) {

  return staking ? (
    <Staking />
  ) : farms ? (
    <Farms />
  ) :(
    <Body />
  )
}
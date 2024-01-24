"use client"
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HomeWrapper from '@/components/home/wrapper';
import OneProduct from '@/components/Product/oneProduct';
export default function page() {
  return (
    <HomeWrapper isProductDetailPage={true}>
        <OneProduct/>
    </HomeWrapper>
  )
}


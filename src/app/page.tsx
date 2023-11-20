import React from "react";
import Categories from '@/components/Categories'
import Image from 'next/image'
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div>
      <Categories/>
      <Blog/>  
    </div>
  )
}

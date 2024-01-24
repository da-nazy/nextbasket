import Image from "next/image";
import styles from "./page.module.css";
import HomeWrapper from "@/components/home/wrapper";
import { Box } from "@mui/material";
import HomeComp from "@/components/home";

export default function Home() {
  return (
     <HomeWrapper isProductDetailPage={false}>
      <HomeComp/>
     </HomeWrapper>
  );
}

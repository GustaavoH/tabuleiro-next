import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Linha.module.css"
import Linha from "../../components/linha";
import Tabuleiro from "../../components/Tabuleiro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tabuleiro />

    </div>
  );
}

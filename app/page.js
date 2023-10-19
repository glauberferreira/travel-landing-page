import styles from './page.module.css'
import Image from 'next/image'
import bali from '../public/bali.png'
import cyprus from '../public/cyprus.png'
import hawaii from '../public/hawaii.png'
import seta from '../public/arrow-right.svg'

function Botao({x, y}) {
  return (
    <button style={{left: x, top: y}} className={styles.botao}>Start</button>
  )
}

function Card({localidade, imagem}) {
  return(
    <div className={styles.card}>
        <p className={styles.localidade}>{localidade}</p>
        <Image src={seta}/>
        <Image src={imagem}/>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Botao x={135} y={601.72}/>
      <Card localidade="Hawaii" imagem={hawaii}/>
      <Card localidade="Cyprus" imagem={cyprus}/>
      <Card localidade="Bali" imagem={bali}/>
    </>
  )
}

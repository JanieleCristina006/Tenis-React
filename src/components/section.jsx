
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import jordan from '../assets/jordanM.png'

import { useState } from 'react'


const Section = () =>{


const [imagem,setImagem] = useState(jordan);


const imagem1 =()=>{
    setImagem(img1);
}

const imagem2 =()=>{
    setImagem(img2);
}

const imagem3 =()=>{
    setImagem(img3);
}

const imagem4 =()=>{
    setImagem(img4);
}

const imagem5 =()=>{
    setImagem(img5);
}

const imagem6 =()=>{
    setImagem(img6);
}

const imagem7 =()=>{
    setImagem(img7);
}

const imagem8 =()=>{
    setImagem(img8);
}


    return(
        <>
        <section>
            <h3>Destaques</h3>
            <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>

            <div className="descricao-produto">
            <img src={imagem} className='img-DP' />
            </div>
            
            <div className="container">

            <div className='container-img'>
                <img src={img1} alt="" />
                <button onClick={imagem1} >Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img2} alt="" />
                <button onClick={imagem2}>Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img3} alt="" />
                <button onClick={imagem3}>Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img4} className='img4' />
                <button onClick={imagem4}>Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img5} alt="" />
                <button onClick={imagem5}>Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img6} alt="" />
                <button onClick={imagem6}>Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img7} alt="" />
                <button onClick={imagem7}>Ver item</button>
            </div>

            <div className='container-img'>
                <img src={img8} alt="" />
                <button onClick={imagem8}>Ver item</button>
            </div>

            </div>
           
        </section>
        </>
    )
}

export default Section;
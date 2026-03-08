import Style from "../style/Home.module.css"

import { TbPawFilled } from "react-icons/tb";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";
import Image from "next/image";

export default function Home() {
  return (
    <main className={Style.container}>
      <section className={Style.contentContainer}>
        <article className={Style.content}>
          <div className={Style.chip}>
            <TbPawFilled aria-hidden="true"/>
            <h2>Everything your pet needs</h2>
          </div>

          <h1 className={Style.petHeading}>Spoil Your Furry Friends Today</h1>
          <p> 
            Discover premium pet supplies, nutritious food, fun toys, and cozy accessories. 
            Because your pets deserve nothing but the best.
          </p>

          <div className={Style.buttonContainer}>
            {/* change to link pag ok na */}
            <button className={`${Style.primaryBtn} btnShadow`}>Shop Now</button>
            <button className={`${Style.secondaryBtn} btnShadow`}>View Collections</button>
          </div>

          <div className={`${Style.buttonContainer} ${Style.space}`}>
            <span>
              <IoCarOutline aria-hidden="true"/>
              Free shipping over $50
            </span>
            <span>
              <MdOutlineVerifiedUser aria-hidden="true"/>
              Quality Guarantee
            </span>
          </div>
        </article>  

        {/* <div className={`${Style.content} ${Style.imgContent}`}> */}
          <figure className={`${Style.homeImage} imageShadow`}>  
            <Image 
              src="/asset/image/homePage.png" 
              alt="Happy pets enjoying premium supplies" 
              width={600} 
              height={400} 
              className={Style.image}
            />
          
            <figcaption className={`${Style.petCard} myShadow`}>
                <IoHeartCircleOutline  className={Style.icon}/>
                <p>
                  <strong>10,000+ Happy Pets</strong>
                  Trusted by pet owners
                </p>              
            </figcaption>
          </figure>
        {/* </div> */}

      </section>
    </main>

  );
}

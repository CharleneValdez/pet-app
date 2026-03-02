import Style from "../style/Home.module.css"

import { TbPawFilled } from "react-icons/tb";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function Home() {
  return (
    <div className={Style.container}>
      <div className={Style.contentContainer}>
        <div className={Style.content}>
          <div className={Style.chip}>
            <TbPawFilled aria-hidden="true"/>
            <h2>Everything your pet needs</h2>
          </div>

          <h1>Spoil Your Furry Friends Today</h1>
          <p> 
            Discover premium pet supplies, nutritious food, fun toys, and cozy accessories. 
            Because your pets deserve nothing but the best.
          </p>

          <div className={Style.buttonContainer}>
            {/* change to link pag ok na */}
            <button className={Style.primaryBtn}>Shop Now</button>
            <button className={Style.secondaryBtn}>View Collections</button>
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
        </div>  

        <div className={Style.content}>
          <div className={Style.chip}>
            <TbPawFilled />
            <p>Vet-approved essentials</p>
          </div>
        </div>   
      </div>
    </div>

  );
}

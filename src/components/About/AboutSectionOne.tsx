import Image from "next/image";

import img1 from "../../../public/images/ourClients/download (2).png";
import img2 from "../../../public/images/ourClients/1630645410547.jpeg";
import img3 from "../../../public/images/ourClients/Baker_Hughes_logo.svg.png";
import img4 from "../../../public/images/ourClients/CM20230927-6c8e3-3c4b9.jpeg";
import img5 from "../../../public/images/ourClients/H72e1f83674c74d1f81f32f32601738c8I.jpg";
import img6 from "../../../public/images/ourClients/MRPL_official_Logo.svg.png";
import img7 from "../../../public/images/ourClients/Saudi-Aramco-logo.png";
import img8 from "../../../public/images/ourClients/Schneider-Electric-Logo.jpg";
import img9 from "../../../public/images/ourClients/download (1).png";
import img10 from "../../../public/images/ourClients/images (3).png";
import img11 from "../../../public/images/ourClients/images (1).png";
import img12 from "../../../public/images/ourClients/images (2).png";
import img13 from "../../../public/images/ourClients/murugappa-group-logo.jpg";
import img14 from "../../../public/images/ourClients/transraillightingltd_logo.jpeg";
import img15 from "../../../public/images/ourClients/ul_systems_controls_india_pvt_ltd_logo.jpeg";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">

        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h1 className="font-semibold text-lg text-gray-600 text-center">
                    TRUSTED BY TEAMS FROM AROUND THE WORLD
                </h1>
                <hr />
                <div className="mt-6">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        <li className="flex-none">
                     
            <Image
    className="m-auto w-64 flex-none" 
    src={img1} 
    alt="Logo" 
  />
      
                        </li>

                        {/* LOGO 2 */}
                        <li className="flex-none">
                        <Image
    className="m-auto w-28 flex-none" 
    src={img2} 
    alt="Logo" 
  />
                        </li>

                        {/* LOGO 3 */}
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img3} 
    alt="Logo" 
  />
                        </li>

                        {/* LOGO 4 */}
                        <li className="flex-none">
                        <Image
    className="m-auto w-40 flex-none" 
    src={img4} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-28 flex-none" 
    src={img5} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-28 flex-none" 
    src={img6} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img7} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img8} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img9} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img10} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img11} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img12} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img13} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-64 flex-none" 
    src={img14} 
    alt="Logo" 
  />
                        </li>
                        <li className="flex-none">
                        <Image
    className="m-auto w-28 flex-none" 
    src={img15} 
    alt="Logo" 
  />
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    </section>
  );
};

export default AboutSectionOne;

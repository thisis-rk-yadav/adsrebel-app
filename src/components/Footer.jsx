import React from "react";
import ProudIndia from '../assets/images/optimized/ProudIndia.webp'
import OmIndia from '../assets/images/optimized/OmIndia.webp';
import Connect from './mini_components/Connect';

function Footer () {
    return(
        <>
            <div className="flex flex-col md:flex-row mx-4 my-4 justify-center flex-grow-1">
                <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start text-center md:text-left bg-skin-primary rounded-2xl p-6 box-border grow shrink basis-auto items-center md:my-5 md:ml-5 md:mr-2 md:w-5/7 mt-auto">
                    <div className="grow-0 shrink-0 basis-auto mr-2 mb-2 md:mb-0 items-baseline" >
                        <img className="w-[40px] md:w-[60px] rounded md:rounded-md" width='60px' height='40px' src={ProudIndia} alt="Proud India"/>
                    </div>
                    
                    <div className="grow-0 shrink-0 basis-auto mr-2  mb-2 md:mb-0 mx-2">
                        <img className="w-[40px] md:w-[60px] rounded md:rounded-md" width='60px' height='40px' src={OmIndia} alt="Indian History"/>
                    </div>

                    <div className="hidden md:block max-w-screen-md block ml-3 text-xs md:text-xs">
                        <div>
                            Mother India, AdsRebel salutes your brave sons and daughters who fought for our freedom.

                        </div>
                        <div>
                            We honor the storytellers, artists, and those who cared for this land before us. Their legacy inspires & lives on with us. 🇮🇳
                        </div>
                    </div>
                    <div className="md:hidden block max-w-screen-md block ml-3 text-xs md:text-xs">
                        <div>
                            Mother India, AdsRebel salutes your brave sons and daughters who fought for our freedom. We honor the storytellers, artists, and those who cared for this land before us. Their legacy inspires & lives on with us. 🇮🇳
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start text-left bg-skin-primary rounded-2xl py-3 md:p-5 box-border grow-0 shrink-0 basis-auto items-center md:my-5 md:ml-2 md:mr-5 md:w-2/7 my-5">
                    <Connect />
                </div>
                
            </div>
        </>
    );
}

export default Footer;
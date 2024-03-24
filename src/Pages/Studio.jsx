import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

function Studio () {
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="my-28 flex p-10 text-3xl md:text-6xl font-medium text-center">
                Digital advertising & web studio crafting powerful digital experiences that ignite global brand growth.
            </div>
            <div>
                <code className="px-10 flex flex-col text-center">
                    Code. Content. Conversions.
                </code>
            </div>
            <div className="md:mt-20">
                <Footer />
            </div>
        </>
    );
}

export default Studio;
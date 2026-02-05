import React from 'react'
import Card from "@/src/components/Card";

const Home = () => {

    return (
        <>
            {/*best items*/}
            <section className="w-full bg-[hsl(var(--background))]">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-8">
                    <h2 className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-xl">
                        Best of Air Max
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        <Card
                            badge="Best Seller"
                            title="Nike Air Force 1 Mid '07"
                            subtitle="Men's Shoes"
                            meta="6 Colour"
                            price={98.3}
                            currency="USD"
                            imageSrc="/shoes/shoe.png"
                            href="#"
                            priorityImage
                        />

                        <Card
                            badge="Extra 20% off"
                            title="Nike Court Vision Low Next Nature"
                            subtitle="Men's Shoes"
                            meta="4 Colour"
                            price={98.3}
                            currency="USD"
                            imageSrc="/shoes/shoe.png"
                            href="#"
                        />

                        <Card
                            badge="Extra 10% off"
                            title="Nike Dunk Low Retro"
                            subtitle="Men's Shoes"
                            meta="6 Colour"
                            price={98.3}
                            currency="USD"
                            imageSrc="/shoes/shoe.png"
                            href="#"
                        />

                    </div>
                </div>
            </section>
        </>
    )
}
export default Home

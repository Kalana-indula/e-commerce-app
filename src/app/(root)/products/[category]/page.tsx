import React from "react";
import ProductListHeader from "@/src/components/ProductListHeader";
import FilterSidebar from "@/src/components/FilterSidebar";

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
    const { category } = await params;

    return (
        <>
            {/* header */}
            <div>
                <ProductListHeader category={category}/>
            </div>

        {/*  body   */}
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 md:px-8">
                {/*filter menu*/}
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
                    <FilterSidebar/>
                </div>

                {/*products section*/}
                <div>

                </div>
            </div>
        </>
    );
};

export default Page;

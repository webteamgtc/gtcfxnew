import React from "react";
import Image from "next/image";

const AssetSection = ({ assetData, title }) => {
    return (
        <section className="bg-white py-10 md:py-14">
            <div className="container px-4">
                <div className="mb-8 text-center">
                    <h2 className="HeadingH2 mb-2 text-slate-900">{title}</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {assetData
                        ?.filter((x) => x?.name)
                        .map((asset, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 rounded-full border border-slate-200 bg-slate-100 px-5 py-4 shadow-sm"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                                    <div className="relative h-7 w-7">
                                        <Image
                                            src={asset.imageUrl}
                                            alt={asset.alt || asset.name}
                                            fill
                                            className="object-contain opacity-70 grayscale"
                                        />
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <p className="HeadingH5 text-slate-900">{asset.name}</p>
                                    {asset.description ? (
                                        <p className="TextSmall text-slate-600 line-clamp-2">
                                            {asset.description}
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default AssetSection;

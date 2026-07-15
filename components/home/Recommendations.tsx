"use client";
import { Template } from "@/data/Template";
import Image from "next/image";

interface Template {
  id: string;
  slug: string;
  name: string;
  category: string;
  price_usd: number | string;
  thumbnail_url: string;
}

export const Recommendations = () => {
const templates: Template[] = Template;

const columnsCount = templates.length > 0 ? Math.min(templates.length, 3) : 1;
  return (
    <section className="w-full relative z-20 flex flex-col border-t-[0.5px] border-solid border-x border-zinc-800/50">
      
      {/* Header Section */}
      <div className="px-6 md:px-12 pt-20 pb-12 text-left">
        <h2 className="text-3xl md:text-5xl font-sans font-normal tracking-tight text-zinc-100 mb-4">
          You may also like
        </h2>
        <p className="text-sm text-zinc-400 font-light">
          The discount code applies to these templates as well.
        </p>
      </div>

      <div className="w-full border-b-[0.5px] border-solid border-zinc-800/40" />

      <div 
        className="grid grid-cols-1 md:grid-cols-3 w-full bg-transparent">
        
        {templates.map((template, index) => {
            const isNotLastColumn = index < templates.length - 1;
            // Logika pembatas vertikal hanya aktif di desktop untuk kolom 1 dan 2
            const isNotLastInRow = (index + 1) % 3 !== 0; 

            return (
            <div 
                key={template.id}
                className={`relative bg-transparent group overflow-hidden
                border-b-[0.5px] border-solid border-zinc-800/40 hover:bg-gray-900/30
                ${isNotLastInRow && isNotLastColumn ? 'md:border-r-[0.5px]' : ''}
                `}>
                
                {/* Card */}
                <div className="w-full h-full p-6 sm:p-8 flex flex-col transition-transform duration-500 cursor-pointer z-10 relative">
                
                <div className="w-full h-auto bg-zinc-900/20 rounded-lg overflow-hidden ease-out group-hover:-translate-y-3 transition-all p-1 mb-6 aspect-16/10 relative">
                    <Image 
                    src={template.thumbnail_url} 
                    alt={template.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="rounded object-cover transition-transform duration-700"
                    />
                </div>

                <h3 className="text-xl md:text-[30px] font-sans font-normal text-zinc-200 mb-4 group-hover:text-white transition">
                    {template.name}
                </h3>

                <div className="flex items-center gap-2 text-[12px] tracking-widest text-zinc-500 font-medium uppercase mt-auto">
                    <span>{template.category}</span>
                    <span>•</span>
                    <span className="text-zinc-400">
                    {typeof template.price_usd === 'number' 
                        ? `$${template.price_usd} USD` 
                        : template.price_usd}
                    </span>
                </div>

                </div>

                <div className="absolute inset-0 bg-linear-to-t from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

            </div>
            );
        })}

        {templates.length > 0 && templates.length < 3 && (
          Array.from({ length: 3 - templates.length }).map((_, emptyIndex) => (
            <div 
              key={`empty-${emptyIndex}`} 
              className={`hidden md:block border-b-[0.5px] border-zinc-800/40
                ${emptyIndex + templates.length < 2 ? 'border-r-[0.5px]' : ''}
              `} 
            />
          ))
        )}

      </div>
      <div className="w-full border-b-[0.5px] border-solid border-zinc-800/40" />

    </section>
  );
}

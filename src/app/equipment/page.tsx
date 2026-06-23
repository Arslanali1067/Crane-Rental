"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight, ShieldCheck, Scale, ArrowUpCircle } from "lucide-react";

interface Crane {
  slug: string;
  name: string;
  capacity: number;
  image: string;
  specs: {
    maxLoad: string;
    boomLength: string;
    radius: string;
  };
}

const craneFleet: Crane[] = [
  {
    slug: "25-ton-mobile-crane",
    name: "25 Ton Mobile Crane",
    capacity: 25,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrosW_G-fpBhbHyjCuwVLM23EDvmLVuhkRVLXnKYGTH3OlNJlgL9tJQ9DXQqPOhAi1_PMrmZ_J9PyO4C_hin3AuC3OsuokKNfYqAZmPXHkI1QIRSUGc-4o-Hj59YE54LBsMJOUZ4fqoyjEE16T75AfYRt0nprgf4bxG7N0OQRr7bICZ8D0O2GOG3JZDDGR1J5OfnOCO5Bt-dY9KcaSohjav2ckMKGD01l5yz52f7Eo1y3yYAJaLADJl0xuv1cqnIaCDEiHKgID-ZKV",
    specs: { maxLoad: "25 t", boomLength: "31 m", radius: "30 m" },
  },
  {
    slug: "50-ton-mobile-crane",
    name: "50 Ton Mobile Crane",
    capacity: 50,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH5nhviBkswy-O0unxsDhh8_L22HnEi6IXqeJymrZkxjBRZvkD-DazfDc6koJqDC_WwY-PTRr45Hf7f2UWxXEhzvMAprgJXXD2bK8pI-3TDyK4BagBjT6kFIIlf31MP25_haf04ulcxZ-yv2AVrlvxdyW5kQq6E5LUOlMvt761sOB_k1VSlyGOHZa4Lp-MDHpzeT4ja_NfikO3VVrvX6VvjbVS0c0O6v4uy7gASQFuGv0buYvAs9s4u4VGnADO3aR5lHwgtjhPFu3_",
    specs: { maxLoad: "50 t", boomLength: "40 m", radius: "38 m" },
  },
  {
    slug: "100-ton-mobile-crane",
    name: "100 Ton Mobile Crane",
    capacity: 100,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsUl6X4jVO7MLJAWiQzGaaECfuK6gdOIWZ0ajiZcxOLDwIUm5Lrx6Zeu9wnsd8lM7-_PDQom2QfPNNC5f60-pxP1ZRNZ4MHMNTPXwoYogNeQpHeMWytGEPVniuyvlR59kJ_qdpHPrsX7JYvuZohgC4wGrsyPdV-vSl5son9OPnlSqD9hP4ZniJsI0kiyNXEdkYrgwL-y8RorLRVzpvQhM_zSbfYh0YDrdZCDkyGUz_Z4QT968AHnAxHxDHbFu7lb78IN43YucCqw_3",
    specs: { maxLoad: "100 t", boomLength: "52 m", radius: "48 m" },
  },
  {
    slug: "120-ton-mobile-crane",
    name: "120 Ton Mobile Crane",
    capacity: 120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVLkfWOsyHAobrjQPTe1ZiqPs4rCERdbOaolH3n6o7be__fHFawOmM5T6BaIvATpWAircsLAq10On0tuAAf5dmgmM5ltupy-iwi00QblDoQRPr47BuKS9bosAEduLaMED-qIuqOnEHJk1wIU-4uFsXFdYTypi3oSpawoxmwg_L6hPj8XYyJDVq4qXwHC9HTC2NoWx42lY9cGpNQFTIGc6rnKNiMn-WOAsnAECw8zvBjW5ZHu0XDFsjBrRDwBifaNJOsaxsNssRKyXb",
    specs: { maxLoad: "120 t", boomLength: "60 m", radius: "56 m" },
  },
  {
    slug: "160-ton-mobile-crane",
    name: "160 Ton Mobile Crane",
    capacity: 160,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAokAXE2kHFbLUduPOeVjcfdCAUMEu7-8EwH-Tn7QMvqZ30MJIrV9s-dK315P-sS5F1DVguIBsWjwe5JadSHeczGgnLlb_biwRy_b7bNTCHeBXZgOaW5Vn0RYpAsmtMoHvVdwgiSvlaCwHqJBNTpmRE6KxhEz6TZLqjVUhfBsiJ8Gv00YTm5FKiaWoGTekcmiEvKqbw_49x8R5ZWbqc4t19FZMaJ_Oeew6OdD8kS62hj9pH-nl6bFmdyqZvQSfNsmW7_hSMKPntH_rV",
    specs: { maxLoad: "160 t", boomLength: "62 m", radius: "58 m" },
  },
  {
    slug: "200-ton-mobile-crane",
    name: "200 Ton Mobile Crane",
    capacity: 200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYruOTigu_tlIKq_6AEQhqdv-026vJkK58ZKMw2U-OjoMN1f8Yebk7t6nThIx-7-zRpRUbe7iB9b-M6KBzn1fltfB8KYMNnlpHKNMHY0rwALK6RFHcfHTG5X85uYmoVfhOB5-m7hZk3z38nKAC_UIdIOjrl1bk1WUpWqxRNoqtxYIA-x2EQQPkQeHRSpfOUKUmjVjn2gm6eex-bieWhQyziuMBQuv4k8YcKVp2s_G-KVQwl1iWjvIq-8bYGs6weL9TgcddEtsW7_lQ",
    specs: { maxLoad: "200 t", boomLength: "72 m", radius: "68 m" },
  },
  {
    slug: "250-ton-mobile-crane",
    name: "250 Ton Mobile Crane",
    capacity: 250,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFSdFgEKBmOrYm1swWag2L3B_M3UJ_5-27vu_nCn4S17TS9RikvB4xUFTYSDTIT-wqjOmqc00CjtwWjQaDdNaUaYNEgFqNcDu59m7runblDwAayvmsn4TWOi0N-rQRb0pm_94ksBMOMnefythVzoxEcRW-0-wGV2dVcgoIdx0OJMLTjMH2AF_eADZTtBTy3q780pGutPTNIYDdDGhsTisPMBCd8R-H7XPiM82hCempfqnbL5vmBoGiuITD2q924hN6oF1lZlBUXT-e",
    specs: { maxLoad: "250 t", boomLength: "80 m", radius: "76 m" },
  },
  {
    slug: "350-ton-mobile-crane",
    name: "350 Ton Mobile Crane",
    capacity: 350,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9taf1XVvF-ttWDJbriLgqJ6HpKSCq00ZdvlbXWEzsG1_2_46jEBpjxTjS8sf2VTuGeu00gBDTmkUdPauH5MXRquznFymgdLjQ0v3ZEhihAvz8W2boBT-ezvB8x18j0Suqrj-k_GkP44dcxI2hDp88EzOMVQ0FvwRh3tV1q_zyn8WsB8NCHbF3ar_NkbkCUEObfHEdasVbWF2hi3-0L3M7BmYTXkwp_2DLrqKyE_Ejnewx75y2ZLLs5EvCbbI8FW7K_TgQKHYFgEqi",
    specs: { maxLoad: "350 t", boomLength: "84 m", radius: "80 m" },
  },
  {
    slug: "500-ton-mobile-crane",
    name: "500 Ton Mobile Crane",
    capacity: 500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhHxeW5BkDhOa0feabDo4xrc8Ij2HTdiFxM7XstsheIu152Afh4AssXOLNNmreiYUWVB2C4objFqambJcZ0csjk8YVBmTEfLgeHRzt4et-rmUB-U1Ya6xu1JAVrwoGaW5O_aTJ9pPjRG99sqlhFvphFLkVtaLp4zIbgodDwFy4K0WHnuGCHUn-qdB7C6r6Z9TfyY6txHcjz8Imy176SH0SJSgFvcfWTdHxF3s1GKB0QqVGhyBjTvg28zDO604Vgarvw3EJOyZ0Mou0",
    specs: { maxLoad: "500 t", boomLength: "100 m", radius: "96 m" },
  },
];

export default function EquipmentList() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredCranes = craneFleet.filter((crane) => {
    const matchesSearch = crane.name.toLowerCase().includes(search.toLowerCase());
    
    if (filterCategory === "all") return matchesSearch;
    if (filterCategory === "light") return matchesSearch && crane.capacity < 100;
    if (filterCategory === "medium") return matchesSearch && crane.capacity >= 100 && crane.capacity <= 200;
    if (filterCategory === "heavy") return matchesSearch && crane.capacity > 200;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen py-16 relative">
      <div className="absolute inset-0 industrial-grid opacity-[0.1] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Page Title & Intro */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block h-1 w-12 bg-primary mb-2"></div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
            Mobile Crane Fleet
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            Discover our extensive range of heavy-duty mobile cranes, engineered for precision, power, and safety in every lift. From urban projects to massive industrial sites across the UAE.
          </p>
        </div>

        {/* Filters Controls */}
        <div className="bg-surface-card border border-surface-border rounded-2xl p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: "all", label: "All Fleet" },
              { id: "light", label: "Light Duty (<100T)" },
              { id: "medium", label: "Medium Duty (100T - 200T)" },
              { id: "heavy", label: "Heavy Duty (250T+)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filterCategory === tab.id
                    ? "bg-primary text-black"
                    : "bg-surface-dark border border-surface-border text-text-secondary hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by crane capacity..."
              className="w-full bg-surface-dark border border-surface-border rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        {/* Fleet Grid */}
        {filteredCranes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCranes.map((crane) => (
              <Link
                key={crane.slug}
                href={`/equipment/${crane.slug}`}
                className="bg-surface-card hover:bg-surface-card-hover border border-surface-border hover:border-primary/20 rounded-2xl p-6.5 flex flex-col group transition-all duration-500 hover:-translate-y-1.5 shadow-xl justify-between"
              >
                {/* Crane Image */}
                <div className="w-full h-48 flex items-center justify-center mb-6 bg-gradient-to-b from-surface-dark/50 to-transparent rounded-xl overflow-hidden relative">
                  <img
                    src={crane.image}
                    alt={crane.name}
                    className="h-full object-contain filter drop-shadow-lg transform group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-surface-dark/80 border border-surface-border rounded-md px-2.5 py-1 text-[10px] text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    {crane.capacity} Ton
                  </div>
                </div>

                {/* Specs Divider & Info */}
                <div className="space-y-4">
                  <div className="border-t border-surface-border pt-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {crane.name}
                    </h3>
                    <p className="text-[10px] text-text-muted font-semibold uppercase tracking-widest mt-0.5">
                      Heavy Construction Vehicle
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-surface-dark/50 border border-surface-border rounded-xl p-3 text-center">
                    <div>
                      <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                        Max Capacity
                      </p>
                      <p className="text-xs font-bold text-white mt-1">{crane.specs.maxLoad}</p>
                    </div>
                    <div className="border-x border-surface-border/50">
                      <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                        Boom Length
                      </p>
                      <p className="text-xs font-bold text-white mt-1">{crane.specs.boomLength}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-text-muted uppercase font-bold tracking-wider">
                        Max Radius
                      </p>
                      <p className="text-xs font-bold text-white mt-1">{crane.specs.radius}</p>
                    </div>
                  </div>

                  {/* Call to action arrow */}
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary pt-2 group-hover:text-white transition-colors">
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-surface-card border border-surface-border rounded-2xl p-16 text-center shadow-xl max-w-xl mx-auto space-y-4">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto opacity-40" />
            <h3 className="text-lg font-bold text-white uppercase">No crane matches found</h3>
            <p className="text-sm text-text-secondary">
              Try adjusting your filters or search keywords to find the desired vehicle.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilterCategory("all");
              }}
              className="bg-primary text-black font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

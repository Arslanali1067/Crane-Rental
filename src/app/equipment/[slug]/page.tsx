"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Calendar, ArrowLeft, CheckCircle, Scale, Wrench, Shield, Compass } from "lucide-react";

interface CraneDetail {
  name: string;
  capacity: string;
  category: string;
  image: string;
  specs: {
    maxLoad: string;
    boomLength: string;
    hoistHeight: string;
    radius: string;
  };
  tableSpecs: {
    Chassis: string;
    Engine: string;
    "Drive Type": string;
    "Max Speed": string;
    "Number of Axles": string;
    "Operating Weight": string;
  };
  chartImage: string;
}

const craneFleetData: Record<string, CraneDetail> = {
  "25-ton-mobile-crane": {
    name: "25 Ton Mobile Crane",
    capacity: "25 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrosW_G-fpBhbHyjCuwVLM23EDvmLVuhkRVLXnKYGTH3OlNJlgL9tJQ9DXQqPOhAi1_PMrmZ_J9PyO4C_hin3AuC3OsuokKNfYqAZmPXHkI1QIRSUGc-4o-Hj59YE54LBsMJOUZ4fqoyjEE16T75AfYRt0nprgf4bxG7N0OQRr7bICZ8D0O2GOG3JZDDGR1J5OfnOCO5Bt-dY9KcaSohjav2ckMKGD01l5yz52f7Eo1y3yYAJaLADJl0xuv1cqnIaCDEiHKgID-ZKV",
    specs: {
      maxLoad: "25 t",
      boomLength: "31 m",
      hoistHeight: "31 m",
      radius: "30 m",
    },
    tableSpecs: {
      Chassis: "KATO Dedicated",
      Engine: "6-Cylinder Diesel",
      "Drive Type": "4 x 2 / 4 x 4",
      "Max Speed": "49 km/h",
      "Number of Axles": "2 Axles",
      "Operating Weight": "26,490 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaBXewuArpLk-DFhwcxMaOufRlGO7fzL3nWzY3G7mnGPPwmUfPs7-KsBD-bEi0Ul5tuHUTaa6FP15l10EANF9TWqYxVkipKp1DCApiibtKbv9TH-5VpAg3YbHPZAfp1xBSymu15tzE8DieQZ7e8k5FMdjBrCL1kA32xcmU0d9GYSYVlgAsYfYwTnS47fsQY9yJIcCYBuF2zDGeYWH3WyRtq_uKd7LIiPdBr1ZWTbCLI4baon83657xoCpOmVkswDtD6ZZljbxt4spJ",
  },
  "50-ton-mobile-crane": {
    name: "50 Ton Mobile Crane",
    capacity: "50 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH5nhviBkswy-O0unxsDhh8_L22HnEi6IXqeJymrZkxjBRZvkD-DazfDc6koJqDC_WwY-PTRr45Hf7f2UWxXEhzvMAprgJXXD2bK8pI-3TDyK4BagBjT6kFIIlf31MP25_haf04ulcxZ-yv2AVrlvxdyW5kQq6E5LUOlMvt761sOB_k1VSlyGOHZa4Lp-MDHpzeT4ja_NfikO3VVrvX6VvjbVS0c0O6v4uy7gASQFuGv0buYvAs9s4u4VGnADO3aR5lHwgtjhPFu3_",
    specs: {
      maxLoad: "50 t",
      boomLength: "40 m",
      hoistHeight: "40 m",
      radius: "38 m",
    },
    tableSpecs: {
      Chassis: "Tadano FAUN",
      Engine: "Mercedes-Benz Turbo Diesel",
      "Drive Type": "6 x 4 / 6 x 6",
      "Max Speed": "80 km/h",
      "Number of Axles": "3 Axles",
      "Operating Weight": "36,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH5nhviBkswy-O0unxsDhh8_L22HnEi6IXqeJymrZkxjBRZvkD-DazfDc6koJqDC_WwY-PTRr45Hf7f2UWxXEhzvMAprgJXXD2bK8pI-3TDyK4BagBjT6kFIIlf31MP25_haf04ulcxZ-yv2AVrlvxdyW5kQq6E5LUOlMvt761sOB_k1VSlyGOHZa4Lp-MDHpzeT4ja_NfikO3VVrvX6VvjbVS0c0O6v4uy7gASQFuGv0buYvAs9s4u4VGnADO3aR5lHwgtjhPFu3_",
  },
  "100-ton-mobile-crane": {
    name: "100 Ton Mobile Crane",
    capacity: "100 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsUl6X4jVO7MLJAWiQzGaaECfuK6gdOIWZ0ajiZcxOLDwIUm5Lrx6Zeu9wnsd8lM7-_PDQom2QfPNNC5f60-pxP1ZRNZ4MHMNTPXwoYogNeQpHeMWytGEPVniuyvlR59kJ_qdpHPrsX7JYvuZohgC4wGrsyPdV-vSl5son9OPnlSqD9hP4ZniJsI0kiyNXEdkYrgwL-y8RorLRVzpvQhM_zSbfYh0YDrdZCDkyGUz_Z4QT968AHnAxHxDHbFu7lb78IN43YucCqw_3",
    specs: {
      maxLoad: "100 t",
      boomLength: "52 m",
      hoistHeight: "52 m",
      radius: "48 m",
    },
    tableSpecs: {
      Chassis: "Liebherr All-Terrain",
      Engine: "Liebherr 6-Cylinder Diesel",
      "Drive Type": "8 x 6 / 8 x 8",
      "Max Speed": "85 km/h",
      "Number of Axles": "4 Axles",
      "Operating Weight": "60,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsUl6X4jVO7MLJAWiQzGaaECfuK6gdOIWZ0ajiZcxOLDwIUm5Lrx6Zeu9wnsd8lM7-_PDQom2QfPNNC5f60-pxP1ZRNZ4MHMNTPXwoYogNeQpHeMWytGEPVniuyvlR59kJ_qdpHPrsX7JYvuZohgC4wGrsyPdV-vSl5son9OPnlSqD9hP4ZniJsI0kiyNXEdkYrgwL-y8RorLRVzpvQhM_zSbfYh0YDrdZCDkyGUz_Z4QT968AHnAxHxDHbFu7lb78IN43YucCqw_3",
  },
  "120-ton-mobile-crane": {
    name: "120 Ton Mobile Crane",
    capacity: "120 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVLkfWOsyHAobrjQPTe1ZiqPs4rCERdbOaolH3n6o7be__fHFawOmM5T6BaIvATpWAircsLAq10On0tuAAf5dmgmM5ltupy-iwi00QblDoQRPr47BuKS9bosAEduLaMED-qIuqOnEHJk1wIU-4uFsXFdYTypi3oSpawoxmwg_L6hPj8XYyJDVq4qXwHC9HTC2NoWx42lY9cGpNQFTIGc6rnKNiMn-WOAsnAECw8zvBjW5ZHu0XDFsjBrRDwBifaNJOsaxsNssRKyXb",
    specs: {
      maxLoad: "120 t",
      boomLength: "60 m",
      hoistHeight: "60 m",
      radius: "56 m",
    },
    tableSpecs: {
      Chassis: "Demag Carrier",
      Engine: "Scania Diesel 450HP",
      "Drive Type": "10 x 6 / 10 x 8",
      "Max Speed": "85 km/h",
      "Number of Axles": "5 Axles",
      "Operating Weight": "72,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVLkfWOsyHAobrjQPTe1ZiqPs4rCERdbOaolH3n6o7be__fHFawOmM5T6BaIvATpWAircsLAq10On0tuAAf5dmgmM5ltupy-iwi00QblDoQRPr47BuKS9bosAEduLaMED-qIuqOnEHJk1wIU-4uFsXFdYTypi3oSpawoxmwg_L6hPj8XYyJDVq4qXwHC9HTC2NoWx42lY9cGpNQFTIGc6rnKNiMn-WOAsnAECw8zvBjW5ZHu0XDFsjBrRDwBifaNJOsaxsNssRKyXb",
  },
  "160-ton-mobile-crane": {
    name: "160 Ton Mobile Crane",
    capacity: "160 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAokAXE2kHFbLUduPOeVjcfdCAUMEu7-8EwH-Tn7QMvqZ30MJIrV9s-dK315P-sS5F1DVguIBsWjwe5JadSHeczGgnLlb_biwRy_b7bNTCHeBXZgOaW5Vn0RYpAsmtMoHvVdwgiSvlaCwHqJBNTpmRE6KxhEz6TZLqjVUhfBsiJ8Gv00YTm5FKiaWoGTekcmiEvKqbw_49x8R5ZWbqc4t19FZMaJ_Oeew6OdD8kS62hj9pH-nl6bFmdyqZvQSfNsmW7_hSMKPntH_rV",
    specs: {
      maxLoad: "160 t",
      boomLength: "62 m",
      hoistHeight: "62 m",
      radius: "58 m",
    },
    tableSpecs: {
      Chassis: "Grove Heavy Carrier",
      Engine: "Cummins QSX15",
      "Drive Type": "10 x 8 x 10",
      "Max Speed": "85 km/h",
      "Number of Axles": "5 Axles",
      "Operating Weight": "96,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAokAXE2kHFbLUduPOeVjcfdCAUMEu7-8EwH-Tn7QMvqZ30MJIrV9s-dK315P-sS5F1DVguIBsWjwe5JadSHeczGgnLlb_biwRy_b7bNTCHeBXZgOaW5Vn0RYpAsmtMoHvVdwgiSvlaCwHqJBNTpmRE6KxhEz6TZLqjVUhfBsiJ8Gv00YTm5FKiaWoGTekcmiEvKqbw_49x8R5ZWbqc4t19FZMaJ_Oeew6OdD8kS62hj9pH-nl6bFmdyqZvQSfNsmW7_hSMKPntH_rV",
  },
  "200-ton-mobile-crane": {
    name: "200 Ton Mobile Crane",
    capacity: "200 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYruOTigu_tlIKq_6AEQhqdv-026vJkK58ZKMw2U-OjoMN1f8Yebk7t6nThIx-7-zRpRUbe7iB9b-M6KBzn1fltfB8KYMNnlpHKNMHY0rwALK6RFHcfHTG5X85uYmoVfhOB5-m7hZk3z38nKAC_UIdIOjrl1bk1WUpWqxRNoqtxYIA-x2EQQPkQeHRSpfOUKUmjVjn2gm6eex-bieWhQyziuMBQuv4k8YcKVp2s_G-KVQwl1iWjvIq-8bYGs6weL9TgcddEtsW7_lQ",
    specs: {
      maxLoad: "200 t",
      boomLength: "72 m",
      hoistHeight: "72 m",
      radius: "68 m",
    },
    tableSpecs: {
      Chassis: "Liebherr LTM 1200",
      Engine: "Liebherr 6-Cylinder Turbo 544HP",
      "Drive Type": "10 x 8 x 10",
      "Max Speed": "80 km/h",
      "Number of Axles": "5 Axles",
      "Operating Weight": "120,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYruOTigu_tlIKq_6AEQhqdv-026vJkK58ZKMw2U-OjoMN1f8Yebk7t6nThIx-7-zRpRUbe7iB9b-M6KBzn1fltfB8KYMNnlpHKNMHY0rwALK6RFHcfHTG5X85uYmoVfhOB5-m7hZk3z38nKAC_UIdIOjrl1bk1WUpWqxRNoqtxYIA-x2EQQPkQeHRSpfOUKUmjVjn2gm6eex-bieWhQyziuMBQuv4k8YcKVp2s_G-KVQwl1iWjvIq-8bYGs6weL9TgcddEtsW7_lQ",
  },
  "250-ton-mobile-crane": {
    name: "250 Ton Mobile Crane",
    capacity: "250 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFSdFgEKBmOrYm1swWag2L3B_M3UJ_5-27vu_nCn4S17TS9RikvB4xUFTYSDTIT-wqjOmqc00CjtwWjQaDdNaUaYNEgFqNcDu59m7runblDwAayvmsn4TWOi0N-rQRb0pm_94ksBMOMnefythVzoxEcRW-0-wGV2dVcgoIdx0OJMLTjMH2AF_eADZTtBTy3q780pGutPTNIYDdDGhsTisPMBCd8R-H7XPiM82hCempfqnbL5vmBoGiuITD2q924hN6oF1lZlBUXT-e",
    specs: {
      maxLoad: "250 t",
      boomLength: "80 m",
      hoistHeight: "80 m",
      radius: "76 m",
    },
    tableSpecs: {
      Chassis: "Tadano ATF 220G",
      Engine: "Mercedes OM 502 LA",
      "Drive Type": "10 x 8 x 10",
      "Max Speed": "85 km/h",
      "Number of Axles": "5 Axles",
      "Operating Weight": "130,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFSdFgEKBmOrYm1swWag2L3B_M3UJ_5-27vu_nCn4S17TS9RikvB4xUFTYSDTIT-wqjOmqc00CjtwWjQaDdNaUaYNEgFqNcDu59m7runblDwAayvmsn4TWOi0N-rQRb0pm_94ksBMOMnefythVzoxEcRW-0-wGV2dVcgoIdx0OJMLTjMH2AF_eADZTtBTy3q780pGutPTNIYDdDGhsTisPMBCd8R-H7XPiM82hCempfqnbL5vmBoGiuITD2q924hN6oF1lZlBUXT-e",
  },
  "350-ton-mobile-crane": {
    name: "350 Ton Mobile Crane",
    capacity: "350 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9taf1XVvF-ttWDJbriLgqJ6HpKSCq00ZdvlbXWEzsG1_2_46jEBpjxTjS8sf2VTuGeu00gBDTmkUdPauH5MXRquznFymgdLjQ0v3ZEhihAvz8W2boBT-ezvB8x18j0Suqrj-k_GkP44dcxI2hDp88EzOMVQ0FvwRh3tV1q_zyn8WsB8NCHbF3ar_NkbkCUEObfHEdasVbWF2hi3-0L3M7BmYTXkwp_2DLrqKyE_Ejnewx75y2ZLLs5EvCbbI8FW7K_TgQKHYFgEqi",
    specs: {
      maxLoad: "350 t",
      boomLength: "84 m",
      hoistHeight: "84 m",
      radius: "80 m",
    },
    tableSpecs: {
      Chassis: "Demag AC 350",
      Engine: "DaimlerChrysler OM 502 LA",
      "Drive Type": "12 x 8 x 10",
      "Max Speed": "85 km/h",
      "Number of Axles": "6 Axles",
      "Operating Weight": "150,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9taf1XVvF-ttWDJbriLgqJ6HpKSCq00ZdvlbXWEzsG1_2_46jEBpjxTjS8sf2VTuGeu00gBDTmkUdPauH5MXRquznFymgdLjQ0v3ZEhihAvz8W2boBT-ezvB8x18j0Suqrj-k_GkP44dcxI2hDp88EzOMVQ0FvwRh3tV1q_zyn8WsB8NCHbF3ar_NkbkCUEObfHEdasVbWF2hi3-0L3M7BmYTXkwp_2DLrqKyE_Ejnewx75y2ZLLs5EvCbbI8FW7K_TgQKHYFgEqi",
  },
  "500-ton-mobile-crane": {
    name: "500 Ton Mobile Crane",
    capacity: "500 t",
    category: "Mobile Crane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhHxeW5BkDhOa0feabDo4xrc8Ij2HTdiFxM7XstsheIu152Afh4AssXOLNNmreiYUWVB2C4objFqambJcZ0csjk8YVBmTEfLgeHRzt4et-rmUB-U1Ya6xu1JAVrwoGaW5O_aTJ9pPjRG99sqlhFvphFLkVtaLp4zIbgodDwFy4K0WHnuGCHUn-qdB7C6r6Z9TfyY6txHcjz8Imy176SH0SJSgFvcfWTdHxF3s1GKB0QqVGhyBjTvg28zDO604Vgarvw3EJOyZ0Mou0",
    specs: {
      maxLoad: "500 t",
      boomLength: "100 m",
      hoistHeight: "100 m",
      radius: "96 m",
    },
    tableSpecs: {
      Chassis: "Liebherr LTM 1500-8.1",
      Engine: "Liebherr 8-Cylinder Turbo 612HP",
      "Drive Type": "16 x 8 x 12",
      "Max Speed": "80 km/h",
      "Number of Axles": "8 Axles",
      "Operating Weight": "240,000 kg",
    },
    chartImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhHxeW5BkDhOa0feabDo4xrc8Ij2HTdiFxM7XstsheIu152Afh4AssXOLNNmreiYUWVB2C4objFqambJcZ0csjk8YVBmTEfLgeHRzt4et-rmUB-U1Ya6xu1JAVrwoGaW5O_aTJ9pPjRG99sqlhFvphFLkVtaLp4zIbgodDwFy4K0WHnuGCHUn-qdB7C6r6Z9TfyY6txHcjz8Imy176SH0SJSgFvcfWTdHxF3s1GKB0QqVGhyBjTvg28zDO604Vgarvw3EJOyZ0Mou0",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function VehicleDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const crane = craneFleetData[resolvedParams.slug];
  const [activeTab, setActiveTab] = useState<"spec" | "range">("spec");

  if (!crane) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 relative">
      <div className="absolute inset-0 industrial-grid opacity-[0.08] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Back Link */}
        <Link
          href="/equipment"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Equipment List
        </Link>

        {/* Hero Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Crane Image */}
          <div className="lg:col-span-6 relative flex justify-center bg-gradient-to-b from-surface-card to-transparent border border-surface-border rounded-3xl p-8 shadow-2xl">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-50 pointer-events-none"></div>
            <img
              src={crane.image}
              alt={crane.name}
              className="w-full h-auto object-contain max-h-[400px] filter drop-shadow-2xl"
            />
          </div>

          {/* Core Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                // {crane.category.toUpperCase()} CATALOG
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight mt-2">
                {crane.name}
              </h1>
            </div>

            {/* Quick Spec Pills */}
            <div className="grid grid-cols-2 gap-6 border-l-2 border-primary pl-6 py-2">
              <div className="space-y-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">
                  Max Load Capacity
                </span>
                <span className="text-2xl font-display font-extrabold text-white flex items-center gap-1.5">
                  <Scale className="w-5 h-5 text-primary" />
                  {crane.specs.maxLoad}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">
                  Telescopic Boom
                </span>
                <span className="text-2xl font-display font-extrabold text-white flex items-center gap-1.5">
                  <Wrench className="w-5 h-5 text-primary" />
                  {crane.specs.boomLength}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">
                  Max Hoist Height
                </span>
                <span className="text-2xl font-display font-extrabold text-white flex items-center gap-1.5">
                  <Shield className="w-5 h-5 text-primary" />
                  {crane.specs.hoistHeight}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">
                  Working Radius
                </span>
                <span className="text-2xl font-display font-extrabold text-white flex items-center gap-1.5">
                  <Compass className="w-5 h-5 text-primary" />
                  {crane.specs.radius}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:0506786553"
                className="bg-primary text-black hover:bg-white px-8 py-4.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-white/5 flex items-center gap-2.5 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href="/#inquiry"
                className="bg-surface-card hover:bg-surface-card-hover border border-surface-border hover:border-primary/20 text-white px-8 py-4.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-primary" />
                Instant Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <section className="mb-24">
          <div className="flex gap-8 border-b border-surface-border mb-8">
            <button
              onClick={() => setActiveTab("spec")}
              className={`py-4 text-base md:text-lg font-display font-bold uppercase tracking-wider transition-all duration-300 border-b-2 outline-none ${
                activeTab === "spec"
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-white"
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("range")}
              className={`py-4 text-base md:text-lg font-display font-bold uppercase tracking-wider transition-all duration-300 border-b-2 outline-none ${
                activeTab === "range"
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-white"
              }`}
            >
              Working Range Chart
            </button>
          </div>

          {/* Specification Table */}
          {activeTab === "spec" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(crane.tableSpecs).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-surface-card border border-surface-border rounded-xl p-5 flex justify-between items-center group hover:bg-surface-card-hover hover:border-primary/10 transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-text-secondary">{key}</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Working Range Chart */}
          {activeTab === "range" && (
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 md:p-12 flex flex-col items-center">
              <div className="text-center mb-8 max-w-2xl">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                  Performance Radius Chart
                </h3>
                <p className="text-sm text-text-secondary">
                  Diagram illustrating the height and working radius capabilities across various boom configurations for the {crane.name}.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl max-w-2xl w-full border border-surface-border overflow-hidden">
                <img
                  src={crane.chartImage}
                  alt={`${crane.name} working range chart`}
                  className="w-full h-auto object-contain mx-auto transition-transform duration-700 hover:scale-[1.02] cursor-zoom-in"
                />
              </div>

              <div className="mt-8 flex gap-3 p-4 bg-surface-dark border-l-4 border-primary rounded-r-lg max-w-2xl text-xs text-text-secondary italic leading-relaxed">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>
                  Disclaimer: Performance values are approximate, subject to configuration, counterweight, and soil compaction. Consult a certified Alwafi lifting specialist for exact lifting designs.
                </span>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

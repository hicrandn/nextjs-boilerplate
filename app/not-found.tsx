"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import FuzzyText from "@/components/uı/Fuzzy";



export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <div className="h-32 flex items-center justify-center">
          <FuzzyText 
            fontSize="clamp(4rem, 15vw, 12rem)"
            color="#ec4899"
            baseIntensity={0.15}
            hoverIntensity={0.3}
          >
            404
          </FuzzyText>
        </div>
        <h2 className="text-2xl font-semibold text-gray">Sayfa Bulunamadı</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-500 transition-colors"
        >
          <Home size={20} />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}


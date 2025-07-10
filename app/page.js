'use client';

import { useState } from 'react';
import { Page } from './components/Page';
import { Info } from './components/Info';

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0);

    const pages = [
        <div className="flex items-center gap-10" key="intro">
        <Page>
            <div className="text-center">
            <h1 className="font-semibold underline">PORTFOLIO</h1><br />
            <h1>Written by</h1><br />
            <h1 className="font-semibold">Justin Ho</h1><br />
            </div>
        </Page>
        <Info>
            <p>
            Hobbyist screenwriter and novelist, turned
            <span className="font-semibold underline"> Fullstack Developer</span>
            </p>
        </Info>
        </div>,

        <Page key="project1">
        <div className="w-full">
            <h1 className="font-semibold underline">PROJECT</h1><br />
            <div className="mb-10">
            <h1 className="font-semibold">Plot-tool.com</h1>
            <p className="text-lg">
                Web–based application for making novel and screenplay outlines, built with Next.js, Firebase, and Stripe.
            </p>
            </div>
        </div>
        </Page>,

        <Page key="project2">
        <div className="mb-10">
            <h1 className="font-semibold">AI-Powered Screenplay Editor - github.com/justinreidh/screenwriter</h1>
            <p className="text-lg">
            Full-stack word editor built using Next.js, Node.js, Express, a PostgreSQL Database, and integrating the OpenAI API
            </p>
        </div>
        </Page>,

        <Page key="project3">
        <div className="mb-10">
            <h1 className="font-semibold">Credit Card Fraud Detection - github.com/justinreidh/Fraud-Detection-with-XGBoost</h1>
            <p className="text-lg">
            Machine-learning pipeline to detect credit card fraud using Python, XGBoost, SMOTE, and RandomizedSearchCV
            </p>
        </div>
        </Page>,

        <Page key="contact">
        <div className="w-full">
            <h1 className="font-semibold underline">CONTACT</h1><br />
            <div className="mb-10 w-full">
            <h1 className="font-semibold">ho.justinr@gmail.com</h1><br />
            <p className="text-lg">720-270-3220</p>
            </div>
        </div>
        </Page>
    ];

    const handleNext = () => {
        setPageIndex((prev) => (prev + 1) % pages.length);
    };

    const handlePrev = () => {
        setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
    };

    return (
        <div className="text-gray-800 min-h-dvh p-10 flex flex-col items-center justify-center relative bg-gradient-to-b from-neutral-100 to-neutral-50">
        
            <div className="relative w-full flex items-center justify-center">
                

                <div className="transition-all duration-500 ease-in-out">
                {pages[pageIndex]}
                </div>

                
            </div>

            <div className="mt-5 flex gap-2 justify-center items-center">
                <button
                    onClick={handlePrev}
                    className="text-4xl  text-gray-500 hover:text-black transition"
                >
                    ‹
                </button>

                {pages.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setPageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300
                        ${index === pageIndex ? 'bg-gray-800 scale-125' : 'bg-gray-400 hover:bg-gray-600'}
                    `}
                    aria-label={`Go to page ${index + 1}`}
                    />
                ))}

                <button
                    onClick={handleNext}
                    className="text-4xl  text-gray-500 hover:text-black transition"
                >
                    ›
                </button>
            </div>
        </div>
    );
}

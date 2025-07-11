'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from './components/Page';

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const pages = [
        <Page key="intro">
            <div className="text-center">
                <h1 className="font-semibold underline">PORTFOLIO</h1><br />
                <h1>Written by</h1><br />
                <h1 className="font-semibold">Justin Ho</h1><br />
            </div>
        </Page>,
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
        </Page>,
    ];

    const handleNext = () => {
        setDirection(1);
        setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
    };

    const handlePrev = () => {
        setDirection(-1);
        setPageIndex((prev) => Math.max(prev - 1, 0));
    };

    const variants = {
        initial: (direction) => ({
            y: direction > 0 ? -50 : 50,
            opacity: 0,
            zIndex: 10,
        }),
        animate: {
            y: 0,
            opacity: 1,
            zIndex: 10,
        },
        exit: (direction) => ({
            y: direction > 0 ? 50 : -50,
            opacity: 0,
            zIndex: 10,
        }),
    };

    return (
        <div className="text-gray-800 min-h-dvh p-10 flex flex-col items-center justify-center relative bg-gradient-to-b from-neutral-100 to-neutral-50">
            <div className="relative w-full max-w-[60ch] h-[80ch]">
                <AnimatePresence initial={false} mode="wait">
                    {pages.slice(0, pageIndex + 1).map((page, index) => (
                        <motion.div
                            key={page.key}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            custom={direction}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                                duration: 0.3,
                            }}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ zIndex: index === pageIndex ? 10 : 5 - index }}
                        >
                            {page}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-5 flex gap-2 justify-center items-center">
                <button
                    onClick={handlePrev}
                    className="text-4xl text-gray-500 hover:text-black transition disabled:opacity-50"
                    disabled={pageIndex === 0}
                >
                    ‹
                </button>
                {pages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > pageIndex ? 1 : -1);
                            setPageIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300
                            ${index === pageIndex ? 'bg-gray-800 scale-125' : 'bg-gray-400 hover:bg-gray-600'}
                        `}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
                <button
                    onClick={handleNext}
                    className="text-4xl text-gray-500 hover:text-black transition disabled:opacity-50"
                    disabled={pageIndex === pages.length - 1}
                >
                    ›
                </button>
            </div>
        </div>
    );
}
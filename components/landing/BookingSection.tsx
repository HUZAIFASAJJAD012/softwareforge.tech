'use client';
import { motion } from 'framer-motion';

export default function BookingSection() {
    return (
        <section id="booking" className="w-full py-24 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-4">
                        Book a Consultation
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Schedule a 15-minute meeting with our founder to discuss your project ideas and how we can help bring them to life.
                    </p>
                </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(242, 92, 77, 0.1) 0%, transparent 70%)',
                        }}
                    />
                    <div className="relative z-10 p-4 md:p-8">
                        <iframe 
                            src="https://cal.com/fahad-khan-3t33rf/15min"
                            width="100%"
                            height="700"
                            frameBorder="0"
                            className="rounded-2xl"
                            style={{
                                minHeight: '700px',
                                background: '#0d0d0d',
                                borderRadius: '16px',
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

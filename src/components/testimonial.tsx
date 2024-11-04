/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
};

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Working with this Man has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence have propelled us to new heights.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, DataDrive",
      image: "https://i.pravatar.cc/150?img=2",
      text: "The level of expertise and professionalism displayed by this company is unparalleled. They've consistently delivered beyond our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandBoost",
      image: "https://i.pravatar.cc/150?img=3",
      text: "I've never worked with a more responsive and creative man. He is truly understand our vision and bring it to life in ways we never imagined possible.",
      rating: 4,
    },
    {
      name: "David Patel",
      role: "Founder, StartUp Surge",
      image: "https://i.pravatar.cc/150?img=4",
      text: "From concept to execution, their attention to detail and commitment to quality is evident in every aspect of their work. A truly outstanding partner.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager, EfficientFlow",
      image: "https://i.pravatar.cc/150?img=5",
      text: "The solutions provided have streamlined our operations significantly. Their impact on our efficiency and bottom line has been nothing short of remarkable.",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <section className="flex justify-center items-center mt-16 w-full py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Client Testimonials</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          onSelect={(index) => setCurrentIndex(index as unknown as number)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className={cn(
                      "h-full transition-all duration-300 ease-in-out bg-gradient-to-br from-primary/5 to-primary/10 border-none shadow-lg",
                      currentIndex === index ? "scale-105" : "scale-95 opacity-50"
                    )}>
                      <CardContent className="flex flex-col items-center p-8 h-full">
                        <div className="relative w-24 h-24 mb-6">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full border-2 border-primary shadow-md"
                          />
                        </div>
                        <h3 className="font-bold text-xl text-primary mb-1">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-5 h-5",
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                        <p className="text-center text-sm italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentIndex === index ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

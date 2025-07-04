import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Cog, Download, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
const steps = [
{
icon: Upload,
title: "Upload Your Dataset",
description: "Simply upload your raw data files in any format - CSV, JSON, images, or text documents. Our system supports datasets up to 100GB.",
number: "01"
},
{
icon: Cog,
title: "AI Analysis & Processing",
description: "Our advanced AI algorithms analyze your data, detect patterns, identify noise, and apply intelligent cleaning rules tailored to your dataset type.",
number: "02"
},
{
icon: CheckCircle,
title: "Review & Customize",
description: "Preview the cleaning results, adjust parameters, and customize filtering rules to match your specific requirements and quality standards.",
number: "03"
},
{
icon: Download,
title: "Export Clean Data",
description: "Download your preprocessed, standardized dataset ready for training. Get detailed reports on what was cleaned and why.",
number: "04"
}
];

return (
<section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
{/* Background Pattern */}
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
</div>

<div className="container mx-auto px-6 relative">  
    {/* Section Header */}  
    <div className="text-center mb-16">  
      <h2 className="text-4xl md:text-5xl font-bold mb-6">  
        How It Works  
      </h2>  
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">  
        Get from messy data to ML-ready datasets in just four simple steps.   
        Our AI handles the complexity while you focus on building better models.  
      </p>  
    </div>  

    {/* Steps */}  
    <div className="max-w-5xl mx-auto">  
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">  
        {steps.map((step, index) => (  
          <div key={index} className="relative">  
            {/* Connection Line */}  
            {index < steps.length - 1 && (  
              <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent z-0"></div>  
            )}  
              
            <Card className="relative z-10 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">  
              <CardContent className="p-6 text-center">  
                {/* Step Number */}  
                <div className="text-6xl font-bold text-cyan-300/30 mb-4">  
                  {step.number}  
                </div>  
                  
                {/* Icon */}  
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">  
                  <step.icon className="w-8 h-8 text-blue-900" />  
                </div>  
                  
                {/* Content */}  
                <h3 className="text-xl font-bold mb-3">  
                  {step.title}  
                </h3>  
                <p className="text-blue-100 text-sm leading-relaxed">  
                  {step.description}  
                </p>  
              </CardContent>  
            </Card>  
          </div>  
        ))}  
      </div>  
    </div>  

    {/* Bottom Stats */}  
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">  
      <div className="text-center">  
        <div className="text-3xl font-bold text-cyan-300">< 5 min</div>  
        <div className="text-blue-200">Average Processing Time</div>  
      </div>  
      <div className="text-center">  
        <div className="text-3xl font-bold text-cyan-300">99.9%</div>  
        <div className="text-blue-200">Accuracy Rate</div>  
      </div>  
      <div className="text-center">  
        <div className="text-3xl font-bold text-cyan-300">100GB</div>  
        <div className="text-blue-200">Max Dataset Size</div>  
      </div>  
      <div className="text-center">  
        <div className="text-3xl font-bold text-cyan-300">24/7</div>  
        <div className="text-blue-200">Processing Available</div>  
      </div>  
    </div>  
  </div>  
</section>

);
};

export default HowItWorks;


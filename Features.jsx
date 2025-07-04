import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
Zap,
Globe,
Shield,
Copy,
Image,
BarChart3,
CheckCircle,
Sparkles
} from 'lucide-react';

const Features = () => {
const features = [
{
icon: Globe,
title: "Multilingual Support",
description: "Advanced processing for Arabic and English text with cultural context awareness and proper handling of RTL/LTR scripts.",
color: "from-blue-500 to-cyan-500"
},
{
icon: Zap,
title: "Intelligent Noise Removal",
description: "AI-powered detection and removal of irrelevant content, malformed data, and low-quality entries that hurt model performance.",
color: "from-cyan-500 to-teal-500"
},
{
icon: Copy,
title: "Duplicate Detection",
description: "Advanced algorithms identify near-duplicates, semantic similarities, and redundant entries across massive datasets.",
color: "from-teal-500 to-green-500"
},
{
icon: Shield,
title: "Content Filtering",
description: "Automated detection of inappropriate, biased, or harmful content with customizable filtering rules and compliance standards.",
color: "from-purple-500 to-blue-500"
},
{
icon: Image,
title: "Image Quality Control",
description: "Computer vision algorithms flag blurry, corrupted, or irrelevant images while maintaining dataset diversity and quality.",
color: "from-pink-500 to-purple-500"
},
{
icon: BarChart3,
title: "Format Standardization",
description: "Automatic normalization of data formats, encoding standards, and structural consistency across your entire dataset.",
color: "from-orange-500 to-pink-500"
}
];

return (
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
<div className="container mx-auto px-6">
{/* Section Header */}
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
<Sparkles className="w-4 h-4" />
<span className="font-medium">Powerful Features</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Everything You Need for{' '}
<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
Clean Data
</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
Our comprehensive suite of AI-powered tools ensures your datasets are clean,
consistent, and ready for high-performance machine learning models.
</p>
</div>

{/* Features Grid */}  
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">  
      {features.map((feature, index) => (  
        <Card   
          key={index}  
          className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105"  
        >  
          <CardContent className="p-8">  
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>  
              <feature.icon className="w-8 h-8 text-white" />  
            </div>  
            <h3 className="text-xl font-bold text-gray-900 mb-3">  
              {feature.title}  
            </h3>  
            <p className="text-gray-600 leading-relaxed">  
              {feature.description}  
            </p>  
          </CardContent>  
        </Card>  
      ))}  
    </div>  

    {/* Bottom CTA */}  
    <div className="text-center mt-16">  
      <div className="inline-flex items-center gap-2 text-green-700 bg-green-100 px-4 py-2 rounded-full">  
        <CheckCircle className="w-4 h-4" />  
        <span className="font-medium">All features included in every plan</span>  
      </div>  
    </div>  
  </div>  
</section>

);
};

export default Features;


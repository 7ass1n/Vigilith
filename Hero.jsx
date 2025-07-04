import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
return (
<section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
{/* Animated Background Elements */}
<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
</div>

<div className="relative container mx-auto px-6 pt-20 pb-16 flex items-center min-h-screen">  
    <div className="max-w-4xl mx-auto text-center">  
      {/* Badge */}  
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">  
        <Sparkles className="w-4 h-4 text-cyan-300" />  
        <span className="text-sm font-medium">AI-Powered Data Preprocessing</span>  
      </div>  
        
      {/* Main Heading */}  
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">  
        Clean Data,{' '}  
        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">  
          Better Models  
        </span>  
      </h1>  
        
      {/* Subheading */}  
      <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">  
        Vigilith Clean AI automatically preprocesses your datasets with intelligent noise removal,   
        duplicate detection, and content filtering for Arabic and English text and images.  
      </p>  
        
      {/* Stats */}  
      <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">  
        <div className="text-center">  
          <div className="text-2xl font-bold text-cyan-300">99.9%</div>  
          <div className="text-blue-200">Accuracy</div>  
        </div>  
        <div className="text-center">  
          <div className="text-2xl font-bold text-cyan-300">50M+</div>  
          <div className="text-blue-200">Records Processed</div>  
        </div>  
        <div className="text-center">  
          <div className="text-2xl font-bold text-cyan-300">2</div>  
          <div className="text-blue-200">Languages Supported</div>  
        </div>  
      </div>  
        
      {/* CTA Buttons */}  
      <div className="flex flex-col sm:flex-row gap-4 justify-center">  
        <Button   
          size="lg"   
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"  
        >  
          Start Free Trial  
          <ArrowRight className="ml-2 w-5 h-5" />  
        </Button>  
        <Button   
          variant="outline"   
          size="lg"  
          className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"  
        >  
          Watch Demo  
        </Button>  
      </div>  
        
      {/* Trust Indicators */}  
      <p className="mt-8 text-blue-200 text-sm">  
        Trusted by researchers at MIT, Stanford, and leading tech companies  
      </p>  
    </div>  
  </div>  
    
  {/* Scroll Indicator */}  
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">  
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">  
      <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>  
    </div>  
  </div>  
</section>

);
};

export default Hero;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, Calendar, Zap, Shield, Clock } from 'lucide-react';

const CTA = () => {
return (
<section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
{/* Background Elements */}
<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
</div>

<div className="container mx-auto px-6 relative">  
    {/* Main CTA */}  
    <div className="text-center mb-16">  
      <h2 className="text-4xl md:text-6xl font-bold mb-6">  
        Ready to{' '}  
        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">  
          Transform  
        </span>{' '}  
        Your Data?  
      </h2>  
      <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">  
        Join thousands of ML engineers and researchers who trust Vigilith Clean AI   
        to prepare their datasets for production-ready models.  
      </p>  
        
      {/* CTA Buttons */}  
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">  
        <Button   
          size="lg"   
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"  
        >  
          Start Free Trial  
          <ArrowRight className="ml-2 w-5 h-5" />  
        </Button>  
        <Button   
          variant="outline"   
          size="lg"  
          className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"  
        >  
          <Calendar className="mr-2 w-5 h-5" />  
          Book Demo  
        </Button>  
      </div>  

      {/* Trust Indicators */}  
      <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">  
        <div className="flex items-center gap-2">  
          <Zap className="w-4 h-4" />  
          <span>Setup in 5 minutes</span>  
        </div>  
        <div className="flex items-center gap-2">  
          <Shield className="w-4 h-4" />  
          <span>SOC 2 Compliant</span>  
        </div>  
        <div className="flex items-center gap-2">  
          <Clock className="w-4 h-4" />  
          <span>24/7 Support</span>  
        </div>  
      </div>  
    </div>  

    {/* Contact Cards */}  
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">


import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { NEWS_DATA } from '../constants';

const News: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">교회 소식</h1>
          <p className="text-slate-600">기도편지와 나눔을 전해드립니다.</p>
        </div>

        <div className="space-y-12">
          {NEWS_DATA.map((item) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto bg-slate-200 relative">
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 serif leading-tight">
                    {item.title}
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    {item.content.map((paragraph, idx) => (
                      <p key={idx} className="text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default News;
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MINISTRIES, CHURCH_INFO } from '../constants';

const Ministry: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">목회와 사역</h1>
          <p className="text-slate-600">말씀과 삶이 하나되는 비로소교회의 사역입니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {MINISTRIES.map((ministry) => (
            <div key={ministry.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                {ministry.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{ministry.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow mb-6">
                {ministry.description}
              </p>
              
              {/* Conditional Buttons */}
              {ministry.link && (
                <a 
                  href={ministry.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors self-start"
                >
                  자세히 보기 <ExternalLink size={16} />
                </a>
              )}
              
              {ministry.internalLink && (
                <Link 
                  to={ministry.internalLink} 
                  className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors self-start"
                >
                  자세히 보기 <ArrowRight size={16} />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* YouTube Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl overflow-hidden text-white relative"
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519681393798-2f61f2a55db8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="relative z-10 p-10 md:p-16 text-center">
            <Youtube className="w-16 h-16 mx-auto mb-6 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">온라인 말씀 사역</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              유튜브 채널을 통해 매일 아침 묵상, 설교 영상, 그리고 성경 통독 가이드를 나누고 있습니다.
              온라인을 통해서도 복음이 전해지는 통로가 되기를 소망합니다.
            </p>
            <a 
              href={CHURCH_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              비로소교회 유튜브 바로가기 <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Ministry;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHURCH_INFO, MINISTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
            alt="Sky and Clouds"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg md:text-2xl font-light mb-4 tracking-widest text-amber-300">BIROSO CHURCH</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight serif">
              하나님의 뜻이<br />
              <span className="text-amber-400">비로소</span> 이루어지는 곳
            </h1>
            <p className="text-base md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              우리의 계획보다 더 크신 하나님의 섭리를 믿으며,<br className="hidden md:block"/>
              일상의 예배자로 살아가는 믿음의 공동체입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                교회 소개 <ArrowRight size={18} />
              </Link>
              <Link 
                to="/news" 
                className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                최신 소식
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold mb-4">WELCOME</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 serif">환영합니다</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              비로소교회는 예수 그리스도를 본받아 살고자 하는 그리스도인들이 모인 공동체입니다. 
              각자 일상의 삶이 모여 예배가 되고, 함께 모인 예배가 일상을 사는 버팀목이 되는 교회가 되고자 합니다.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              건물을 짓는 대신 믿음을 세우고, 우리끼리 잘 사는 것 대신에 
              세상의 빛과 소금이 되는 그리스도인이 되겠습니다.
            </p>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">예배 안내</h3>
              <p className="text-slate-600">주일 오후 12시 30분</p>
              <p className="text-slate-500 text-sm mt-1">{CHURCH_INFO.address}</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?random=10" alt="Church Gathering" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-sm font-serif italic text-slate-600">"당신의 실패는 끝이 아니라, 더 넓은 곳으로 건너오라는 간곡한 부르심입니다."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministry Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 serif mb-4">함께하는 여정</h2>
            <p className="text-slate-600">비로소교회가 걸어가는 은혜의 발자취입니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MINISTRIES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
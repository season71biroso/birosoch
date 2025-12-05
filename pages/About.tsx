import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import { CHURCH_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-bold text-sm tracking-wider uppercase mb-2 block">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-6">교회 소개</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            "작지만 진실한 사랑과 깊은 교제가 있는<br/>가족 같은 공동체로 성장합니다."
          </p>
        </motion.div>

        {/* Vision */}
        <section className="mb-20">
          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 serif text-slate-800">비로소교회 비전</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                비로소교회는 <strong>예수 그리스도를 본받아 살고자 하는 그리스도인들</strong>이 모인 공동체입니다.
              </p>
              <p>
                교회 건물을 짓는 대신 하나님의 아들 예수 그리스도를 믿는 믿음으로 함께 살아가는 그리스도인들로 세워져 가겠습니다.
              </p>
              <p>
                우리끼리 잘 사는 것 대신에 지역민, 지역교회, 열방의 이웃들과 다함께 잘사는 <strong>세상의 빛과 소금</strong>이 되는 그리스도인이 되겠습니다.
              </p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 serif text-slate-800 flex items-center gap-2">
            <Calendar className="text-amber-500" /> 발자취
          </h2>
          <div className="border-l-2 border-slate-200 pl-8 space-y-12 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-sm"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2025년 현재</h3>
              <p className="text-slate-600">
                청년 3명, 청소년 1명과 함께 예배하며, 매일 말씀 묵상과 나눔을 이어가고 있습니다.
                <br/>바울의 길 성지순례와 지역 섬김(도서 포장 아르바이트 등)을 실천 중입니다.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2023년 12월 10일</h3>
              <p className="text-slate-600">
                신촌 품는교회 공유예배처로 이전하여 예배 시작.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2023년 5월 21일</h3>
              <p className="text-slate-600">
                은평구 응암동 숲카페에서 김시준 목사 부부와 청년 1명이 첫 예배를 드림으로 시작되었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Pastor Info */}
        <section className="mb-20 grid md:grid-cols-3 gap-8 items-start">
          <div className="aspect-square rounded-xl overflow-hidden bg-slate-200">
             <img src="https://picsum.photos/400/400?random=20" alt="김시준 목사" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 serif text-slate-800">담임목사 김시준</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              "두려움을 넘어서는 믿음으로 살아갑니다."
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              한 영혼을 천하보다 귀하게 여기는 마음으로, 화려한 성장보다는 
              성도 한 사람 한 사람이 말씀 안에서 단단히 서가는 것을 꿈꾸며 목회하고 있습니다.
              교회 밖의 이웃들, 특히 소외된 이들을 향한 선한 사마리아인의 마음을 품고 
              직접 노동의 현장에서도 땀 흘리며 삶으로 복음을 살아내고자 노력합니다.
            </p>
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-2xl font-bold mb-6 serif text-slate-800 flex items-center gap-2">
            <MapPin className="text-amber-500" /> 오시는 길
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-slate-100 h-64 flex items-center justify-center text-slate-400">
               {/* Note: Real Maps require API Keys. Using a static placeholder/link styling */}
               <div className="text-center p-6">
                 <p className="mb-4">지도가 표시될 영역입니다.</p>
                 <a 
                   href={`https://map.naver.com/v5/search/${CHURCH_INFO.address}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                 >
                   네이버 지도에서 보기
                 </a>
               </div>
            </div>
            <div className="p-6">
              <p className="font-bold text-lg mb-2">{CHURCH_INFO.name}</p>
              <p className="text-slate-600 mb-2">{CHURCH_INFO.address}</p>
              <p className="text-slate-500 text-sm">신촌 품는교회와 공간을 공유하여 사용하고 있습니다.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
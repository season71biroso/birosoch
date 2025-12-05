import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, CreditCard } from 'lucide-react';
import { CHURCH_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">문의 및 안내</h1>
          <p className="text-slate-600">비로소교회에 오신 것을 환영합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h2 className="text-xl font-bold mb-6 text-slate-900 border-b pb-4">연락처</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-500 mb-1">주소</span>
                  <span className="text-slate-800">{CHURCH_INFO.address}</span>
                  <p className="text-xs text-slate-400 mt-1">(신촌 품는교회 공유예배처)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-500 mb-1">전화문의</span>
                  <a href={`tel:${CHURCH_INFO.phone}`} className="text-slate-800 hover:text-amber-600">{CHURCH_INFO.phone}</a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Donation Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white"
          >
            <h2 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4 flex items-center gap-2">
              <CreditCard size={20} className="text-amber-400"/> 후원안내
            </h2>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              비로소교회는 성도님들의 소중한 헌금으로 운영됩니다. 
              하나님 나라 확장을 위해 마음을 모아주시는 모든 분들께 감사드립니다.
            </p>
            <div className="bg-slate-800 p-4 rounded-xl mb-4">
              <span className="block text-xs text-slate-400 mb-1">기업은행</span>
              <span className="block text-xl font-bold text-amber-400 tracking-wide">{CHURCH_INFO.bankAccount.split(' ')[1]}</span>
              <span className="block text-xs text-slate-500 mt-1">예금주: 김시준</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
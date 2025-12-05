import React from 'react';
import { CHURCH_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-serif">{CHURCH_INFO.name}</h3>
            <p className="mb-4 text-sm">{CHURCH_INFO.tagline}</p>
            <p className="text-sm">
              담임목사: {CHURCH_INFO.pastor}<br />
              주소: {CHURCH_INFO.address}<br />
              전화: {CHURCH_INFO.phone}
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-4">후원안내</h4>
            <p className="text-sm mb-2">마음을 담은 헌금은 아래 계좌로 부탁드립니다.</p>
            <p className="text-amber-500 font-bold text-lg">{CHURCH_INFO.bankAccount}</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} {CHURCH_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
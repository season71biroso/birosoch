import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pilgrimage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="pb-20">
      
      {/* Header / Hero */}
      <div className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1527633633649-6bbd6874422e?q=80&w=2670&auto=format&fit=crop" 
            alt="Pilgrimage Background" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/60 to-white" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Vision Trip</span>
            <h1 className="text-4xl md:text-6xl font-bold serif mb-6 leading-tight">
              바울의 길, <br/>
              그 여정의 기록
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light serif italic">
              "눈으로 보고, 발로 밟는 경험이<br/>성경을 이해하고 하나님을 아는 데 유익이 되었습니다."
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* Prologue */}
        <motion.section {...fadeIn} className="mb-24 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
           <div className="flex gap-4 mb-6">
             <Quote className="text-amber-500 rotate-180 flex-shrink-0" size={32} />
             <h3 className="text-xl font-bold text-slate-900 pt-1">성지순례를 떠나며</h3>
           </div>
           <div className="text-lg text-slate-700 leading-relaxed space-y-4 font-serif">
             <p>
               계획할 수 없던 일이 일어났습니다. 저, 성지순례 '바울의 길' 여정을 나섭니다.
               지난 2년여 동안 월요일과 화요일 성경을 배우는데 시간과 재정을 쏟았습니다.
               그리고 갑작스레 이번 일정에 함께하게 되었습니다. 
             </p>
             <p>
               많은 분들의 기도와 섬김으로 가능한 일이었습니다. 
               잘 다녀오겠습니다. 그리고 소식 종종 올리겠습니다.
             </p>
           </div>
        </motion.section>

        {/* 1. Meteora */}
        <section className="mb-24">
           <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-2 md:order-1"
             >
               <div className="flex items-center gap-2 text-amber-600 font-bold mb-3 text-sm tracking-wider uppercase">
                 <MapPin size={16} /> Meteora, Greece
               </div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6 serif">안개 속의 순종, 메테오라</h2>
               <div className="text-slate-600 leading-relaxed space-y-4 text-justify">
                 <p>
                   비와 옅은 안개가 내려앉은 메테오라입니다. 거대한 바위 절벽 위에 위태롭게, 그러나 단단히 서 있는 수도원들을 바라보며 ‘바울의 길’을 함께 걷는 이들과 깊은 침묵에 잠깁니다.
                 </p>
                 <p>
                   그 옛날, 오직 부르심 하나를 붙들고 이 험한 길을 걸었던 사도의 걸음은 얼마나 고단했을까요. 저 아찔한 절벽 끝에 기어이 기도의 처소를 마련했던 선진들의 간절함 앞에서 오늘 저의 믿음은 한없이 가볍게만 느껴집니다.
                 </p>
                 <p className="font-medium text-slate-800 border-l-4 border-amber-500 pl-4 italic">
                   "순례는 눈에 보이는 웅장함 너머에 깃든 '순종'의 무게를 묵상하게 되는 시간입니다."
                 </p>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 md:order-2"
             >
               <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1560359560-60a6cb7261e3?q=80&w=1000&auto=format&fit=crop" 
                   alt="Meteora Monasteries" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                 />
               </div>
             </motion.div>
           </div>
        </section>

        {/* 2. Philippi & Troas */}
        <section className="mb-24 bg-slate-50 rounded-3xl p-8 md:p-12">
           <motion.div {...fadeIn} className="text-center mb-10">
             <div className="flex justify-center items-center gap-2 text-slate-500 font-bold mb-3 text-sm tracking-wider uppercase">
                <MapPin size={16} /> Philippi & Troas
             </div>
             <h2 className="text-3xl font-bold text-slate-900 serif">멈춘 자리가 문(門)이다</h2>
             <p className="text-slate-500 mt-2">드로아의 끝자락에서</p>
           </motion.div>
           
           <div className="max-w-2xl mx-auto space-y-8">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 italic serif text-slate-700 leading-loose text-center"
             >
                <p>"더 이상 내디딜 땅이 없어<br/>망망한 바다 앞에 멈춰 선 순간이 있습니다"</p>
                <br/>
                <p>"하지만 그대여<br/>너무 낙심하지는 마십시오"</p>
                <br/>
                <p>"길이 끝났다는 것은<br/>이제 땅의 법이 아니라<br/>하늘의 바람을 타고 갈 때가 되었다는 뜻"</p>
             </motion.div>
             <div className="text-slate-600 leading-relaxed text-justify">
                <p className="mb-4">
                  빌립보 유적지 한편, 쇠창살 너머로 보이는 작은 동굴. 바로 바울과 실라가 갇혔던 감옥터입니다.
                  억울하게 매 맞고 깊은 옥에 갇혔지만, 절망 대신 한밤중에 기도하고 찬송했던 사도행전 16장의 생생한 현장입니다.
                </p>
                <p>
                  어둡고 좁은 이 공간 앞에 서면, 고난 중에도 감사를 잃지 않았던 그들의 뜨거운 믿음이 2천 년을 넘어 전해지는 듯합니다.
                </p>
             </div>
           </div>
        </section>

        {/* 3. Ephesus */}
        <section className="mb-24">
           <div className="grid md:grid-cols-2 gap-10 items-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
               <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1628704283893-6c841c307074?q=80&w=1000&auto=format&fit=crop" 
                   alt="Ephesus Ruins" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                 />
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <div className="flex items-center gap-2 text-amber-600 font-bold mb-3 text-sm tracking-wider uppercase">
                 <MapPin size={16} /> Ephesus, Turkey
               </div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6 serif">에베소, 무너진 신전 터에서</h2>
               <div className="text-slate-600 leading-relaxed space-y-4 text-justify">
                 <p>
                   에베소 아르테미스 신전 터에 서 있는 순간, 먼저 눈에 들어온 것은 무너진 기둥들이었지만, 오래 남은 것은 “왜 사람들의 마음은 이렇게 쉽게 무너지지 않을까” 하는 묵직한 질문이었습니다.
                 </p>
                 <p>
                   “난 그저 진심(복음)을 전했을 뿐인데 왜 미움받지?” 오늘을 사는 우리에게도 낯설지 않은 장면입니다.
                   여신을 품어 온 에베소 땅에서 “하나님의 어머니”라는 고백이 태어난 것은, 신앙이 바뀌어도 마음의 습관은 쉽게 바뀌지 않는다는 증거처럼 느껴집니다.
                 </p>
                 <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mt-4">
                   <p className="font-bold text-slate-800 mb-2">오늘의 기도</p>
                   <p className="text-slate-700 italic">
                     "하나님, 당신이 여시는 새로운 길 앞에서, 제가 먼저 한 걸음 넘어설 수 있게 해 주세요."
                   </p>
                 </div>
               </div>
             </motion.div>
           </div>
        </section>

        {/* 4. Derinkuyu */}
        <section className="mb-24">
           <motion.div {...fadeIn} className="bg-slate-900 text-slate-300 p-8 md:p-12 rounded-3xl relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
             
             <div className="relative z-10">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="md:w-1/2">
                   <div className="flex items-center gap-2 text-amber-500 font-bold mb-3 text-sm tracking-wider uppercase">
                     <MapPin size={16} /> Derinkuyu, Cappadocia
                   </div>
                   <h2 className="text-3xl font-bold text-white mb-6 serif">지하 85m 생존 도시, 데린쿠유</h2>
                   <div className="space-y-4 text-justify leading-relaxed">
                     <p>
                       ‘깊은 우물’ 데린쿠유 입구에 서니, 평범한 마을 땅이 갑자기 거대한 입을 벌리는 듯한 긴장감이 온몸을 휘감았습니다. 로마 제국, 이슬람으로 이어지는 권력의 칼날이 기독교인들의 목을 노릴 때마다, 이 땅 아래로 급히 숨어든 발소리가 아직도 메아리치는 듯했습니다.
                     </p>
                     <p>
                       좁고 가파른 계단을 한 발 한 발 디디며 내려서자, 손끝에 스며드는 축축한 돌벽의 차가운 감촉이 가슴을 조였습니다. <span className="text-amber-400">“여기서, 얼마나 많은 밤을 떨며 버텼을까.”</span> 그 물음이 뼈저리까지 스며들었습니다.
                     </p>
                   </div>
                 </div>
                 <div className="md:w-1/2 space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1570535264878-3c3ce672d5df?q=80&w=1000&auto=format&fit=crop" 
                      alt="Underground City Cave"
                      className="rounded-xl shadow-lg w-full h-64 object-cover" 
                    />
                    <p className="text-sm text-slate-400 italic">
                       데린쿠유는 차가운 유적이 아니라, 믿음의 선배들이 피와 눈물로 쓴 살아 있는 편지입니다.
                    </p>
                 </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-slate-700 text-center">
                  <p className="text-lg text-white font-serif">
                    "당신이라면 이 끝없는 어둠 속에서 어떤 한 점 빛을 붙들고 있었을까요."
                  </p>
               </div>
             </div>
           </motion.div>
        </section>

        {/* Epilogue */}
        <motion.div {...fadeIn} className="text-center pb-12">
           <h3 className="text-2xl font-bold text-slate-900 mb-6 serif">여정을 마치며</h3>
           <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
             땅의 길이 멈춘 곳에서 바다의 길이 열리듯,<br/>
             우리의 실패는 끝이 아니라 더 넓은 곳으로 건너오라는 부르심입니다.<br/>
             비로소교회는 이 순례의 마음을 품고 매일의 삶을 걸어갑니다.
           </p>
           <div className="mt-10">
             <Link 
               to="/ministry" 
               className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200"
             >
               사역 안내 돌아가기
             </Link>
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Pilgrimage;
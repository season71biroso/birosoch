import React from 'react';
import { BookOpen, Heart, MapPin, Users, Video } from 'lucide-react';
import { NewsItem, MinistryItem } from './types';

export const CHURCH_INFO = {
  name: "비로소교회",
  tagline: "하나님의 뜻이 비로소 이루어지는 곳",
  pastor: "김시준 목사",
  address: "서울시 서대문구 연세로5가길 20 지하1층 (신촌 품는교회 공유예배처)",
  worshipTime: "주일 낮 12:30",
  phone: "010-4160-5875",
  bankAccount: "기업은행 065-091098-02-011 (예금주: 김시준)",
  youtube: "https://www.youtube.com/@birosonew"
};

export const MENUS = [
  { name: "교회소개", path: "/about" },
  { name: "목회와 사역", path: "/ministry" },
  { name: "교회소식", path: "/news" },
  { name: "오시는 길", path: "/contact" },
];

export const MINISTRIES: MinistryItem[] = [
  {
    id: 'worship',
    title: '주일예배',
    description: '매주 주일 오후 12시 30분, 신촌에서 함께 모여 하나님을 예배합니다. 소규모 공동체로 깊이 있는 나눔과 교제가 있습니다.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'bible',
    title: '365일 말씀여정',
    description: '매일 아침 하루 읽을 분량을 요약해주는 영상을 통해 성경 일독을 함께합니다. 말씀으로 하루를 시작하세요.',
    icon: <BookOpen className="w-6 h-6" />,
    link: "https://www.youtube.com/playlist?list=PLC6sz7yrUPuudMEwWKU_HVkgaQpOuU50z"
  },
  {
    id: 'sharing',
    title: '나눔예배',
    description: '매월 마지막 주일은 나눔예배로 드립니다. 궁금했던 점을 묻고 성경 안에서 답을 찾아가는 대화의 시간입니다.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 'pilgrimage',
    title: '성지순례 & 비전트립',
    description: '바울의 여정을 따라가는 성지순례 등, 성경의 현장을 직접 밟으며 믿음의 깊이를 더합니다.',
    icon: <MapPin className="w-6 h-6" />,
    internalLink: "/pilgrimage"
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'letter-nov-2025',
    title: '2025년 11월 비로소교회 기도편지',
    date: '2025.11.04',
    category: 'Letter',
    summary: '말씀으로 빚어가는 365일의 여정과 성지순례 소식을 나눕니다.',
    content: [
      "비로소교회는 매일 성경 통독을 진행하고 있으며, 12월 4일 현재 338일차에 이르렀습니다. 매일 말씀을 정리하여 영상을 만들어 올리는 일이 부담이 될 때도 있지만, 이 과정을 통해 말씀을 더 깊이 알아가는 기쁨 또한 누리고 있습니다.",
      "지난 2년여 동안 월요일과 화요일 성경을 배우는 일에 시간과 재정을 쏟은 후, 예상치 못하게 성지순례 '바울의 길' 여정에 동참하게 되었습니다. 눈으로 보고 발로 밟는 모든 경험이 성경을 이해하고 하나님을 아는 데 큰 유익이 되었습니다.",
      "거의 2년 동안 두 달에 한 번씩 도서 포장 아르바이트에 참여하며 귀한 노동의 시간을 보내고 있습니다. 쓰러진 병자를 외면하지 않았던 선한 사마리아인의 사랑을 경험하고 있습니다.",
      "기도제목: 2026년에도 모든 성도가 말씀의 기쁨과 깊이를 경험하며, 일상 속 섬김의 자리에서 쓰러진 이웃을 외면하지 않기를 기도합니다."
    ],
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 'story-meteora',
    title: '[성지순례] 메테오라와 에베소에서',
    date: '2025.10.20',
    category: 'Story',
    summary: '안개 속의 메테오라와 무너진 신전 에베소에서 묵상한 순종의 무게.',
    content: [
      "비와 옅은 안개가 내려앉은 메테오라입니다. 거대한 바위 절벽 위에 위태롭게 서 있는 수도원들을 바라보며 '바울의 길'을 함께 걷는 이들과 깊은 침묵에 잠깁니다. 그 옛날 오직 부르심 하나를 붙들고 이 험한 길을 걸었던 사도의 걸음은 얼마나 고단했을까요.",
      "에베소 아르테미스 신전 터에 섰습니다. 화려했던 신전은 무너졌지만, 바울이 전한 복음은 여전히 우리 가슴에 살아있습니다. '원래 우리 교회는 늘 이렇게 해 왔어'라는 완고함 대신, 날마다 새로워지는 믿음의 길을 걷길 소망합니다.",
      "데린쿠유 지하 85m 생존 도시. 좁고 가파른 계단을 내려가며 '여기서 얼마나 많은 밤을 떨며 버텼을까' 묵상했습니다. 그들의 믿음이 오늘 우리에게 살아있는 편지가 됩니다."
    ],
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 'history-intro',
    title: '비로소교회 이야기',
    date: '2025.01.01',
    category: 'Notice',
    summary: '2023년 5월, 숲카페에서 시작된 비로소교회의 발자취.',
    content: [
      "비로소교회는 김시준 목사 부부가 2023년 5월 21일 은평구 응암동 숲카페에서 처음으로 예배를 드렸고, 12월 10일 신촌 품는교회 공유예배처로 이전하여 예배를 이어가고 있습니다.",
      "처음에는 1명의 청년이 성도로 있었고, 2025년 1월 현재는 청년 3명, 청소년 1명이 함께 하고 있습니다. 작지만 진실한 사랑과 깊은 교제가 있는 가족 같은 공동체를 지향합니다.",
      "교회 건물을 짓는 대신 하나님의 아들 예수 그리스도를 믿는 믿음으로 함께 살아가는 그리스도인들로 세워져 가겠습니다."
    ],
    imageUrl: "https://picsum.photos/800/600?random=3"
  }
];
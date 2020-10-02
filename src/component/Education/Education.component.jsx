import React from 'react';

//Components
import SectionList from '../SectionList/SectionList.component';

const Education = () => {
  const sectionTitle = '學歷';
  const items = [
    {
      company: '國立暨南大學',
      title: '電機工程學系 碩士班',
      period: '2012/9 - 2013/6',
      description: (
        <p>
          1.研究內容:使用模糊類神經(FNN)做分類器應用於影像辨識。
          <br />
          2.一年完成碩士班論文畢業，並獲得碩士論文評選第一名。 <br />
        </p>
      ),
    },
    {
      company: '國立暨南大學',
      title: '電機工程學系 學士班',
      period: '2008/9 - 2012/6',
      description: (
        <p>
          1.大一擔任班代，大二擔任迎新宿營幹部，協助舉辦活動，處理班上事務。
          <br />
          2.大二上學期獲得書券獎，並成功申請國科會大專生計畫及結案。 <br />
          3.大三專題競賽，獲得系統組第一名。 <br />
        </p>
      ),
    },
  ];
  return <SectionList sectionTitle={sectionTitle} items={items} />;
};

export default Education;

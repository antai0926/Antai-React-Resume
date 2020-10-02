import React from 'react';

//Components
import SectionList from '../SectionList/SectionList.component';

const Experience = () => {
  const sectionTitle = '工作經歷';
  const items = [
    {
      company: '廣晉軟體',
      title: 'Java Full Stack Developer',
      period: '2020/2 - 2020/6',
      description: (
        <p>
          公司內部ERP系統開發:
          <br />
          1.公司請假、差勤申請介面實作及以行事曆方式顯示目前申請日期及進度。
          <br />
          2.勾稽請假差勤資料，及出勤打卡紀錄，以程式排程寄信提醒打卡。
          <br />
          3.公司行事曆資料輸入介面及後端程式實作。
          <br />
          4.頁面攔截器實作，沒有登入則強制轉至登入畫面。
          <br />
          5.以BootStarpt調整ERP整體畫面於手機版本的顯示。
          <br />
          6.公佈欄功能前後端功能規劃與實作。
          <br />
          7.報表元件: Excel Template功能實作，加速報表開發。
          <br />
        </p>
      ),
    },
    {
      company: '國家中山科學研究院',
      title: '工程師',
      period: '2016/11 - 2020/2',
      description: (
        <p>
          1.軍方需求訪談、規格訂定。
          <br />
          2.系統程式開發(圖控及PLC)。
          <br />
          3.系統功能驗證及認證相關事務。
          <br />
        </p>
      ),
    },
    {
      company: '均一教育平台基金會',
      title: 'Python Full Stack Developer',
      period: '2016/2 - 2016/11',
      description: (
        <p>
          1.免費線上教育平台(均一)的軟體開發與維護。
          <br />
          2.負責新北市學校的親師生平台與均一教育平台的帳號介接。
          <br />
          3.前端功能使用優化。
          <br />
        </p>
      ),
    },
    {
      company: '鼎新電腦',
      title: 'Java Full Stack Developer',
      period: '2015/1 - 2016/2',
      description: (
        <p>
          1.ERP 中的電子表單流程系統的功能開發與維護。
          <br />
          2.產品序號產生器的改版負責者。
          <br />
          3.系統發版環境建置與測試。
          <br />
        </p>
      ),
    },
    {
      company: '台達電子',
      title: 'Firmware Engineer',
      period: '2013/8 - 2014/6',
      description: (
        <p>
          1.韌體研發、產線測試程式、解決代理商回饋的問題、舊產品維護。
          <br />
          2.負責過項目: <br />
          &emsp;(1)PLC(可程式邏輯控制器)人機介面的韌體控制。
          <br />
          &emsp;(2)PLC與PLC間的通訊韌體控制。
          <br />
          &emsp;(3)台達植物工廠Sensor訊號與PLC轉換程式。
          <br />
        </p>
      ),
    },
  ];
  return <SectionList sectionTitle={sectionTitle} items={items} />;
};

export default Experience;

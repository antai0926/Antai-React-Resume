import React from 'react';
import './Portfolio.styles.scss';
//Components
import Section from '../Section/Section.component';
import SectionTitle from '../SectionTitle/SectionTitle.component';
import Card from '../Card/Card.component';

const Portfolio = () => {
  const cards = [
    {
      imgClass: 'utofun',
      title: 'UTOFUN Practice',
      description:
        '以UTOFUN的網頁進行切版練習，不具商業用途。 使用HTML、SCSS、jQuery (DOM child append)、Media Query FlexBox (製作RWD)、Bootstrapt (AppBar、Responsive Image)。',
      demoUrl: 'https://utofun-practice-antai.netlify.app/',
      githubUrl: 'https://github.com/antai0926/UTOFUN-Practice',
    },
    {
      imgClass: 'taiwan-weather',
      title: 'Taiwan Weather',
      description:
        '介接中央氣象局開放資料平台之API，查詢台灣主要城市即時天氣資訊，使用React、Redux、ReduxSaga，及Flex、Grid、Media Qurery製作RWD，支援PWA。',
      demoUrl: 'https://taiwan-weather-antai.netlify.app/',
      githubUrl: 'https://github.com/antai0926/Taiwan-Weather',
    },
    {
      imgClass: 'social-media',
      title: 'Social Media',
      description:
        '(持續開發中)這是一個社交留言板，可新增刪除留言，可編輯個人訊息(自介、大頭照)、查看他人資訊，前端使用React、Redux、ReduxThunk、Material-UI，後端使用Node.js on Firebase。',
      demoUrl: 'https://antai-social-media-client.netlify.app/',
      githubUrl: 'https://github.com/antai0926/social-media-client',
    },
    {
      imgClass: 'e-clothing',
      title: 'E-Clothing',
      description:
        '此為衣服購物網站，使用React(Hook)、Redux(Hook、Saga)、Node.js、Sytle Component、Stripeapi、Firebase，實作畫面呈現、使用者註冊登入、購物車選購及信用卡結帳等功能。',
      demoUrl: 'https://e-commerce-clothing-antai.herokuapp.com/',
      githubUrl: 'https://github.com/antai0926/e-commerce-clothing',
    },
    {
      imgClass: 'natours',
      title: 'Natours旅遊',
      description:
        '此為旅遊介紹及訂購之網站，後端使用:Node.js、Express、MongoDB(Atlas)、Mongoose、JWT 對API Access的控管、Stripe，前端使用:Pug　Template。佈署環境:Heroku。',
      demoUrl: 'https://natour-antai.herokuapp.com/',
      githubUrl: 'https://github.com/antai0926/natours',
    },
    {
      imgClass: 'arc-development',
      title: 'Arc-Development',
      description:
        '(持續開發中)此為軟體開發公司之網站，使用Material-UI、React、Redux進行開發，利用ThemeProvider去客製化主題，以useMediaQuery、breakpoint進行RWD。',
      demoUrl: 'https://arc-antai-material-ui.netlify.app/',
      githubUrl: 'https://github.com/antai0926/CompanyWebsite-MaterialUI',
    },
    {
      imgClass: 'love-animal',
      title: '動物認養平台',
      description:
        '此為靜態網頁，使用HTML、CSS Flex and Gird練習畫面切版，及使用Background Image、Sticky Nav Bar、Transition、Transition、Transform...等基礎技巧進行練習。',
      demoUrl: 'https://love-animals-antai.netlify.app/',
      githubUrl: 'https://github.com/antai0926/love-animal-react',
    },
    {
      imgClass: 'hawaii-rent',
      title: '夏威夷旅遊服務',
      description:
        '此為靜態網頁，使用HTML及CSS Flex進行版面切版，利用Media Query、Flex Wrap進行RWD製作，搭配Javascript進行NavBar在不同位置(頂端與非頂端)之背景顏色改變。',
      demoUrl: 'https://antai-frontend-hawaii.netlify.app/',
      githubUrl: 'https://github.com/antai0926/Hawaii-Rent',
    },
    {
      imgClass: 'antai-resume',
      title: 'Antai Resume',
      description:
        '安泰個人的履歷網頁，使用React，以CSS Flex and Grid進行切版，搭配Media Query進行RWD製作，Style部分使用SCSS進行撰寫。',
      demoUrl: 'https://antai-react-resume.netlify.app/',
      githubUrl: 'https://github.com/antai0926/Antai-React-Resume',
    },
  ];
  return (
    <Section>
      <SectionTitle>作品集</SectionTitle>
      <div className="portfolio">
        {cards.map((card) => (
          <Card
            key={card.title}
            imgClass={card.imgClass}
            title={card.title}
            description={card.description}
            demoUrl={card.demoUrl}
            githubUrl={card.githubUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;

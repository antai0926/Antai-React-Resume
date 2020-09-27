import React from 'react';
import './Profile.styles.scss';

//Components
import Section from '../Section/Section.component';

//Image or Icons
import Avatar from '../../assets/img/avatar.jpg';
import GitHubIcon from '../../assets/img/github.svg';
import EnvelopeIcon from '../../assets/img/envelope-o.svg';
import PhoneIcon from '../../assets/img/phone.svg';

const Profile = () => {
  return (
    <Section>
      <div>
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
      <div>
        <div className="my-name">李安泰</div>
        <div className="my-title">Web 軟體工程師</div>
        <div className="links">
          <div className="link-item">
            <img src={GitHubIcon} alt="github-link" />
            <a href="https://github.com/antai0926">Antai's Git Hub</a>
          </div>
          <div className="link-item">
            <img src={EnvelopeIcon} alt="e-mail" />
            <a href="mailto:antai0926@gmail.com">antai0926@gmail.com</a>
          </div>
          <div className="link-item">
            <img src={PhoneIcon} alt="phone" />
            <a href="tel:0978-826-715">0978-826-715</a>
          </div>
        </div>
        <p>
          畢業於暨南大學電機系碩士班，曾擔任一年的韌體工程師，後來發現自己的興趣是Web，進入資策會Java班進修，於資策會完畢後開始進行Web旅程，擔任全端工程師，工作旅程中也接觸到其他不同程式語言如Python及PLC(可程式邏輯控制器)，因為小孩即將出生，想要找純遠端的工作，較為彈性。經搜尋台灣遠端工作的職缺，決定往Javascript(前端、後端、全端)方向前進，目前正在Udemy全職進修前後端技能，如React、Redux、Material-UI、Node.js、Express、MongoDB、Mongoose、Firebase...等，並做出一些作品展示，希望可以獲得遠端工作的機會。
        </p>
      </div>
    </Section>
  );
};

export default Profile;

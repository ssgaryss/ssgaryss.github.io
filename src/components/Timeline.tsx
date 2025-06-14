import React from "react";
import { useTranslation } from 'react-i18next';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserGraduate, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const { t } = useTranslation();
  
  return (
    <div id="history">
      <div className="items-container">
        <h1>{t('HomePage.History.Title')}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024.10 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">{t('HomePage.History.Time3.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('HomePage.History.Time3.subtitle')}</h4>
            <p>
              {t('HomePage.History.Time3.content')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023.9 - 2026.6"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}
          >
            <h3 className="vertical-timeline-element-title">{t('HomePage.History.Time2.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('HomePage.History.Time2.subtitle')}</h4>
            <p>
              {t('HomePage.History.Time2.content')}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019.9 - 2023.6"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('HomePage.History.Time1.title')}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('HomePage.History.Time1.subtitle')}</h4>
            <p>
              {t('HomePage.History.Time1.content')}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
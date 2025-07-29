import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID!;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics(): null {
  const location = useLocation();

  // 获取虚拟路径，去掉 "#" 部分
  const getVirtualPath = () => {
    // React Router 会管理 hash，所以直接使用 location.hash 来处理
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  // 初次加载：插入脚本并发一次 config（含 page_view）
  useEffect(() => {
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args) => window.dataLayer!.push(args);

      window.gtag('js', new Date());
      // 初次配置时发一次 page_view
      window.gtag('event', 'page_view', {
        send_to: GA_ID,
        page_path: getVirtualPath(),
        page_location: window.location.href,
      });
    }
  }, []);

  // 每次 hash 改变时，上报新的 page_view
  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      send_to: GA_ID,
      page_path: getVirtualPath(),
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.hash]);  // 监听 location.hash 的变化

  return null;
}

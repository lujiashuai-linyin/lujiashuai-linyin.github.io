import Guide from '@/components/Guide';
import { PageContainer } from '@ant-design/pro-components';
import { FloatButton } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './index.less';
import './index.less';

const HomePage: React.FC = () => {
  const [menus, setMenus] = useState([{title: "个人履历", value: "/profile-notes"}, {title: "项目中心", value: "/project-list"}, {title: "阅读书阁", value: "/book-space"}, {title: "音乐收藏", value: "/music-space"}])
  const [desc, setDesc] = useState(
            <div style={{fontSize: "18px", fontWeight: "4px", color: "#ccc"}}>
                <p>找到对的方向&emsp;&emsp;然后全力以赴</p>
                <p>这就是成功的秘诀</p>
            </div>
  )
  const [playing, setPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null);

  // 处理音乐切换
  const handlePlayClick = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current?.pause();
      setPlaying(false);
    }
  };

  return (
    <PageContainer className={styles.home}>
      <div className={styles.container}>
        <Guide avatar="/avatar.jpg" desc={desc} name={'林音三弦'} menus={menus}/>
        <FloatButton icon={
            <div></div>
          }
          onClick={handlePlayClick}
          className={playing? "ant-float-btn-body": "ant-float-btn-body-close"}
          style={{ top: 24, left: 40 }}
           />
          <audio ref={audioRef} src="https://ys.mihoyo.com/main/_nuxt/medias/video-bgm.d8637316.mp3" />
      </div>
    </PageContainer>
  );
};

export default HomePage;

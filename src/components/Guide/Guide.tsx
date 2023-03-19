import { Avatar, Col, Layout, Row } from 'antd';
import React from 'react';
import styles from './Guide.less';
import { Link } from '@umijs/max';

interface Menu {
  title: string;
  value: string;
}

interface Props {
  avatar: string;
  desc: any;
  name: string;
  menus: Menu[]
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { avatar, desc, name, menus } = props;
  return (
    <div className={styles.homemessage}>
      <Row>
        <Col className={styles.avatar} span={8} offset={8}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={avatar}
          />
        </Col>
      </Row>
      <Row gutter={[0, { xs: 16, sm: 24, md: 32, lg: 64 }]}>
        <Col className={styles.spaceup} span={6} offset={12}></Col>
      </Row>
      <Row gutter={[0, { xs: 16, sm: 24, md: 32, lg: 64 }]}>
        <Col className={styles.name} span={6} offset={9}>{name}</Col>
      </Row>
      <Row gutter={[0, { xs: 16, sm: 24, md: 32, lg: 64 }]}>
        <Col className={styles.desc} span={8} offset={8}>{desc}</Col>
      </Row>
      <Row gutter={[0, { xs: 16, sm: 24, md: 32, lg: 64 }]}>
        <Col className={styles.spacedown} span={6} offset={12}></Col>
      </Row>
      <Row gutter={[0, { xs: 16, sm: 24, md: 32, lg: 64 }]}>
        <Col className={styles.menus} span={8} offset={8}>{menus.map((item, index) => (
          <Link key={index} className={styles.menu} to={item.value}>{item.title}</Link>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Guide;

import { FC } from 'react';
import styles from './basetemplate.module.css';

export interface IBaseTemplateProps {
  stringProps: string;
}

const BaseTemplate: FC<IBaseTemplateProps> = ({ stringProps }) => {
  return <div className={styles.container}>{stringProps}</div>;
};

export default BaseTemplate;

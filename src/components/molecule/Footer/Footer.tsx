import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import GetContent from 'src/services/Content';
import { IGlobal } from 'models/Content';

interface FooterContentProps {
  data: IGlobal;
}

const FooterContent = ({data}:FooterContentProps) => {
  const { footer, brand } = data;
  const year = (new Date()).getFullYear();

  const formatLine = (line:string,key:string):JSX.Element => {
    let text = line.split('{YEAR}').join(year.toString()).split('{BRAND}').join(brand);
    return <p key={`footerLine${key}`} dangerouslySetInnerHTML={{__html: text}}></p>
  }

  return (<>
    {
      footer?.content.map((content, index) => {
        return formatLine(content,index.toString());
      })
    }
    {formatLine(footer?.copyright, 'copyright')}
    <div className={styles.linkList}>
      <ul>
        {footer?.links.map((link, index) => {
          return (
            <li key={`footerLink${index}`}>
              <Link href={link.url}>{
                link.title
              }</Link>
            </li>
          )}
        )}
      </ul>
    </div>
  </>)
}

const Footer = () => {
  const [data, setData] = useState<any>(null);
  GetContent('globals').then((res) => setData(res));
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {!data && (<></>)}
        {data && (<FooterContent data={data} />)}
      </div>
    </footer>
  )
}
export default Footer;
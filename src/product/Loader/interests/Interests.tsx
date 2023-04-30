import Button from 'atom/Button';
import ButtonGrid from 'molecule/ButtonGrid';
import styles from './Interests.module.css';

const buttons = [
  { label: 'Contact Info', image: '/img/icons/Email.svg' },
  { label: 'Criminal Records', image: '/img/icons/handcuffs.svg' },
  { label: 'Social Profiles', image: '/img/icons/SocialMedia.svg' },
  { label: 'Family or Associates', image: '/img/icons/network.svg' },
  { label: 'Financial Records', image: '/img/icons/money.svg' },
  { label: 'Properties', image: '/img/icons/property.svg' },
];

export interface InterestsProps {
}

const Interests = ({}:InterestsProps) => {
  return (
    <div className={styles.interests}>
      <h1>What Information are you interested in?</h1>
      <ButtonGrid multiselect={true} submitLabel="Continue" selectAll={true} buttons={buttons} />
      <Button format="Underline" label="Skip" />
    </div>
  )
}
export default Interests;
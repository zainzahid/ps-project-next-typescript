import Button from 'atom/Button';
import styles from './Question.module.css';
import Field, {FieldProps} from 'atom/Field';


export interface QuestionProps {
  title: string;
  fields: FieldProps[];
  skip?: boolean;
}

const Question = ({title,fields,skip=false}:QuestionProps) => {
  return (
    <div className={styles.question}>
      <h1>{title}</h1>
      <div className={styles.row}>
        {fields.map((field,index) => (
          <div key={index} className={styles.field}>
            <Field {...field} />
          </div>
        ))}
        <Button className={styles.button} format="Filled" label="Continue" />
        <Button className={`${styles.button} ${styles.notSure}`} format="Outlined" label="I'm Not Sure" />
      </div>
    </div>
  )
}

export default Question;
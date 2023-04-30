import styles from './Field.module.css';

export interface Option {
  value:string;
  label:string;
}

export interface FieldProps {
  name:string;
  type:'text'|'number'|'select'|'date'|'checkbox'|'phone'|'radio'|'email'|'password'|'textarea';
  placeholder?:string;
  options?:Option[];
  id?:string;
  className?:string;
  required?:boolean;
  defaultValue?:string;
  onChange?:(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => void;
}

const Field = ({name,type,placeholder,onChange,className,id,defaultValue,options}:FieldProps) => {
  const cssClass = [styles.field,styles[type],className || '' ].join(' ');
  switch(type) {
    case 'select':
      return (
        <select placeholder={placeholder} required id={id} title={placeholder} value={defaultValue} className={cssClass} name={name} onChange={onChange}>
          <option value="" disabled selected hidden>{placeholder}</option>
          {options?.map((option,index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      )
    case 'checkbox':
      return (<input placeholder={placeholder} required id={id} value={defaultValue} title={placeholder} className={cssClass} type={type} name={name} onChange={onChange} />)
    case 'radio':
    case 'textarea':
      return (<textarea placeholder={placeholder} id={id} value={defaultValue} className={cssClass} name={name} onChange={onChange} />)
    default:
      return (<input placeholder={placeholder} id={id} value={defaultValue} className={cssClass} type={type} name={name} onChange={onChange} />)
  }
}
export default Field;
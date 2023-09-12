

interface FormInputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<FormInputProps> = ({ id, type, placeholder, value, onChange }) => {
  return (
    <div className="form-group product-group">
    <input className='form-control reg-control product-control' id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    </div>
  )
}

export default FormInput
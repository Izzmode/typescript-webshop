

const FormInput = ({ ...rest}) => {
  return (
    <div className="form-group product-group">
    <input className='form-control reg-control product-control' {...rest}/>
    </div>
  )
}

export default FormInput
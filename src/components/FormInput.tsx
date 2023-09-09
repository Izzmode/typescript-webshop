

const FormInput = ({ ...rest}) => {
  return (
    <div className="form-group product-group">
    {/* <label className='form-label reg-label product-label' htmlFor={rest.id}>{ label }</label> */}
    <input className='form-control reg-control product-control' {...rest}/>
    </div>
  )
}

export default FormInput
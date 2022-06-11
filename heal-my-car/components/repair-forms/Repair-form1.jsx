import {useNavigate, useOutletContext} from 'react-router-dom'

export const Form1 = () => {
    const { setFormData } = useOutletContext()
    const navigate = useNavigate()
  
    const handleSubmit = e => {
      e.preventDefault()
  
      const { vehicleBrand, vin } = e.target
  
      setFormData({
        vehicleBrand: vehicleBrand.value,
        vin: vin.value,
      })
      navigate('/repair-form/repair-form-2')
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Car Brand:
            <input type="text" name="vehicleBrand" />
          </label>
          <label>
            VIN Number:
            <input type="text" name="vin" />
          </label>
          <button>Przejdź dalej</button>
        </form>
      </div>
    )
  }
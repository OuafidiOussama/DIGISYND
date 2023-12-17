import React from 'react'
import { TextField } from '@mui/material';
import FileBase from "react-file-base64";
import {useFormik} from 'formik'
import { createApartmentSchema } from '../../validators/ApartmentValidation';
import { useDispatch } from 'react-redux';
import { createApartmentAction } from '../../redux/actions/apartmentAction';

export default function ApartmentForm({showForm, handleForm, setShowForm}) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      apartmentNumber: '',
      apartmentFloor: '',
      ownerName: '',
      cin:'',
      picture: ''
    },
    validationSchema: createApartmentSchema,
    onSubmit: (values, actions)=>{
      dispatch(createApartmentAction(values))
      actions.resetForm()
      setShowForm(false)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
    <div className={`w-96 bg-[#d9d9d99a] mr-10 rounded-xl flex flex-col justify-center items-center px-5 gap-5 py-10 my-3  transition-all duration-300 ${showForm ? 'translate-x-0 relative' : '-right-10 translate-x-[1600px] absolute'}`}>
          <p>Create A New Apartment</p>
          <TextField 
            fullWidth
            label="Apartment Number"
            id="apartmentNumber"
            name='apartmentNumber'
            type='number'
            value={formik.values.apartmentNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.apartmentNumber && Boolean(formik.errors.apartmentNumber)}
            helperText={formik.touched.apartmentNumber && formik.errors.apartmentNumber}
            />
          <TextField 
            fullWidth
            label="Apartment Floor"
            id="apartmentFloor"
            name='apartmentFloor'
            type='number'
            value={formik.values.apartmentFloor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.apartmentFloor && Boolean(formik.errors.apartmentFloor)}
            helperText={formik.touched.apartmentFloor && formik.errors.apartmentFloor}
            />
          <TextField 
            fullWidth
            label="Owner Name"
            id="ownerName"
            name='ownerName'
            value={formik.values.ownerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
            helperText={formik.touched.ownerName && formik.errors.ownerName}
            />
          <TextField 
            fullWidth
            label="Owner CIN"
            id="cin"
            name='cin'
            value={formik.values.cin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.cin && Boolean(formik.errors.cin)}
            helperText={formik.touched.cin && formik.errors.cin}
            />
          <FileBase
                type="file"
                name="picture"
                multiple={false}
                onDone={({ base64 }) => formik.setFieldValue('picture', base64)}
              />
              {(formik.touched.picture && formik.errors.picture) ? <div className="text-left pl-4 text-sm text-red-500">{ formik.touched.picture && formik.errors.picture }</div> : ""}
          <button className='w-full h-10 bg-blue-600 rounded-lg text-white text-lg font-bold' type='submit'>Add</button>
          <button className='w-full h-10 bg-red-500 rounded-lg text-white text-lg font-bold' onClick={handleForm} type='cancel'>Cancel</button>
        </div>
        </form>
  )
}

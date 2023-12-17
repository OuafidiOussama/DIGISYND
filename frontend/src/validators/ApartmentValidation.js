import * as yup from 'yup'

export const createApartmentSchema = yup.object({
    apartmentNumber: yup
        .number('Enter The Apartment Number')
        .required('Apartment Number Is Required'),
    apartmentFloor: yup
        .number('Enter The Apartment Floor')
        .required('Apartment Floor Is Required'),
    ownerName: yup
        .string('Enter Apartment Owner Full Name')
        .required('Owner Name is Required'),
    cin: yup
        .string('Enter Apartment Owner CIN')
        .required('Owner CIN is Required'),
    picture: yup
        .string('Enter Apartment Owner Picture')
        .required('Owner Picture is Required'),
})


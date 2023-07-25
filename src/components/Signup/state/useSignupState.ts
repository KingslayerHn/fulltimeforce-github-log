import * as Yup from 'yup';
import { emailRegex, passwordRegex } from '../../../utils/regex';
import { useAppDispatch } from '../../../store/hook/hook';
import { useFormik } from 'formik';
import { createUser } from '../../../store/actions/thunk/auth/auth-thunk.actions';

const validationSchema = Yup.object({
  firstName: Yup.string().required('* Campo requerido'),
  lastName: Yup.string().required('* Campo requerido'),
  email: Yup.string()
    .required('* Campo requerido')
    .matches(emailRegex, 'Ingrese un correo válido'),

  password: Yup.string()
    .required('* Campo requerido')
    .matches(passwordRegex, 'Ingrese una constraseña valida'),
});

const useSignupState = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(createUser(values))
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return {
    formik,
  };
};

export default useSignupState;

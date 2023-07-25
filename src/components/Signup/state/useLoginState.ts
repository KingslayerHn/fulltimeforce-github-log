import * as Yup from 'yup';
import { emailRegex, passwordRegex } from '../../../utils/regex';
import { useAppDispatch } from '../../../store/hook/hook';
import { useFormik } from 'formik';
import { loginUser } from '../../../store/actions/thunk/auth/auth-thunk.actions';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('* Campo requerido')
    .matches(emailRegex, 'Ingrese un correo válido'),

  password: Yup.string()
    .required('* Campo requerido')
    .matches(passwordRegex, 'Ingrese una constraseña valida'),
});

const useLoginState = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginUser({ email: values.email, password: values.password }))
        .unwrap()
        .then((res) => {
          navigate('/home');
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

export default useLoginState;

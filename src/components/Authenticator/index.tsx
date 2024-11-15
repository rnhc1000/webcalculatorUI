import './styles.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Fade } from 'react-awesome-reveal';
import DatePipe from '../DatePipe';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {CredentialsDTO} from '../../models/auth'
interface Values {

    email: string;
    password: string;

}

const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short! - Minimum 8 characters!')
      .required('Enter a valid password'),
    email: Yup.string().email('Invalid email').required('Enter a valid email!'),
  });

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default function Authenticator() {
    const navigate = useNavigate();
    return (
        <section>
            <Fade>
                <DatePipe/>
                <div className="login-form">

                    <Formik
                        initialValues={{
                            password: '',
                            username: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(

                            _values: CredentialsDTO,        

                            { setSubmitting }: FormikHelpers<CredentialsDTO>
                        ) => {
                            setTimeout(() => {
                                navigate("/maths");
                                setSubmitting(false);
                                console.log(_values);
                            }, 500);
                        }}
                    >
                         {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Enter an email"
                                type="email"
                            />
                             <p className="form-error">{errors.email && touched.email ? <div>{errors.email}</div> : null}</p>


                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Provide a password"
                                type="password" />
                            <p className="form-error">{errors.password && touched.password ? <div>{errors.password}</div> : null}</p>
                            {/* <ColorButton type="submit" size="small" variant="contained">Enter</ColorButton> */}

                            <button type="submit">&nbsp;Authenticate&nbsp;</button>
                        </Form>
                         )}
                    </Formik>
                </div>
            </Fade>
        </section>);
}

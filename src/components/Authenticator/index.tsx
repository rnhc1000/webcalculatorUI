import './styles.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Fade } from 'react-awesome-reveal';
import DatePipe from '../DatePipe';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface Values {

    email: string;
    password: string;

}

const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

export default function Authenticator() {
    const navigate = useNavigate();
    return (
        <section>
            <Fade>
                <DatePipe></DatePipe>
                <div className="login-form">

                    <Formik
                        initialValues={{
                            password: '',
                            email: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(

                            _values: Values,        

                            { setSubmitting }: FormikHelpers<Values>
                        ) => {
                            setTimeout(() => {
                                navigate("/maths");
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                         {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                             <p className="form-error">{errors.email && touched.email ? <div>{errors.email}</div> : null}</p>


                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password" />
                            <p className="form-error">{errors.password && touched.password ? <div>{errors.password}</div> : null}</p>
                            <button type="submit">Submit</button>
                        </Form>
                         )}
                    </Formik>
                </div>
            </Fade>
        </section>);
}

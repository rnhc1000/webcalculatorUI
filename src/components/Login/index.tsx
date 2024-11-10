import './styles.css';
import { Formik } from 'formik';
import DatePipe from '../DatePipe';
import Fade from 'react-awesome-reveal';

export default function Login() {

    const initialValues = { email: "", password: "" };
    

    const validate = (values: { email?: string; password?: string; }) => {
        const errors = {
            email: "",
            password: ""
        };
        if (!values.email) {
            errors.email = 'Enter a valid email';
        }
        if (!values.password) {
            errors.password = 'Enter a valid password';
        }

        return errors;
    }

    const handleSubmit = (values: { email: string; password: string; }, setSubmitting: { (isSubmitting: boolean): void; (arg0: boolean): void; } ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return (
        <section>
            <Fade>
                <DatePipe />
                <div className="login-form">
                    <Formik
                        initialValues={initialValues}
                        validate={values => validate(values)}
                        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)} >{
                            ({
                                values,
                                errors,
                                touched,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                
                            }) => (
                                <form onSubmit={handleSubmit}>

                                    <label htmlFor="email">Enter your email</label>
                                    <p className="form-error">{errors.email && touched.email && errors.email}</p>
                                    <input type="email" id="email" name="email" placeholder="joe@doe.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} />

                                    <label htmlFor="password">Enter your password</label>
                                    <p className="form-error">{errors.password && touched.password && errors.password}</p>
                                    <input type="password" id="password" name="password" placeholder="********"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} />

                                    <div>
                                        <button type="submit" className="underlineHover" disabled={isSubmitting}>
                                            &nbsp;Authenticate...&nbsp;
                                        </button>
                                        <br />
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                </div>
            </Fade>
        </section>
    );
};
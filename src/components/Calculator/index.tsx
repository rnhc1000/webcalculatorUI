
import './styles.css';
import { Formik, Field, Form, FormikHelpers, useField } from 'formik';
import { Fade } from 'react-awesome-reveal';
import DatePipe from '../DatePipe';
import * as Yup from 'yup';
import styled from "@emotion/styled";



interface Values {

    operator: string;
    operandOne: string;
    operandTwo: string;

}

const CalculatorSchema = Yup.object().shape({
    operator: Yup.string()
        .required('Required')
});

const Select = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
};

// Styled components ....
const StyledSelect = styled.select`
color: whitesmoke;
background-color: black;
`;

const StyledErrorMessage = styled.div`
// font-size: 12px;
// color: var(--red-600);
// width: 400px;
// margin-top: 0.25rem;
// &:before {
//   content: "❌ ";
//   font-size: 10px;
// }
// @media (prefers-color-scheme: dark) {
//   color: var(--red-300);
// }
`;

const StyledLabel = styled.label`
margin-top: 0.25rem;
`;

export default function Calculator() {


    return (
        <section>
            <Fade>
                <DatePipe></DatePipe>
                <div className="login-form">

                    <Formik
                        initialValues={{
                            operandOne: '',
                            operandTwo: '',
                            operator: '',
                        }}
                        validationSchema={CalculatorSchema}
                        onSubmit={(

                            values: Values,

                            { setSubmitting }: FormikHelpers<Values>
                        ) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Select label="Select an operator" name="operator" id="operator">
                                <option value="">Select an operation!</option>
                                    <option value="addition">Addition(+)</option>
                                    <option value="subtraction">Subtraction(−)</option>
                                    <option value="multiplication">Multiplication(⨯)</option>
                                    <option value="division">Division(÷)</option>
                                    <option value="square_root">Square Root(√)</option>
                                    <option value="random_string">Random Words(⩜)</option>
                                </Select>
                                <p className="form-error">{errors.operator && touched.operator ? <div>{errors.operator}</div> : null}</p>

                                <label htmlFor="operandOne">operandOne</label>
                                <Field
                                    id="operandOne"
                                    name="operandOne"
                                    placeholder="operandOne"
                                    type="number" />
                                <p className="form-error">{errors.operandOne && touched.operandOne ? <div>{errors.operandOne}</div> : null}</p>

                                <label htmlFor="operandTwo">operandTwo</label>
                                <Field
                                    id="operandTwo"
                                    name="operandTwo"
                                    placeholder="operandTwo"
                                    type="number" />
                                <p className="form-error">{errors.operandTwo && touched.operandTwo ? <div>{errors.operandTwo}</div> : null}</p>

                                <button type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Fade>
        </section>);
}

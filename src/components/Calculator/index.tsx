
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
        .required('Select an operation!'),
    operandOne: Yup.string()
    .max(16, 'Number too large!'),
    operandTwo: Yup.string()
    .max(16, 'Number too large!')

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


// const StyledSelect = styled.select`
//   color: var(--blue);
// `;


// Styled components ....
const StyledSelect = styled.select`
color: var(--white);
background-color: rgba(0, 0, 0, 0.75);
font-size: 1.25rem;
padding-left: 0.5rem;
padding-top: 0.1rem;
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
margin: 0 auto;
text-align: left;

`;

export default function Calculator() {


    return (
        <section>
            <Fade>
                <DatePipe />
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
                            <Form className="login-form">
                                <Select label="" name="operator" id="operator">
                                    <option value="">Select an operation!</option>
                                    <option value="addition">Addition(+)....................<em>$1.99</em></option>
                                    <option value="subtraction">Subtraction(−)..............$2.49</option>
                                    <option value="multiplication">Multiplication(⨯).........$3.99</option>
                                    <option value="division">Division(÷).....................$4.99</option>
                                    <option value="square_root">Square Root(√)............$7.99</option>
                                    <option value="random_string">Random Words(⩜).....$9.99</option>
                                </Select>
                                <p className="form-error">{errors.operator && touched.operator ? <div>{errors.operator}</div> : null}</p>

                                <label htmlFor="operandOne"></label>
                                <Field
                                    id="operandOne"
                                    name="operandOne"
                                    maxLength="16"
                                    placeholder="Enter a number"
                                    type="number" />
                                <p className="form-error">{errors.operandOne && touched.operandOne ? <div>{errors.operandOne}</div> : null}</p>

                                <label htmlFor="operandTwo"></label>
                                <Field
                                    id="operandTwo"
                                    name="operandTwo"
                                    maxLength="16"
                                    placeholder="Enter a number"
                                    type="number" />
                                <p className="form-error">{errors.operandTwo && touched.operandTwo ? <div>{errors.operandTwo}</div> : null}</p>

                                <button type="submit">Process it!</button>
                            </Form>

                        )}
                    </Formik>
                </div>
            </Fade>
        </section>);
}

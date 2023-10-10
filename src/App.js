import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.name) {
            errors.name = 'Reqiured name';
          }
          else if (values.name === 'admin') {
            errors.name = 'Nice try, but no ;)';
          }

          if (!values.phone) {
            errors.phone = 'Require valid phone number';
          } else if (!/^\+\d{12}$/.test(values.phone)) {
            errors.phone = 'Invalid phone number';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Name</label><br />
            <Field type="text" name="name" /><br />
            <ErrorMessage name="name" component="div" />
            <label>Email</label><br />
            <Field type="email" name="email" /><br />
            <ErrorMessage name="email" component="div" />
            <label>Phone</label><br />
            <Field type="phone" name="phone" />
            <ErrorMessage name="phone" component="div" /><br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

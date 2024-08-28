import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../features/authSlice'; 

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const initialValues = {
    email: '',
    password: '',
    phone: '',
    address: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Required'),
    address: Yup.string()
      .min(10, 'Address must be at least 10 characters')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const userData = await fakeLogin(values.email, values.password);
      dispatch(loginUser(userData));
      navigate(from, { replace: true });  // Redirect to the previous page or default
    } catch (error) {
      console.error('Login failed:', error.message);
    }
    setSubmitting(false);
  };

  const fakeLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password123') {
          resolve({ email, phone: '1234567890', address: '123 Main St' });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700">
                  Address
                </label>
                <Field
                  as="textarea"
                  name="address"
                  id="address"
                  rows="3"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-200"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;

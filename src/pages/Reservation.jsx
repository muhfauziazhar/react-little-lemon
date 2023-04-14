import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Reservation = () => {
  const input = {
    name: '',
    adult: '',
    children: '',
    date: '',
    time: '',
    phoneNumber: '',
    email: '',
    specialRequest: '',
  };

  const [isLoading, setIsLoading] = React.useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    adult: Yup.number().required('Adult is required'),
    children: Yup.number(),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    specialRequest: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    setTimeout(() => {
      alert(`Thank you for your message, ${values.name}! Your message: ${values.message}`);
      setIsLoading(false);
      resetForm({ values: '' });
    }, 2000);
  };

  const formik = useFormik({
    initialValues: input,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, { resetForm });
    },
  });

  return (
    <section id="about" className="reservation-wrapper w-4/5 xl:w-full mx-auto">
      <h1 className="section-heading">Table Reservation</h1>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="grid grid-cols-1 mb-2">
          <div>
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
              type="text"
              className={
                formik.errors.name && formik.touched.name
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Your name"
            />
            {formik.errors.name && formik.touched.name ? <p className="text-red-500">{formik.errors.name}</p> : null}
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="mb-2 lg:mr-2">
            <input
              onChange={formik.handleChange}
              value={formik.values.date}
              name="date"
              type="date"
              className={
                formik.errors.date && formik.touched.date
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Date"
            />
            {formik.errors.date && formik.touched.date ? <p className="text-red-500">{formik.errors.date}</p> : null}
          </div>
          <div className="mb-2 lg:ml-2">
            <input
              onChange={formik.handleChange}
              value={formik.values.time}
              name="time"
              type="time"
              className={
                formik.errors.time && formik.touched.time
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Your time"
            />
            {formik.errors.time && formik.touched.time ? <p className="text-red-500">{formik.errors.time}</p> : null}
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="mb-2 lg:mr-2">
            <input
              onChange={formik.handleChange}
              value={formik.values.adult}
              name="adult"
              type="number"
              className={
                formik.errors.adult && formik.touched.adult
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Adult"
            />
            {formik.errors.adult && formik.touched.adult ? <p className="text-red-500">{formik.errors.adult}</p> : null}
          </div>
          <div className="mb-2 lg:ml-2">
            <input
              onChange={formik.handleChange}
              value={formik.values.children}
              name="children"
              type="number"
              className={
                formik.errors.children && formik.touched.children
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Children"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="mb-2 lg:mr-2">
            <input
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              name="phoneNumber"
              type="number"
              className={
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Your Phone Number"
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className="text-red-500">{formik.errors.phoneNumber}</p> : null}
          </div>
          
          <div className="mb-2 lg:ml-2">
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              type="email"
              className={
                formik.errors.email && formik.touched.email
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Your email"
            />
            {formik.errors.email && formik.touched.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex relative ">
            <textarea
              onChange={formik.handleChange}
              value={formik.values.specialRequest}
              name="specialRequest"
              type="text"
              className={
                formik.errors.specialRequest && formik.touched.specialRequest
                  ? 'rounded-lg flex-1 appearance-none border border-red-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
                  : 'rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent'
              }
              placeholder="Special Request"
              rows={4}
            />
          </div>
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            style={{ backgroundColor: '#4c5c54' }}
            className="py-2 px-4 flex justify-center hover:scale-110  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg "
          >
            {isLoading && <Spinner />}
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Reservation;

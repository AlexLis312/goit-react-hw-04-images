import { Formik, Form, Field } from 'formik';
import styles from './Searchbar.module.css';
import { HiOutlineSearch } from 'react-icons/hi';

export const Searchbar = ({ onSubmit }) => {
  const { Searchbar, SearchForm, SearchFormButton, SearchFormInput } = styles;
  const handleSubmit = async ({ value }, actions) => {
    await onSubmit(value);
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ value: '' }} onSubmit={handleSubmit}>
        <header className={Searchbar}>
          <Form className={SearchForm}>
            <button type="submit" className={SearchFormButton}>
              <HiOutlineSearch size={22} />
            </button>

            <Field
              className={SearchFormInput}
              type="text"
              name="value"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </header>
      </Formik>
    </div>
  );
};

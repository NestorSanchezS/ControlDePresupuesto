import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [valueFormModal, setValueFormModal] = useState(initialForm);
  const [error, setError] = useState({});

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    setValueFormModal({
      ...valueFormModal,
      [name]: value,
    });
  };

  const handleSubmitFormModal = (e) => {
    e.preventDefault();
    setError(validateForm(valueFormModal));
    setValueFormModal(initialForm);
  };

  const handleInputBlur = ({ target }) => {
    handleInputChange({ target });
    setError(validateForm(valueFormModal));
  };

  return {
    valueFormModal,
    error,
    handleInputChange,
    handleSubmitFormModal,
    handleInputBlur,
    setValueFormModal,
  };
};

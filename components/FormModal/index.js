// import React from 'react';
// import Modal from '../modalEdit';
// import { FormProvider } from '../hook-form/FormProvider';
// import { useForm, useFieldArray } from 'react-hook-form';
// import * as Yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";

// import { FormStyle } from "./styles";

// const FormModal = ({
//   validateFields = {},
//   defaultValues = {},
//   onSubmit,
//   onOk,
//   onCloseModal,
//   children,
//   ...props
// }) => {
//   const validateSchema = Yup.object().shape(validateFields);

//   const methods = useForm({
//     resolver: yupResolver(validateSchema),
//     mode: 'onChange',
//     defaultValues: React.useMemo(() => { return defaultValues }, [defaultValues]),
//   });

//   const {
//     handleSubmit,
//     formState: { isValid },
//     reset,
//   } = methods;

//   const childrenWithProps = React.Children.map(children, child => {
//     if (React.isValidElement(child)) {
//       return React.cloneElement(child, {
//         ...methods,
//         useFieldArray,
//       });
//     }
//     return child;
//   });

//   return (
//     <Modal
//       confirmDisabled={!isValid}
//       onOk={() => {
//         if (onSubmit) handleSubmit(onSubmit)();
//         if (onOk) onOk();
//       }}
//       onCloseModal={() => {
//         reset();
//         onCloseModal();
//       }}
//       {...props}
//     >
//       <FormStyle>
//         <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//           {childrenWithProps}
//         </FormProvider>
//       </FormStyle>
//     </Modal>
//   )
// }

// export default FormModal

import React from 'react';
import ModalEdit from '../modalEdit';
import FormProvider from '../hook-form/FormProvider';
import { useForm, useFieldArray } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStyle } from './styles';

const FormModal = ({
  validateFields = {},
  defaultValues = {},
  onSubmit,
  onOk,
  onCloseModal,
  children,
  ...props
}) => {
  const validateSchema = Yup.object().shape(validateFields);

  const methods = useForm({
    resolver: yupResolver(validateSchema),
    mode: 'onChange',
    defaultValues: React.useMemo(() => { return defaultValues }, [defaultValues]),
  });

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...methods,
        useFieldArray,
      });
    }
    return child;
  });

  return (
    <ModalEdit
      confirmDisabled={!isValid}
      onOk={() => {
        if (onSubmit) handleSubmit(onSubmit)();
        if (onOk) onOk();
      }}
      onCloseModal={() => {
        reset();
        onCloseModal();
      }}
      {...props}
    >
      <FormStyle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {childrenWithProps}
        </FormProvider>
      </FormStyle>
    </ModalEdit>
  )
}

export default FormModal

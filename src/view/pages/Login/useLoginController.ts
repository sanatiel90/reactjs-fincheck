import { useForm } from "react-hook-form";

//hook para encapsular os states do form, que serao gerenciados pelo react-hook-forms
export function useLoginController() {
  const { handleSubmit, register } = useForm()

  const formHandleSubmit = handleSubmit(() => {
    console.log('form submetido')
  })

  return { formHandleSubmit, register }
}
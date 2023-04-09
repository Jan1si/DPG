import React from 'react';
import { useForm} from "react-hook-form";

const App = () => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <div className="App">
            <div className="container">
                <div className="helloBlock">
                    <h1>Hello</h1>
                </div>
                <div className="formBlock">
                    <div className="helloBlockAdaptive">
                        <h1>Hello</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="info">
                            <p className="baseText">For business enquiries please use the form below</p>
                            <p className="promtText">Required</p>
                        </section>
                        <section className="inputBlock">
                            <div className="inputGroup">
                                <label className="labelInput requiredInput" htmlFor="name">Name</label>
                                <input
                                {...register('name', {
                                    required: "Поле обязательно к заполнению!",
                                })}
                                type="text"/>
                                <div className="error">
                                    {errors?.name && <p>{errors.name.message}</p>}
                                </div>
                            </div>
                            <div className="inputGroup">
                                <label className="labelInput requiredInput" htmlFor="company">Company</label>
                                <input
                                {...register('company',{
                                    required: "Поле обязательно к заполнению!",
                                })}
                                type="text"/>
                                <div className="error">
                                    {errors?.company && <p>{errors.company.message}</p>}
                                </div>
                            </div>
                            <div className="inputGroup">
                                <label className="labelInput requiredInput" htmlFor="email">E-mail</label>
                                <input
                                {...register('email',{
                                    required: "Поле обязательно к заполнению!",
                                    pattern: {
                                        value :/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
                                        message: "Некорректный адрес электронной почты!"
                                    }
                                })}
                                type="email"/>
                                <div className="error">
                                    {errors?.email && <p>{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="inputGroup">
                                <label className="labelInput" htmlFor="phone">Phone</label>
                                <input {...register('phone', {
                                   pattern: {
                                       value : /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g,
                                       message: "Некорректный номер телефона!"
                                   },
                                    minLength: {
                                        value: 11,
                                        message: "Минимальное число символов 11!"
                                    },
                                })} type="tel" />
                                <div className="error">
                                    {errors?.phone && <p>{errors.phone.message || "Error"}</p>}
                                </div>
                            </div>
                            <div className="inputGroup">
                                <label className="labelInput " htmlFor="subject">Subject</label>
                                <input {...register('subject')} type="text" />
                            </div>
                            <div className="inputGroup">
                                <label className="labelInput requiredInput" htmlFor="message">Message</label>
                                <textarea {...register('message', {
                                    required: "Поле обязательно к заполнению!",
                                    minLength: {
                                        value: 20,
                                        message: "Минимум 20 символов!"
                                    },
                                    maxLength: {
                                        value: 150,
                                        message: "Максимум 150 символов!"
                                    }
                                })}></textarea>
                                <div className="error">
                                    {errors?.message && <p>{errors.message.message}</p>}
                                </div>
                            </div>
                            <div className="checkBoxGroup">
                                <div className="checkbox-wrapper">
                                    <input
                                        id="customCheckBox"
                                        {...register('accept', {
                                            required: true
                                        })}
                                        type="checkbox"/>
                                    <span></span>
                                    <label htmlFor='customCheckBox'></label>
                                </div>
                                <label htmlFor="accept">I accept <p className='link'>Terms and Privacy Policy</p> </label>
                            </div>
                            <input type='submit'
                               disabled={!isValid}
                               className="btnSend"
                               value="Send"/>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;

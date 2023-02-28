import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const AddAccount = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        nome: "",
        cognome: "",
        // password: "",
        email: "",
        telefono: "",
    });

    const onSubmit = (data) => console.log(data);

    const permessi = [
        { label: "Utente", value: "Utente" },
        { label: "Project Manager", value: "Project Manager" },
        { label: "Admin", value: "Admin" },
        { label: "SuperAdmin", value: "SuperAdmin" },
    ];

    return (
        <form className="fd-addtask fd-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="fd-form__wrapper">
                <label htmlFor="Nome">
                    Nome <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.nome
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="Nome"
                    type="text"
                    placeholder="Inserisci un nome"
                    {...register("nome", { required: true })}
                />
                {errors.nome && (
                    <p className="fd-form__error">Inserire un nome valido</p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Cognome">
                    Cognome <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.cognome
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="Cognome"
                    type="text"
                    placeholder="Inserisci un cognome"
                    {...register("cognome", { required: true })}
                />
                {errors.cognome && (
                    <p className="fd-form__error">Inserire un cognome valido</p>
                )}
            </div>
            {/* <div className="fd-form__wrapper">
                <label htmlFor="Password">
                    Password <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.password
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="Password"
                    type="password"
                    placeholder="Inserisci una password"
                    {...register("password", { required: true, maxLength: 20 })}
                />
                {errors.password && (
                    <p className="fd-form__error">
                        Inserire una password di massimo 20 caratteri
                    </p>
                )}
            </div> */}
            <div className="fd-form__wrapper">
                <label htmlFor="Email">
                    Email <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.email
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="Email"
                    type="text"
                    placeholder="Inserisci una email valida"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <p className="fd-form__error">Inserire una email valida</p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Telefono">
                    Telefono <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.telefono
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="telefono"
                    type="text"
                    placeholder="Inserisci un recapito di telefono valido"
                    {...register("telefono", { required: true })}
                />
                {errors.telefono && (
                    <p className="fd-form__error">
                        Inserisci un recapito di telefono valido
                    </p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Permessi">
                    Permessi <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="permessi"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={permessi}
                            placeholder="Seleziona una tipologia di permesso per questo utente"
                            required
                            onChange={onChange}
                            isMulti={false}
                            onBlur={onBlur}
                            value={value}
                            name={name}
                            ref={ref}
                        />
                    )}
                />
            </div>
            <div className="fd-form__wrapper">
                <button type="submit" className="fd-form__submit full large">
                    Crea Utente
                </button>
            </div>
        </form>
    );
};

export default AddAccount;

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const AddTask = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        title: "",
        description: "",
        project: "",
        state: "",
        type: "",
        priority: "",
    });

    const onSubmit = (data) => console.log(data);

    const statoLavorazione = [
        { label: "Aperto", value: "Aperto" },
        { label: "In Lavorazione", value: "In Lavorazione" },
        { label: "Chiuso", value: "Chiuso" },
        { label: "Da Definire", value: "Da Definire" },
    ];

    const progetti = [
        { label: "Abbecedario", value: "Abbecedario" },
        { label: "Trenitalia", value: "Trenitalia" },
        { label: "Intesa San Paolo", value: "Intesa San Paolo" },
        { label: "Altro", value: "Altro" },
    ];

    const utentiDaAssegnare = [
        { label: "Mario Preti", value: "Mario Preti" },
        { label: "Andre Presti", value: "Andre Presti" },
        { label: "Alex Eubach", value: "Alex Eubach" },
        { label: "Renato Bianchi", value: "Renato Bianchi" },
        { label: "Mario Rossi", value: "Mario Rossi" },
        { label: "Luigi Verdi", value: "Luigi Verdi" },
    ];

    const priorities = [
        { label: "Molto Bassa (1)", value: "Molto Bassa (1)" },
        { label: "Bassa (2)", value: "Bassa (2)" },
        { label: "Normale (3)", value: "Normale (3)" },
        { label: "Alta (4)", value: "Alta (4)" },
        { label: "Bloccante (5)", value: "Bloccante (5)" },
        { label: "Critica (6)", value: "Critica (6)" },
    ];

    const tipoTask = [
        { label: "Attività", value: "Attività" },
        { label: "Anomalia", value: "Anomalia" },
        { label: "Criticità", value: "Criticità" },
    ];

    return (
        <form className="fd-addtask fd-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="fd-form__wrapper">
                <label htmlFor="NomeTask">
                    Nome Task <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.title
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="NomeTask"
                    type="text"
                    placeholder="Inserisci un nome per il task"
                    {...register("title", { required: true, maxLength: 20 })}
                />
                {errors.title && (
                    <p className="fd-form__error">
                        Inserire un nome per il task di massimo 20 lettere
                    </p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="DescrizioneTask">Descrizione Task</label>
                <input
                    className={
                        !errors.description
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="DescrizioneTask"
                    type="text"
                    placeholder="Inserisci una descrizione per il task"
                    {...register("description")}
                />
                {errors.description && (
                    <p className="fd-form__error">
                        Inserire una descrizione per il task
                    </p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Tipo Task">
                    Tipo Task <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="projectLead"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={tipoTask}
                            placeholder="Seleziona una tipologia di task"
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
                <label htmlFor="Stato Task">
                    Stato Task <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="statoLavorazione"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={statoLavorazione}
                            placeholder="Seleziona uno stato del task"
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
                <label htmlFor="Progetto Assegnato">
                    Progetto Assegnato <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="progetti"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={progetti}
                            placeholder="Seleziona uno o più progetti al quale assegnare il task"
                            required
                            onChange={onChange}
                            isMulti={true}
                            onBlur={onBlur}
                            value={value}
                            name={name}
                            ref={ref}
                        />
                    )}
                />
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Stato Task">
                    Stato Task <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="projectLead"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={statoLavorazione}
                            placeholder="Seleziona uno stato del task"
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
                <label htmlFor="Utenti Assegnati">
                    Utenti Assegnati <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="utentiAssegnati"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={utentiDaAssegnare}
                            placeholder="Seleziona uno o più utenti da assegnare a questo task"
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
                <label htmlFor="Priorità">
                    Priorità <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="priorita"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={priorities}
                            placeholder="Seleziona una priorità per questo task"
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
                    Crea Task
                </button>
            </div>
        </form>
    );
};

export default AddTask;

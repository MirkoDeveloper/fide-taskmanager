import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const AddProject = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        // title: "",
        // acronym: "",
        // projectLead: "",
        // type: "",
        // category: "",
        // // ss: "",
    });

    // const onSubmit = (data) => alert(JSON.stringify(data));
    const onSubmit = (data) => console.log(data);

    const capoProgettoOptions = [
        { label: "Mario Preti", value: "Mario Preti" },
        { label: "Andre Presti", value: "Andre Presti" },
        { label: "Alex Eubach", value: "Alex Eubach" },
        { label: "Renato Bianchi", value: "Renato Bianchi" },
        { label: "Mario Rossi", value: "Mario Rossi" },
        { label: "Luigi Verdi", value: "Luigi Verdi" },
    ];

    const projectTypeOptions = [
        { label: "Software (SW)", value: "Software (SW)" },
        { label: "Business (BS)", value: "Business (BS)" },
    ];

    const projectCategoryOptions = [
        { label: "Sviluppo", value: "Sviluppo" },
        { label: "Supporto", value: "Supporto" },
        { label: "Project Management", value: "Project Management" },
    ];

    return (
        <form
            className="fd-addproject fd-form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="fd-form__wrapper">
                <label htmlFor="NomeProgetto">
                    Nome Progetto (Massimo 20 lettere)
                    <span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.title
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="NomeProgetto"
                    type="text"
                    placeholder="Inserisci un nome per il progetto"
                    {...register("title", { required: true, maxLength: 20 })}
                />
                {errors.title && (
                    <p className="fd-form__error">
                        Inserire un nome per il progetto di massimo 20 lettere
                    </p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Acronimo">
                    Acronimo (3 lettere)<span className="required">*</span>
                </label>
                <input
                    className={
                        !errors.acronym
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    id="Acronimo"
                    type="text"
                    placeholder="Inserisci un acronimo di tre lettere per il progetto"
                    {...register("acronym", {
                        required: true,
                        minLength: 3,
                        maxLength: 3,
                    })}
                />
                {errors.acronym && (
                    <p className="fd-form__error">
                        Inserire un acronimo per il progetto di 3 lettere
                    </p>
                )}
            </div>
            <div className="fd-form__wrapper">
                <label htmlFor="Capo Progetto">
                    Capo Progetto <span className="required">*</span>
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
                            options={capoProgettoOptions}
                            placeholder="Seleziona uno o più capo progetto"
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
                <label htmlFor="Tipo">
                    Tipo <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="type"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={projectTypeOptions}
                            placeholder="Seleziona una tipologia di progetto"
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
            {/* <div className="fd-form__wrapper">
                <label htmlFor="Tipo">
                    Tipo di Progetto <span className="required">*</span>
                </label>
                <select
                    id="Tipo"
                    placeholder="Tipo"
                    className={
                        !errors.type
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    {...register("type", {
                        required: true,
                    })}
                >
                    <option value="Tipo" disabled selected>
                        Seleziona un tipo di Progetto
                    </option>
                    <option>Software (SW)</option>
                    <option>Business (BS)</option>
                </select>
                {errors.type && (
                    <p className="fd-form__error">
                        Selezionare un tipo di Progetto
                    </p>
                )}
            </div> */}
            <div className="fd-form__wrapper">
                <label htmlFor="Category">
                    Categorie di Progetto <span className="required">*</span>
                </label>
                <Controller
                    control={control}
                    name="category"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                    }) => (
                        <Select
                            className="fd-form__input-select"
                            classNamePrefix="fd-form__input-select"
                            options={projectCategoryOptions}
                            placeholder="Seleziona una o più categorie di progetto"
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
            {/* <div className="fd-form__wrapper">
                <label htmlFor="Categoria">
                    Categoria progetto <span className="required">*</span>
                </label>
                <select
                    id="Categoria"
                    placeholder="Tipo"
                    className={
                        !errors.category
                            ? "fd-form__input fd-shadow"
                            : "fd-form__input fd-shadow error"
                    }
                    {...register("category", {
                        required: true,
                    })}
                >
                    <option value="Tipo" disabled selected>
                        Seleziona una Categoria progetto
                    </option>
                    <option>Sviluppo</option>
                    <option>Supporto</option>
                    <option>Project Management</option>
                </select>
                {errors.category && (
                    <p className="fd-form__error">
                        Selezionare una categoria per il Progetto
                    </p>
                )}
            </div> */}
            <div className="fd-form__wrapper">
                <button type="submit" className="fd-form__submit full large">
                    Crea Progetto
                </button>
            </div>
        </form>
    );
};

export default AddProject;

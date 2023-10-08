type SelectFieldProps = {
    selectedValue?: string;
    label: string;
    options: SelectFieldOptionItemProps[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
}

const SelectField = ({ selectedValue, label, options, onChange, placeholder }: SelectFieldProps) => (
    <div>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
        </label>
        <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChange}
            value={selectedValue}
        >
            <option value="" disabled className="hidden">{placeholder}</option>
            {options.map((option, index) => (
                <option key={`optionItem${index}`} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default SelectField;
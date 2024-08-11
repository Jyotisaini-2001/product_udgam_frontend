import { Label,TextInput } from "flowbite-react";
export function Input({label, id, placeholder, FieldName, setFieldName }) {
  return (
    <div className="max-w-sm">
 <Label>
            {label}
          </Label>
          <TextInput
            id={id}
            placeholder={placeholder}
            value={ FieldName}
            onChange={(event) => setFieldName(event.target.value)}
            required
          />
    </div>
  );
}
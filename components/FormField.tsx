// allowing user to fill the field
import { Controller, Control, FieldValues, Path } from "react-hook-form";

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string; // optional of type string
  type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  return (
    // controller form from react 
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {/* label will automatically render name , email ,password */}
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <Input
              className="input"
              type={type} // so that we can hide the password while entering
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;

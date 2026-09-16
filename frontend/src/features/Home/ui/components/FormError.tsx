
import { AlertCircle } from "lucide-react";

type FormErrorProps = {
    message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) {
        return null;
    }

    return (
        <p
            className="form-error flex items-center gap-2"
            role="alert"
        >
            <AlertCircle
                size={16}
                strokeWidth={2}
                aria-hidden="true"
            />

            <span className="sm">{message}</span>
        </p>
    );
};


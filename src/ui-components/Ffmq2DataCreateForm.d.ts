/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Ffmq2DataCreateFormInputValues = {
    companyId?: string;
    personId?: string;
    ffmqScore?: string;
};
export declare type Ffmq2DataCreateFormValidationValues = {
    companyId?: ValidationFunction<string>;
    personId?: ValidationFunction<string>;
    ffmqScore?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ffmq2DataCreateFormOverridesProps = {
    Ffmq2DataCreateFormGrid?: FormProps<GridProps>;
    companyId?: FormProps<TextFieldProps>;
    personId?: FormProps<TextFieldProps>;
    ffmqScore?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Ffmq2DataCreateFormProps = React.PropsWithChildren<{
    overrides?: Ffmq2DataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Ffmq2DataCreateFormInputValues) => Ffmq2DataCreateFormInputValues;
    onSuccess?: (fields: Ffmq2DataCreateFormInputValues) => void;
    onError?: (fields: Ffmq2DataCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Ffmq2DataCreateFormInputValues) => Ffmq2DataCreateFormInputValues;
    onValidate?: Ffmq2DataCreateFormValidationValues;
}>;
export default function Ffmq2DataCreateForm(props: Ffmq2DataCreateFormProps): React.ReactElement;

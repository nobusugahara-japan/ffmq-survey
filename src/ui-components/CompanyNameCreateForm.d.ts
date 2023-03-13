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
export declare type CompanyNameCreateFormInputValues = {
    companyName?: string;
};
export declare type CompanyNameCreateFormValidationValues = {
    companyName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyNameCreateFormOverridesProps = {
    CompanyNameCreateFormGrid?: FormProps<GridProps>;
    companyName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyNameCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyNameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyNameCreateFormInputValues) => CompanyNameCreateFormInputValues;
    onSuccess?: (fields: CompanyNameCreateFormInputValues) => void;
    onError?: (fields: CompanyNameCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CompanyNameCreateFormInputValues) => CompanyNameCreateFormInputValues;
    onValidate?: CompanyNameCreateFormValidationValues;
}>;
export default function CompanyNameCreateForm(props: CompanyNameCreateFormProps): React.ReactElement;

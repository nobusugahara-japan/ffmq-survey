/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CompanyName } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyNameUpdateFormInputValues = {
    companyName?: string;
};
export declare type CompanyNameUpdateFormValidationValues = {
    companyName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyNameUpdateFormOverridesProps = {
    CompanyNameUpdateFormGrid?: FormProps<GridProps>;
    companyName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyNameUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompanyNameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    companyName?: CompanyName;
    onSubmit?: (fields: CompanyNameUpdateFormInputValues) => CompanyNameUpdateFormInputValues;
    onSuccess?: (fields: CompanyNameUpdateFormInputValues) => void;
    onError?: (fields: CompanyNameUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CompanyNameUpdateFormInputValues) => CompanyNameUpdateFormInputValues;
    onValidate?: CompanyNameUpdateFormValidationValues;
}>;
export default function CompanyNameUpdateForm(props: CompanyNameUpdateFormProps): React.ReactElement;

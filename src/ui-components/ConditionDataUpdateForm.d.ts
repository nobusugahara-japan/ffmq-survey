/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ConditionData } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConditionDataUpdateFormInputValues = {
    CompanyName?: string;
    personId?: number;
    ConditionData?: string;
};
export declare type ConditionDataUpdateFormValidationValues = {
    CompanyName?: ValidationFunction<string>;
    personId?: ValidationFunction<number>;
    ConditionData?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConditionDataUpdateFormOverridesProps = {
    ConditionDataUpdateFormGrid?: FormProps<GridProps>;
    CompanyName?: FormProps<TextFieldProps>;
    personId?: FormProps<TextFieldProps>;
    ConditionData?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConditionDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConditionDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conditionData?: ConditionData;
    onSubmit?: (fields: ConditionDataUpdateFormInputValues) => ConditionDataUpdateFormInputValues;
    onSuccess?: (fields: ConditionDataUpdateFormInputValues) => void;
    onError?: (fields: ConditionDataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ConditionDataUpdateFormInputValues) => ConditionDataUpdateFormInputValues;
    onValidate?: ConditionDataUpdateFormValidationValues;
}>;
export default function ConditionDataUpdateForm(props: ConditionDataUpdateFormProps): React.ReactElement;

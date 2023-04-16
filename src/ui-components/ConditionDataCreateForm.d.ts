/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConditionDataCreateFormInputValues = {
    CompanyName?: string;
    personId?: number;
    ConditionData?: string;
};
export declare type ConditionDataCreateFormValidationValues = {
    CompanyName?: ValidationFunction<string>;
    personId?: ValidationFunction<number>;
    ConditionData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConditionDataCreateFormOverridesProps = {
    ConditionDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    personId?: PrimitiveOverrideProps<TextFieldProps>;
    ConditionData?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConditionDataCreateFormProps = React.PropsWithChildren<{
    overrides?: ConditionDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConditionDataCreateFormInputValues) => ConditionDataCreateFormInputValues;
    onSuccess?: (fields: ConditionDataCreateFormInputValues) => void;
    onError?: (fields: ConditionDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConditionDataCreateFormInputValues) => ConditionDataCreateFormInputValues;
    onValidate?: ConditionDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConditionDataCreateForm(props: ConditionDataCreateFormProps): React.ReactElement;

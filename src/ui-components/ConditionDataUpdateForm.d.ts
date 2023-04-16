/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ConditionData as ConditionData0 } from "../models";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConditionDataUpdateFormOverridesProps = {
    ConditionDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    personId?: PrimitiveOverrideProps<TextFieldProps>;
    ConditionData?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConditionDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConditionDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conditionData?: ConditionData0;
    onSubmit?: (fields: ConditionDataUpdateFormInputValues) => ConditionDataUpdateFormInputValues;
    onSuccess?: (fields: ConditionDataUpdateFormInputValues) => void;
    onError?: (fields: ConditionDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConditionDataUpdateFormInputValues) => ConditionDataUpdateFormInputValues;
    onValidate?: ConditionDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConditionDataUpdateForm(props: ConditionDataUpdateFormProps): React.ReactElement;

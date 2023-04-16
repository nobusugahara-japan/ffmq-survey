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
export declare type Ffmq2DataCreateFormInputValues = {
    companyName?: string;
    personId?: number;
    Ffmq2Data?: string;
};
export declare type Ffmq2DataCreateFormValidationValues = {
    companyName?: ValidationFunction<string>;
    personId?: ValidationFunction<number>;
    Ffmq2Data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ffmq2DataCreateFormOverridesProps = {
    Ffmq2DataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    personId?: PrimitiveOverrideProps<TextFieldProps>;
    Ffmq2Data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Ffmq2DataCreateFormProps = React.PropsWithChildren<{
    overrides?: Ffmq2DataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Ffmq2DataCreateFormInputValues) => Ffmq2DataCreateFormInputValues;
    onSuccess?: (fields: Ffmq2DataCreateFormInputValues) => void;
    onError?: (fields: Ffmq2DataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Ffmq2DataCreateFormInputValues) => Ffmq2DataCreateFormInputValues;
    onValidate?: Ffmq2DataCreateFormValidationValues;
} & React.CSSProperties>;
export default function Ffmq2DataCreateForm(props: Ffmq2DataCreateFormProps): React.ReactElement;

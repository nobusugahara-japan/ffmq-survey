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
export declare type AttributeDataCreateFormInputValues = {
    companyName?: string;
    personId?: number;
    attributeData?: string;
};
export declare type AttributeDataCreateFormValidationValues = {
    companyName?: ValidationFunction<string>;
    personId?: ValidationFunction<number>;
    attributeData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttributeDataCreateFormOverridesProps = {
    AttributeDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    personId?: PrimitiveOverrideProps<TextFieldProps>;
    attributeData?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttributeDataCreateFormProps = React.PropsWithChildren<{
    overrides?: AttributeDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AttributeDataCreateFormInputValues) => AttributeDataCreateFormInputValues;
    onSuccess?: (fields: AttributeDataCreateFormInputValues) => void;
    onError?: (fields: AttributeDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttributeDataCreateFormInputValues) => AttributeDataCreateFormInputValues;
    onValidate?: AttributeDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function AttributeDataCreateForm(props: AttributeDataCreateFormProps): React.ReactElement;

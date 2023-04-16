/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AttributeData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttributeDataUpdateFormInputValues = {
    companyName?: string;
    personId?: number;
    attributeData?: string;
};
export declare type AttributeDataUpdateFormValidationValues = {
    companyName?: ValidationFunction<string>;
    personId?: ValidationFunction<number>;
    attributeData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttributeDataUpdateFormOverridesProps = {
    AttributeDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    personId?: PrimitiveOverrideProps<TextFieldProps>;
    attributeData?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttributeDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttributeDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attributeData?: AttributeData;
    onSubmit?: (fields: AttributeDataUpdateFormInputValues) => AttributeDataUpdateFormInputValues;
    onSuccess?: (fields: AttributeDataUpdateFormInputValues) => void;
    onError?: (fields: AttributeDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttributeDataUpdateFormInputValues) => AttributeDataUpdateFormInputValues;
    onValidate?: AttributeDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttributeDataUpdateForm(props: AttributeDataUpdateFormProps): React.ReactElement;

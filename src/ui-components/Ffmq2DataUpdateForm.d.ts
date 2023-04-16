/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ffmq2Data as Ffmq2Data0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Ffmq2DataUpdateFormInputValues = {
    companyName?: string;
    personId?: number;
    Ffmq2Data?: string;
};
export declare type Ffmq2DataUpdateFormValidationValues = {
    companyName?: ValidationFunction<string>;
    personId?: ValidationFunction<number>;
    Ffmq2Data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ffmq2DataUpdateFormOverridesProps = {
    Ffmq2DataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    personId?: PrimitiveOverrideProps<TextFieldProps>;
    Ffmq2Data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Ffmq2DataUpdateFormProps = React.PropsWithChildren<{
    overrides?: Ffmq2DataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ffmq2Data?: Ffmq2Data0;
    onSubmit?: (fields: Ffmq2DataUpdateFormInputValues) => Ffmq2DataUpdateFormInputValues;
    onSuccess?: (fields: Ffmq2DataUpdateFormInputValues) => void;
    onError?: (fields: Ffmq2DataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Ffmq2DataUpdateFormInputValues) => Ffmq2DataUpdateFormInputValues;
    onValidate?: Ffmq2DataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function Ffmq2DataUpdateForm(props: Ffmq2DataUpdateFormProps): React.ReactElement;

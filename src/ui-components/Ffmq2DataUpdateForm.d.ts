/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ffmq2Data } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Ffmq2DataUpdateFormInputValues = {
    companyId?: number;
    personId?: number;
    Ffmq2Data?: string;
};
export declare type Ffmq2DataUpdateFormValidationValues = {
    companyId?: ValidationFunction<number>;
    personId?: ValidationFunction<number>;
    Ffmq2Data?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ffmq2DataUpdateFormOverridesProps = {
    Ffmq2DataUpdateFormGrid?: FormProps<GridProps>;
    companyId?: FormProps<TextFieldProps>;
    personId?: FormProps<TextFieldProps>;
    Ffmq2Data?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Ffmq2DataUpdateFormProps = React.PropsWithChildren<{
    overrides?: Ffmq2DataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ffmq2Data?: Ffmq2Data;
    onSubmit?: (fields: Ffmq2DataUpdateFormInputValues) => Ffmq2DataUpdateFormInputValues;
    onSuccess?: (fields: Ffmq2DataUpdateFormInputValues) => void;
    onError?: (fields: Ffmq2DataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Ffmq2DataUpdateFormInputValues) => Ffmq2DataUpdateFormInputValues;
    onValidate?: Ffmq2DataUpdateFormValidationValues;
}>;
export default function Ffmq2DataUpdateForm(props: Ffmq2DataUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Ffmq2Data as Ffmq2Data0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Ffmq2DataCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    companyName: "",
    personId: "",
    Ffmq2Data: "",
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [personId, setPersonId] = React.useState(initialValues.personId);
  const [ffmqData, setFfmqData] = React.useState(initialValues.Ffmq2Data);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompanyName(initialValues.companyName);
    setPersonId(initialValues.personId);
    setFfmqData(initialValues.Ffmq2Data);
    setErrors({});
  };
  const validations = {
    companyName: [],
    personId: [],
    Ffmq2Data: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          companyName,
          personId,
          Ffmq2Data: ffmqData,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Ffmq2Data0(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "Ffmq2DataCreateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              personId,
              Ffmq2Data: ffmqData,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Person id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={personId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              companyName,
              personId: value,
              Ffmq2Data: ffmqData,
            };
            const result = onChange(modelFields);
            value = result?.personId ?? value;
          }
          if (errors.personId?.hasError) {
            runValidationTasks("personId", value);
          }
          setPersonId(value);
        }}
        onBlur={() => runValidationTasks("personId", personId)}
        errorMessage={errors.personId?.errorMessage}
        hasError={errors.personId?.hasError}
        {...getOverrideProps(overrides, "personId")}
      ></TextField>
      <TextField
        label="Ffmq2 data"
        isRequired={false}
        isReadOnly={false}
        value={ffmqData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              personId,
              Ffmq2Data: value,
            };
            const result = onChange(modelFields);
            value = result?.Ffmq2Data ?? value;
          }
          if (errors.Ffmq2Data?.hasError) {
            runValidationTasks("Ffmq2Data", value);
          }
          setFfmqData(value);
        }}
        onBlur={() => runValidationTasks("Ffmq2Data", ffmqData)}
        errorMessage={errors.Ffmq2Data?.errorMessage}
        hasError={errors.Ffmq2Data?.hasError}
        {...getOverrideProps(overrides, "Ffmq2Data")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

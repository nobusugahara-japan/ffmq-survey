/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ConditionData as ConditionData0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConditionDataCreateForm(props) {
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
    CompanyName: "",
    personId: "",
    ConditionData: "",
  };
  const [CompanyName, setCompanyName] = React.useState(
    initialValues.CompanyName
  );
  const [personId, setPersonId] = React.useState(initialValues.personId);
  const [conditionData, setConditionData] = React.useState(
    initialValues.ConditionData
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompanyName(initialValues.CompanyName);
    setPersonId(initialValues.personId);
    setConditionData(initialValues.ConditionData);
    setErrors({});
  };
  const validations = {
    CompanyName: [],
    personId: [],
    ConditionData: [],
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
          CompanyName,
          personId,
          ConditionData: conditionData,
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
          await DataStore.save(new ConditionData0(modelFields));
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
      {...getOverrideProps(overrides, "ConditionDataCreateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={CompanyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName: value,
              personId,
              ConditionData: conditionData,
            };
            const result = onChange(modelFields);
            value = result?.CompanyName ?? value;
          }
          if (errors.CompanyName?.hasError) {
            runValidationTasks("CompanyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("CompanyName", CompanyName)}
        errorMessage={errors.CompanyName?.errorMessage}
        hasError={errors.CompanyName?.hasError}
        {...getOverrideProps(overrides, "CompanyName")}
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
              CompanyName,
              personId: value,
              ConditionData: conditionData,
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
        label="Condition data"
        isRequired={false}
        isReadOnly={false}
        value={conditionData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName,
              personId,
              ConditionData: value,
            };
            const result = onChange(modelFields);
            value = result?.ConditionData ?? value;
          }
          if (errors.ConditionData?.hasError) {
            runValidationTasks("ConditionData", value);
          }
          setConditionData(value);
        }}
        onBlur={() => runValidationTasks("ConditionData", conditionData)}
        errorMessage={errors.ConditionData?.errorMessage}
        hasError={errors.ConditionData?.hasError}
        {...getOverrideProps(overrides, "ConditionData")}
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

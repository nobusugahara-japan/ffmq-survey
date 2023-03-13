/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ConditionDataUpdateForm(props) {
  const {
    id,
    conditionData,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    CompanyName: undefined,
    personId: undefined,
    ConditionData: undefined,
  };
  const [CompanyName, setCompanyName] = React.useState(
    initialValues.CompanyName
  );
  const [personId, setPersonId] = React.useState(initialValues.personId);
  const [ConditionData, setConditionData] = React.useState(
    initialValues.ConditionData
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...conditionDataRecord };
    setCompanyName(cleanValues.CompanyName);
    setPersonId(cleanValues.personId);
    setConditionData(cleanValues.ConditionData);
    setErrors({});
  };
  const [conditionDataRecord, setConditionDataRecord] =
    React.useState(conditionData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(ConditionData, id)
        : conditionData;
      setConditionDataRecord(record);
    };
    queryData();
  }, [id, conditionData]);
  React.useEffect(resetStateValues, [conditionDataRecord]);
  const validations = {
    CompanyName: [],
    personId: [],
    ConditionData: [],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          ConditionData,
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
          await DataStore.save(
            ConditionData.copyOf(conditionDataRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ConditionDataUpdateForm")}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={CompanyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName: value,
              personId,
              ConditionData,
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
        defaultValue={personId}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              personId: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              CompanyName,
              personId: value,
              ConditionData,
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
        defaultValue={ConditionData}
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
        onBlur={() => runValidationTasks("ConditionData", ConditionData)}
        errorMessage={errors.ConditionData?.errorMessage}
        hasError={errors.ConditionData?.hasError}
        {...getOverrideProps(overrides, "ConditionData")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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

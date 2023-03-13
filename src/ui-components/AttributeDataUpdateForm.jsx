/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { AttributeData } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function AttributeDataUpdateForm(props) {
  const {
    id,
    attributeData,
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
    companyName: undefined,
    personId: undefined,
    attributeData: undefined,
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [personId, setPersonId] = React.useState(initialValues.personId);
  const [attributeData, setAttributeData] = React.useState(
    initialValues.attributeData
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...attributeDataRecord };
    setCompanyName(cleanValues.companyName);
    setPersonId(cleanValues.personId);
    setAttributeData(cleanValues.attributeData);
    setErrors({});
  };
  const [attributeDataRecord, setAttributeDataRecord] =
    React.useState(attributeData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(AttributeData, id)
        : attributeData;
      setAttributeDataRecord(record);
    };
    queryData();
  }, [id, attributeData]);
  React.useEffect(resetStateValues, [attributeDataRecord]);
  const validations = {
    companyName: [],
    personId: [],
    attributeData: [],
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
          companyName,
          personId,
          attributeData,
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
            AttributeData.copyOf(attributeDataRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AttributeDataUpdateForm")}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              personId,
              attributeData,
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
              companyName,
              personId: value,
              attributeData,
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
        label="Attribute data"
        isRequired={false}
        isReadOnly={false}
        defaultValue={attributeData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              personId,
              attributeData: value,
            };
            const result = onChange(modelFields);
            value = result?.attributeData ?? value;
          }
          if (errors.attributeData?.hasError) {
            runValidationTasks("attributeData", value);
          }
          setAttributeData(value);
        }}
        onBlur={() => runValidationTasks("attributeData", attributeData)}
        errorMessage={errors.attributeData?.errorMessage}
        hasError={errors.attributeData?.hasError}
        {...getOverrideProps(overrides, "attributeData")}
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

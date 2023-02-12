/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Ffmq2Data } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function Ffmq2DataUpdateForm(props) {
  const {
    id,
    ffmq2Data,
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
    companyId: undefined,
    personId: undefined,
    ffmqScore: undefined,
  };
  const [companyId, setCompanyId] = React.useState(initialValues.companyId);
  const [personId, setPersonId] = React.useState(initialValues.personId);
  const [ffmqScore, setFfmqScore] = React.useState(initialValues.ffmqScore);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...ffmq2DataRecord };
    setCompanyId(cleanValues.companyId);
    setPersonId(cleanValues.personId);
    setFfmqScore(cleanValues.ffmqScore);
    setErrors({});
  };
  const [ffmq2DataRecord, setFfmq2DataRecord] = React.useState(ffmq2Data);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Ffmq2Data, id) : ffmq2Data;
      setFfmq2DataRecord(record);
    };
    queryData();
  }, [id, ffmq2Data]);
  React.useEffect(resetStateValues, [ffmq2DataRecord]);
  const validations = {
    companyId: [],
    personId: [],
    ffmqScore: [],
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
          companyId,
          personId,
          ffmqScore,
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
            Ffmq2Data.copyOf(ffmq2DataRecord, (updated) => {
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
      {...getOverrideProps(overrides, "Ffmq2DataUpdateForm")}
    >
      <TextField
        label="Company id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={companyId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyId: value,
              personId,
              ffmqScore,
            };
            const result = onChange(modelFields);
            value = result?.companyId ?? value;
          }
          if (errors.companyId?.hasError) {
            runValidationTasks("companyId", value);
          }
          setCompanyId(value);
        }}
        onBlur={() => runValidationTasks("companyId", companyId)}
        errorMessage={errors.companyId?.errorMessage}
        hasError={errors.companyId?.hasError}
        {...getOverrideProps(overrides, "companyId")}
      ></TextField>
      <TextField
        label="Person id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={personId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyId,
              personId: value,
              ffmqScore,
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
        label="Ffmq score"
        isRequired={false}
        isReadOnly={false}
        defaultValue={ffmqScore}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyId,
              personId,
              ffmqScore: value,
            };
            const result = onChange(modelFields);
            value = result?.ffmqScore ?? value;
          }
          if (errors.ffmqScore?.hasError) {
            runValidationTasks("ffmqScore", value);
          }
          setFfmqScore(value);
        }}
        onBlur={() => runValidationTasks("ffmqScore", ffmqScore)}
        errorMessage={errors.ffmqScore?.errorMessage}
        hasError={errors.ffmqScore?.hasError}
        {...getOverrideProps(overrides, "ffmqScore")}
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
